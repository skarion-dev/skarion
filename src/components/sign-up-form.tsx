"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState, useState, useTransition, useEffect } from "react";
// import FormError from "./common/form-error";
// import { handleSignUp } from "@/app/auth/sign-up/actions";
import { toast } from "sonner";
import { redirect } from "next/navigation";

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [isPending, setIsPending] = useState(false);
  // const [state, action]: any = useActionState(handleSignUp, {});

  const [transition, startTransition] = useTransition();

  // useEffect(() => {
  //   if (state.error) {
  //     toast(state.error)
  //     setIsPending(false);
  //   }
  //   if (state.success) {
  //     setIsPending(false);
  //     redirect('/app/dashboard');
  //   }
  //   if (state.formErrors) {
  //     setIsPending(false);
  //     console.log("state.formErrors", state.formErrors);
  //   }
  // }, [state]);

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   setIsPending(true);
  //   const formData = new FormData(event.currentTarget);
  //   const email = formData.get("email") || "";
  //   const username = formData.get("username") || "";
  //   const password = formData.get("password") || "";
  //   const confirm_password = formData.get("confirm_password") || "";

  //   formData.set("email", email);
  //   formData.set("username", username);
  //   formData.set("password", password);
  //   formData.set("confirm_password", confirm_password);

  //   startTransition(() => {
  //     action(formData);
  //   });
  // };

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="grid gap-6">
        <div className="grid">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            required
            className="mt-3"
          />
          {/* {state.formErrors?.email && <FormError error={state.formErrors?.email} />} */}
        </div>
        <div className="grid">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="rianulamin.r"
            required
            className="mt-3"
          />
          {/* {state.formErrors?.username && <FormError error={state.formErrors?.username} />} */}
        </div>
        <div className="grid">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            required
            className="mt-3"
          />
          {/* {state.formErrors?.password && <FormError error={state.formErrors?.password} />} */}
        </div>
        <div className="grid">
          <div className="flex items-center">
            <Label htmlFor="confirm_password">Confirm Password</Label>
          </div>
          <Input
            id="confirm_password"
            name="confirm_password"
            type="password"
            required
            className="mt-3"
          />
          {/* {state.formErrors?.confirm_password && <FormError error={state.formErrors?.confirm_password} />} */}
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-4 py-2.5 px-6 text-[15px] font-medium tracking-wide text-slate-900 border border-slate-300 rounded-md hover:bg-slate-100 focus:outline-none cursor-pointer"
          disabled={isPending}
        >
          {isPending ? "Signing Up..." : "Sign Up"}
        </button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or
          </span>
        </div>
        <button
          type="button"
          className="w-full flex items-center justify-center gap-4 py-2.5 px-6 text-[15px] font-medium tracking-wide text-slate-900 border border-slate-300 rounded-md hover:bg-slate-100 focus:outline-none cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            className="inline"
            viewBox="0 0 512 512"
          >
            <path
              fill="#fbbd00"
              d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
              data-original="#fbbd00"
            />
            <path
              fill="#0f9d58"
              d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
              data-original="#0f9d58"
            />
            <path
              fill="#31aa52"
              d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
              data-original="#31aa52"
            />
            <path
              fill="#3c79e6"
              d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
              data-original="#3c79e6"
            />
            <path
              fill="#cf2d48"
              d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
              data-original="#cf2d48"
            />
            <path
              fill="#eb4132"
              d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
              data-original="#eb4132"
            />
          </svg>
          Continue with google
        </button>
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <a href="/auth/sign-in" className="underline underline-offset-4">
          Sign in
        </a>
      </div>
    </form>
  );
}
