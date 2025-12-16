"use client";

import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { OpenAPI, PaymentsService } from "@/api-client";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";

const DegreeCard = ({
  degree,
  selected,
  onSelect,
}: {
  degree: string;
  selected: boolean;
  onSelect: (degree: string) => void;
}) => {
  const baseStyle =
    "p-4 border rounded-lg transition-all cursor-pointer text-center text-sm font-medium";
  const selectedStyle = "border-blue-500 bg-blue-50 text-blue-700";
  const unselectedStyle =
    "border-gray-300 hover:border-blue-400 hover:bg-gray-50 text-gray-700";

  return (
    <div
      className={`${baseStyle} ${selected ? selectedStyle : unselectedStyle}`}
      onClick={() => onSelect(degree)}
    >
      {degree}
    </div>
  );
};

const FormCheckbox = ({
  checked,
  onCheckedChange,
  children,
  id,
}: {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  children: React.ReactNode;
  id: string;
}) => (
  <div className="flex items-center space-x-2">
    <Checkbox id={id} checked={checked} onCheckedChange={onCheckedChange} />
    <label
      htmlFor={id}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {children}
    </label>
  </div>
);

export default function ContractForm({
  purchasePayload,
  token,
  courseFound,
  isPurchased,
}: {
  purchasePayload: {
    email: string;
    courseId: string;
  };
  token: string;
  courseFound: boolean;
  isPurchased?: boolean;
}) {
  const [isUsResident, setIsUsResident] = useState(false);
  const [degree, setDegree] = useState("");
  const [willNotDrop, setWillNotDrop] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const searchParam = useSearchParams();

  useEffect(() => {
    if (!courseFound) {
      toast.error("Course not found");
    }
    const status = searchParam.get("status");
    if (!status) return;
    if (status === "success") {
      toast.success("Purchase successful");
    } else {
      toast.error("Purchase failed");
    }
  }, []);

  const handleDegreeChange = (selectedDegree: string) => {
    setDegree((currentDegree) =>
      currentDegree === selectedDegree ? "" : selectedDegree,
    );
  };

  const isFormValid = isUsResident && degree && willNotDrop && agreedToTerms;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(purchasePayload);
    if (!purchasePayload.courseId || !purchasePayload.email) {
      toast.error("Invalid input for course/email");
      return;
    }

    OpenAPI.TOKEN = token;
    const resp =
      await PaymentsService.paymentsControllerCreateCheckout(purchasePayload);
    if (!resp.sessionId) {
      toast.error("Failed to create checkout session");
      return;
    }

    window.location.href = resp.url;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg space-y-6 bg-white p-6 rounded-lg shadow-xl"
    >
      <FormCheckbox
        id="us-resident"
        checked={isUsResident}
        onCheckedChange={setIsUsResident}
      >
        I live in the US
      </FormCheckbox>
      <p className="text-sm font-semibold text-gray-900">
        I have a degree in one of these fields:
      </p>
      <div className="grid grid-cols-3 gap-4">
        <DegreeCard
          degree="EEE"
          selected={degree === "EEE"}
          onSelect={handleDegreeChange}
        />
        <DegreeCard
          degree="Mechanical"
          selected={degree === "Mechanical"}
          onSelect={handleDegreeChange}
        />
        <DegreeCard
          degree="CSE"
          selected={degree === "CSE"}
          onSelect={handleDegreeChange}
        />
      </div>

      <FormCheckbox
        id="no-drop"
        checked={willNotDrop}
        onCheckedChange={setWillNotDrop}
      >
        I won't be dropping this course midway
      </FormCheckbox>

      <FormCheckbox
        id="terms-agree"
        checked={agreedToTerms}
        onCheckedChange={setAgreedToTerms}
      >
        I agree to all the terms
      </FormCheckbox>

      <div className="pt-4">
        <Button
          type="submit"
          disabled={!isFormValid || isPurchased || !courseFound}
          className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPurchased ? "Already Purchased" : "Checkout with Stripe"}
        </Button>
      </div>
    </form>
  );
}
