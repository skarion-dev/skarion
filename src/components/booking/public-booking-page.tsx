"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { format, parseISO } from "date-fns";
import {
  CheckCircle2,
  Clock3,
  FileText,
  Globe2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Upload,
  User,
  X,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn, getApiUrl } from "@/lib/utils";

const US_TIMEZONES = [
  { value: "America/New_York", label: "Eastern Time (US & Canada)" },
  { value: "America/Chicago", label: "Central Time (US & Canada)" },
  { value: "America/Denver", label: "Mountain Time (US & Canada)" },
  { value: "America/Phoenix", label: "Arizona Time" },
  { value: "America/Los_Angeles", label: "Pacific Time (US & Canada)" },
  { value: "America/Anchorage", label: "Alaska Time (US & Canada)" },
  { value: "Pacific/Honolulu", label: "Hawaii Time (US & Canada)" },
  { value: "America/Puerto_Rico", label: "Atlantic Time (Puerto Rico)" },
];

const FALLBACK_TIMEZONE = "America/New_York";

const TIMEZONE_ALIASES: Record<string, string> = {
  "US/Eastern": "America/New_York",
  "America/Detroit": "America/New_York",
  "America/Indiana/Indianapolis": "America/New_York",
  "America/Indiana/Marengo": "America/New_York",
  "America/Indiana/Vevay": "America/New_York",
  "America/Indiana/Vincennes": "America/New_York",
  "America/Indiana/Winamac": "America/New_York",
  "America/Kentucky/Louisville": "America/New_York",
  "America/Kentucky/Monticello": "America/New_York",
  "US/Central": "America/Chicago",
  "America/Indiana/Knox": "America/Chicago",
  "America/Indiana/Tell_City": "America/Chicago",
  "America/Menominee": "America/Chicago",
  "America/North_Dakota/Beulah": "America/Chicago",
  "America/North_Dakota/Center": "America/Chicago",
  "America/North_Dakota/New_Salem": "America/Chicago",
  "US/Mountain": "America/Denver",
  "America/Boise": "America/Denver",
  "US/Pacific": "America/Los_Angeles",
  "US/Alaska": "America/Anchorage",
  "US/Hawaii": "Pacific/Honolulu",
};

/**
 * Detect the browser's IANA timezone. Known aliases are normalized for the
 * booking service; detection failure falls back to Eastern Time, which still
 * has to be explicitly confirmed before submission.
 */
function detectTimezone(): string {
  try {
    const detected = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!detected) return FALLBACK_TIMEZONE;

    const exact = US_TIMEZONES.find((timezone) => timezone.value === detected);
    if (exact) return exact.value;

    // Preserve any valid browser-reported IANA timezone that is not in the
    // curated list. A rejected timezone is safer than silently changing it.
    return TIMEZONE_ALIASES[detected] ?? detected;
  } catch {
    return FALLBACK_TIMEZONE;
  }
}

function getTimezoneLabel(timezone: string): string {
  return (
    US_TIMEZONES.find((item) => item.value === timezone)?.label ?? timezone
  );
}

function getTimezoneDetails(timezone: string, instant = new Date()): string {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      timeZoneName: "short",
      hour: "numeric",
      minute: "2-digit",
    }).formatToParts(instant);
    const abbreviation = parts.find(
      (part) => part.type === "timeZoneName",
    )?.value;

    return abbreviation
      ? `${getTimezoneLabel(timezone)} (${abbreviation})`
      : getTimezoneLabel(timezone);
  } catch {
    return getTimezoneLabel(timezone);
  }
}

function formatInTimezone(isoDate: string, timezone: string): string {
  try {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    }).format(new Date(isoDate));
  } catch {
    return isoDate;
  }
}

const ALLOWED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const MAX_RESUME_SIZE = 10 * 1024 * 1024; // 10 MB

type BookingSlot = {
  value: string;
  label: string;
  startAt: string;
  endAt: string;
};

type BookingAvailabilityDay = {
  date: string;
  slots: BookingSlot[];
};

type BookingAvailabilityResponse = {
  timezone: string;
  timezoneLabel: string;
  durationMinutes: number;
  days: BookingAvailabilityDay[];
};

type BookingResponse = {
  id: string;
  fullName: string;
  slotDate: string;
  slotLabel: string;
  slotStartAt: string;
  timezone: string;
  meetingJoinUrl?: string;
};

const bookingFormSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(120),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .regex(
      /^(\+?1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/,
      "Enter a valid 10-digit US phone number",
    ),
  address: z.string().max(255, "Address is too long").optional(),
  note: z.string().max(1000, "Note is too long").optional(),
  slotDate: z.string().min(1, "Please choose a date"),
  slotValue: z.string().min(1, "Please choose a time"),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const getApiErrorMessage = async (response: Response) => {
  try {
    const payload = (await response.json()) as {
      message?: string | string[];
      error?: string;
    };

    if (Array.isArray(payload.message)) {
      return payload.message.join(", ");
    }

    return payload.message || payload.error || "Something went wrong";
  } catch {
    return "Something went wrong";
  }
};

export function PublicBookingPage() {
  const [availability, setAvailability] =
    useState<BookingAvailabilityResponse | null>(null);
  const [loadingAvailability, setLoadingAvailability] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<BookingResponse | null>(
    null,
  );
  const [confirmedBookingTimezone, setConfirmedBookingTimezone] = useState<
    string | null
  >(null);
  const [selectedTimezone, setSelectedTimezone] = useState<string | null>(null);
  const [confirmationTimezone, setConfirmationTimezone] =
    useState(FALLBACK_TIMEZONE);
  const [timezoneDialogOpen, setTimezoneDialogOpen] = useState(false);
  const [pendingBooking, setPendingBooking] =
    useState<BookingFormValues | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const availabilityAbortRef = useRef<AbortController | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Detect timezone on first mount, before availability is fetched
    const detected = detectTimezone();
    setSelectedTimezone(detected);
    setIsMounted(true);
  }, []);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      note: "",
      slotDate: "",
      slotValue: "",
    },
  });

  const selectedDate = form.watch("slotDate");
  const selectedSlot = form.watch("slotValue");

  const rawAvailableDays = useMemo(
    () => availability?.days ?? [],
    [availability],
  );

  // Only show days/slots that are at least 24 hours from now.
  const cutoff = useMemo(() => {
    const t = new Date();
    t.setHours(t.getHours() + 24);
    return t;
  }, []);

  const availableDays = useMemo(
    () =>
      rawAvailableDays
        .map((day) => ({
          ...day,
          slots: day.slots.filter((slot) => new Date(slot.startAt) > cutoff),
        }))
        .filter((day) => day.slots.length > 0),
    [rawAvailableDays, cutoff],
  );

  const availableDateSet = useMemo(
    () => new Set(availableDays.map((day) => day.date)),
    [availableDays],
  );

  const selectedDay = useMemo(
    () => availableDays.find((day) => day.date === selectedDate),
    [availableDays, selectedDate],
  );

  const selectedSlotDetails = useMemo(
    () => selectedDay?.slots.find((slot) => slot.value === selectedSlot),
    [selectedDay, selectedSlot],
  );

  const timezoneOptions = useMemo(() => {
    const knownValues = new Set(US_TIMEZONES.map((timezone) => timezone.value));
    const detectedOptions = [selectedTimezone, confirmationTimezone]
      .filter((timezone): timezone is string => Boolean(timezone))
      .filter((timezone, index, values) => values.indexOf(timezone) === index)
      .filter((timezone) => !knownValues.has(timezone))
      .map((timezone) => ({
        value: timezone,
        label: `Detected timezone (${timezone.replaceAll("_", " ")})`,
      }));

    return [...detectedOptions, ...US_TIMEZONES];
  }, [confirmationTimezone, selectedTimezone]);

  const loadAvailability = useCallback(
    async (timezone: string) => {
      availabilityAbortRef.current?.abort();
      const controller = new AbortController();
      availabilityAbortRef.current = controller;
      setLoadingAvailability(true);

      try {
        const query = new URLSearchParams({ timezone });
        const response = await fetch(
          getApiUrl(`/bookings/availability?${query}`),
          {
            cache: "no-store",
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error(await getApiErrorMessage(response));
        }

        const payload = (await response.json()) as BookingAvailabilityResponse;
        if (controller.signal.aborted) return;

        if (payload.timezone && payload.timezone !== timezone) {
          throw new Error(
            "The booking service returned times for a different timezone. Please try again.",
          );
        }

        setAvailability(payload);

        if (payload.days.length && !form.getValues("slotDate")) {
          const minimumStart = Date.now() + 24 * 60 * 60 * 1000;
          const firstUsableDay = payload.days.find((day) =>
            day.slots.some(
              (slot) => new Date(slot.startAt).getTime() > minimumStart,
            ),
          );

          if (firstUsableDay) {
            form.setValue("slotDate", firstUsableDay.date, {
              shouldValidate: true,
            });
          }
        }
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError")
          return;

        const message =
          error instanceof Error
            ? error.message
            : "Unable to load booking times";
        toast.error(message);
      } finally {
        if (availabilityAbortRef.current === controller) {
          setLoadingAvailability(false);
        }
      }
    },
    [form],
  );

  useEffect(() => {
    if (!selectedTimezone) return;

    void loadAvailability(selectedTimezone);
    return () => availabilityAbortRef.current?.abort();
  }, [loadAvailability, selectedTimezone]);

  useEffect(() => {
    if (!selectedDate) {
      return;
    }

    if (!selectedDay) {
      form.setValue("slotDate", "", { shouldValidate: true });
      form.setValue("slotValue", "", { shouldValidate: true });
      return;
    }

    const slotStillExists = selectedDay.slots.some(
      (slot) => slot.value === selectedSlot,
    );

    if (!slotStillExists) {
      form.setValue("slotValue", "", { shouldValidate: true });
    }
  }, [form, selectedDate, selectedDay, selectedSlot]);

  const handleResumeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResumeError("");
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    if (!ALLOWED_RESUME_TYPES.includes(file.type)) {
      setResumeError(
        "Please upload a PDF or Word document (.pdf, .doc, .docx)",
      );
      e.target.value = "";
      return;
    }

    if (file.size > MAX_RESUME_SIZE) {
      setResumeError("Resume must be under 10 MB");
      e.target.value = "";
      return;
    }

    setResumeFile(file);
  };

  const clearResume = () => {
    setResumeFile(null);
    setResumeError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleTimezoneChange = (timezone: string) => {
    if (timezone === selectedTimezone) return;

    setAvailability(null);
    form.setValue("slotDate", "", { shouldValidate: false });
    form.setValue("slotValue", "", { shouldValidate: false });
    form.clearErrors(["slotDate", "slotValue"]);
    setSelectedTimezone(timezone);
  };

  const requestBookingConfirmation = (values: BookingFormValues) => {
    if (!resumeFile) {
      setResumeError("Please upload your resume");
      return;
    }

    if (!selectedTimezone) {
      toast.error("Please select your timezone");
      return;
    }

    if (!selectedSlotDetails) {
      toast.error(
        "That time is no longer available. Please choose another slot.",
      );
      return;
    }

    setPendingBooking(values);
    setConfirmationTimezone(selectedTimezone);
    setTimezoneDialogOpen(true);
  };

  const submitBooking = async (values: BookingFormValues, timezone: string) => {
    if (!resumeFile) {
      setResumeError("Please upload your resume");
      setTimezoneDialogOpen(false);
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("fullName", values.fullName.trim());
      formData.append("email", values.email.trim());
      formData.append("phone", values.phone.trim());
      formData.append("slotDate", values.slotDate);
      formData.append("slotValue", values.slotValue);
      formData.append("timezone", timezone);

      if (selectedSlotDetails) {
        formData.append("slotStartAt", selectedSlotDetails.startAt);
      }

      if (values.address?.trim()) {
        formData.append("address", values.address.trim());
      }
      if (values.note?.trim()) {
        formData.append("note", values.note.trim());
      }

      formData.append("resume", resumeFile);

      const response = await fetch(getApiUrl("/bookings"), {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(await getApiErrorMessage(response));
      }

      const booking = (await response.json()) as BookingResponse;
      setConfirmation(booking);
      setConfirmedBookingTimezone(booking.timezone);
      setPendingBooking(null);
      setTimezoneDialogOpen(false);
      toast.success("Your call has been booked");

      form.reset({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        note: "",
        slotDate: "",
        slotValue: "",
      });
      clearResume();

      await loadAvailability(timezone);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to book your call";
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };

  const confirmTimezoneAndBook = async () => {
    if (!pendingBooking || !selectedTimezone) return;

    if (confirmationTimezone !== selectedTimezone) {
      setTimezoneDialogOpen(false);
      setPendingBooking(null);
      handleTimezoneChange(confirmationTimezone);
      toast.info("Timezone updated. Please choose your date and time again.");
      return;
    }

    await submitBooking(pendingBooking, selectedTimezone);
  };

  const selectedCalendarDate = selectedDate
    ? parseISO(`${selectedDate}T12:00:00`)
    : undefined;

  const timezoneLabel = availability?.timezoneLabel ?? "Local time";
  const firstAvailableDate = availableDays[0]?.date;

  if (!isMounted) {
    return null;
  }

  return (
    <div className="px-4 py-10 md:px-6 md:py-14">
      <div className="mx-auto w-full max-w-6xl space-y-6">
        {confirmation && (
          <Card className="border-emerald-200 bg-emerald-50/90 shadow-lg shadow-emerald-100/60">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 text-emerald-600" />
                <div className="space-y-2 text-slate-800">
                  <p className="font-semibold">Booking confirmed</p>
                  <p className="text-sm">
                    {confirmation.fullName}, your call is booked for{" "}
                    {confirmedBookingTimezone
                      ? formatInTimezone(
                          confirmation.slotStartAt,
                          confirmedBookingTimezone,
                        )
                      : confirmation.slotLabel}
                    .
                  </p>
                  {confirmedBookingTimezone && (
                    <p className="text-xs font-medium text-emerald-700">
                      Timezone:{" "}
                      {getTimezoneDetails(
                        confirmedBookingTimezone,
                        new Date(confirmation.slotStartAt),
                      )}
                    </p>
                  )}
                  {confirmation.meetingJoinUrl && (
                    <a
                      href={confirmation.meetingJoinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex text-sm font-medium text-sky-700 underline underline-offset-4"
                    >
                      Open meeting link
                    </a>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="overflow-hidden border-slate-1 bg-white/90 ">
          <CardHeader className="border-b border-slate-200 bg-slate-50/70 px-6 md:px-8">
            <CardTitle className="text-2xl text-slate-950">
              Skarion Consultation Call
            </CardTitle>
            <CardDescription className="text-sm text-slate-600">
              {loadingAvailability
                ? "Loading available dates and times..."
                : firstAvailableDate
                  ? `Select from the next available slots in ${timezoneLabel}.`
                  : "There are no open slots right now. Please check back soon."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 px-6 py-6 md:px-8 md:py-8">
            <div className="grid gap-8 xl:grid-cols-[minmax(340px,420px)_1fr]">
              <section className="space-y-5">
                <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 shadow-inner shadow-slate-100">
                  <Calendar
                    mode="single"
                    selected={selectedCalendarDate}
                    onSelect={(date: Date | undefined) => {
                      if (!date) {
                        return;
                      }

                      const nextDate = format(date, "yyyy-MM-dd");
                      form.setValue("slotDate", nextDate, {
                        shouldValidate: true,
                      });
                    }}
                    disabled={(date: Date | undefined) =>
                      !availableDateSet.has(format(date as Date, "yyyy-MM-dd"))
                    }
                    className="w-full min-w-0 rounded-[1.75rem] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-2 sm:p-3 md:p-5 [--cell-size:2rem] sm:[--cell-size:2.4rem] md:[--cell-size:2.8rem] shadow-[0_18px_45px_-24px_rgba(15,23,42,0.12)]"
                  />

                  {form.formState.errors.slotDate && (
                    <p className="mt-3 text-sm text-destructive">
                      {form.formState.errors.slotDate.message}
                    </p>
                  )}
                </div>

                <div
                  className={cn(
                    "rounded-3xl border bg-white p-5 shadow-sm transition-all duration-300",
                    form.formState.errors.slotValue
                      ? "border-red-500"
                      : "border-slate-200",
                  )}
                >
                  <div className="flex flex-col justify-between gap-3">
                    <div>
                      <Label className="text-sm font-medium text-slate-900">
                        Available times
                      </Label>
                      <p className="mt-1 text-sm text-slate-500">
                        {selectedCalendarDate
                          ? format(selectedCalendarDate, "EEEE, MMMM d")
                          : "Select a date to see times"}
                      </p>
                    </div>
                    <div className="shrink-0 w-full sm:w-[240px] mt-4">
                      <Select
                        value={selectedTimezone ?? undefined}
                        onValueChange={handleTimezoneChange}
                      >
                        <SelectTrigger className="h-9 w-full bg-slate-50">
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          {timezoneOptions.map((tz) => (
                            <SelectItem key={tz.value} value={tz.value}>
                              {tz.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <p className="mt-2 text-xs text-slate-500">
                        Auto-detected. You will confirm this before booking.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {selectedDay?.slots.length ? (
                      selectedDay.slots.map((slot) => (
                        <Button
                          key={`${selectedDay.date}-${slot.value}`}
                          type="button"
                          variant={
                            selectedSlot === slot.value ? "default" : "outline"
                          }
                          className={cn(
                            "h-auto min-h-16 justify-start rounded-2xl whitespace-normal border px-4 py-4 text-left text-sm font-medium transition-all",
                            selectedSlot === slot.value
                              ? "border-slate-900 bg-slate-900 text-white shadow-lg shadow-slate-300"
                              : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                          )}
                          onClick={() =>
                            form.setValue("slotValue", slot.value, {
                              shouldValidate: true,
                            })
                          }
                        >
                          {slot.label}
                        </Button>
                      ))
                    ) : (
                      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-500 sm:col-span-2">
                        {selectedDate
                          ? "No times are left on this day."
                          : "Choose a date to see available times."}
                      </div>
                    )}
                  </div>
                </div>
              </section>

              <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
                <div className="mb-6 space-y-2">
                  <h2 className="text-xl font-semibold text-slate-950">
                    Your details
                  </h2>
                  <p className="text-sm text-slate-500">
                    Fill out the form below to confirm your booking.
                  </p>
                </div>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(requestBookingConfirmation)}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              <span className="inline-flex items-center gap-2">
                                <User className="size-4" />
                                Full name
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              <span className="inline-flex items-center gap-2">
                                <Mail className="size-4" />
                                Email
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="you@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              <span className="inline-flex items-center gap-2">
                                <Phone className="size-4" />
                                Phone
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="+1 (555) 123-4567"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              <span className="inline-flex items-center gap-2">
                                <MapPin className="size-4" />
                                Address
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Optional"
                                {...field}
                                value={field.value ?? ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* ── Resume Upload (mandatory) ─────────────────────── */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="resume-upload"
                        className="text-sm font-medium text-slate-900"
                      >
                        <span className="inline-flex items-center gap-2">
                          <FileText className="size-4" />
                          Resume <span className="text-red-500">*</span>
                        </span>
                      </Label>

                      {resumeFile ? (
                        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3">
                          <FileText className="size-5 shrink-0 text-slate-500" />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-slate-700">
                              {resumeFile.name}
                            </p>
                            <p className="text-xs text-slate-400">
                              {(resumeFile.size / 1024).toFixed(0)} KB
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={clearResume}
                            className="rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600"
                            aria-label="Remove resume"
                          >
                            <X className="size-4" />
                          </button>
                        </div>
                      ) : (
                        <label
                          htmlFor="resume-upload"
                          className={cn(
                            "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-4 py-6 text-center transition-colors hover:border-slate-400 hover:bg-slate-50",
                            resumeError
                              ? "border-red-400 bg-red-50/50"
                              : "border-slate-300 bg-slate-50/60",
                          )}
                        >
                          <Upload className="size-6 text-slate-400" />
                          <div>
                            <p className="text-sm font-medium text-slate-600">
                              Click to upload your resume
                            </p>
                            <p className="mt-0.5 text-xs text-slate-400">
                              PDF or Word document, up to 10 MB
                            </p>
                          </div>
                        </label>
                      )}

                      <input
                        ref={fileInputRef}
                        id="resume-upload"
                        type="file"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        className="sr-only"
                        onChange={handleResumeSelect}
                      />

                      {resumeError && (
                        <p className="text-sm text-destructive">
                          {resumeError}
                        </p>
                      )}
                    </div>

                    <FormField
                      control={form.control}
                      name="note"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Note</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Anything you want us to know before the call"
                              rows={5}
                              className="rounded-2xl border-slate-200 bg-slate-50/60"
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="text-sm text-slate-500">
                        Confirmation and calendar details will be sent after
                        booking.
                      </div>
                      <Button
                        type="submit"
                        className="h-12 w-full rounded-2xl px-6 text-base font-semibold sm:w-auto"
                        disabled={
                          submitting ||
                          loadingAvailability ||
                          !selectedTimezone ||
                          !availableDays.length
                        }
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="size-4 animate-spin" />
                            Booking your call...
                          </>
                        ) : (
                          "Book call"
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog.Root
        open={timezoneDialogOpen}
        onOpenChange={(open) => {
          if (submitting) return;
          setTimezoneDialogOpen(open);
          if (!open) setPendingBooking(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-slate-950/60 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl focus:outline-none sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                <Globe2 className="size-5" />
              </div>
              <Dialog.Close asChild>
                <button
                  type="button"
                  disabled={submitting}
                  className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 disabled:pointer-events-none disabled:opacity-50"
                  aria-label="Close timezone confirmation"
                >
                  <X className="size-5" />
                </button>
              </Dialog.Close>
            </div>

            <Dialog.Title className="mt-5 text-2xl font-semibold text-slate-950">
              Confirm your timezone
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-sm leading-6 text-slate-600">
              We detected this automatically. Confirm it before booking so your
              displayed time and calendar invitation match.
            </Dialog.Description>

            {pendingBooking && (
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Clock3 className="size-4 text-slate-500" />
                  {format(
                    parseISO(`${pendingBooking.slotDate}T12:00:00`),
                    "EEEE, MMMM d, yyyy",
                  )}
                </div>
                <p className="mt-1 pl-6 text-sm text-slate-600">
                  {selectedSlotDetails?.label ?? pendingBooking.slotValue}
                </p>
              </div>
            )}

            <div className="mt-5 space-y-2">
              <Label
                htmlFor="final-timezone"
                className="text-sm font-semibold text-slate-900"
              >
                Your timezone
              </Label>
              <select
                id="final-timezone"
                value={confirmationTimezone}
                onChange={(event) =>
                  setConfirmationTimezone(event.target.value)
                }
                disabled={submitting}
                className="h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100 disabled:opacity-60"
              >
                {timezoneOptions.map((timezone) => (
                  <option key={timezone.value} value={timezone.value}>
                    {timezone.label}
                  </option>
                ))}
              </select>
              <p className="text-xs font-medium text-slate-500">
                {getTimezoneDetails(
                  confirmationTimezone,
                  selectedSlotDetails
                    ? new Date(selectedSlotDetails.startAt)
                    : new Date(),
                )}
              </p>
            </div>

            {confirmationTimezone !== selectedTimezone && (
              <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
                Changing timezone will reload availability. You will need to
                choose the date and time again.
              </p>
            )}

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <Dialog.Close asChild>
                <Button type="button" variant="outline" disabled={submitting}>
                  Go back
                </Button>
              </Dialog.Close>
              <Button
                type="button"
                onClick={() => void confirmTimezoneAndBook()}
                disabled={submitting}
                className="min-w-44"
              >
                {submitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Booking your call...
                  </>
                ) : confirmationTimezone !== selectedTimezone ? (
                  "Apply timezone"
                ) : (
                  "Confirm timezone & book"
                )}
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
