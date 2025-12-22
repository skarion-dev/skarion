"use client";

import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { OpenAPI, PaymentsService } from "@/api-client";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

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
    "p-4 border rounded-lg transition-all cursor-pointer text-center  text-sm font-medium";
  const selectedStyle = "bg-blue-50 text-[#122461]";
  const unselectedStyle =
    "border-gray-300 text-white hover:border-blue-400 hover:bg-gray-50 hover:text-[#122461]";

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
  const [isFlexible, setIsFlexible] = useState(false);
  const [canCommitTime, setCanCommitTime] = useState(false);
  const [workAuth, setWorkAuth] = useState("");
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

  const handleWorkAuthChange = (selectedAuth: string) => {
    setWorkAuth((current) => (current === selectedAuth ? "" : selectedAuth));
  };

  const handleDegreeChange = (selectedDegree: string) => {
    setDegree((currentDegree) =>
      currentDegree === selectedDegree ? "" : selectedDegree,
    );
  };

  const isFormValid =
    isUsResident &&
    workAuth &&
    isFlexible &&
    degree &&
    canCommitTime &&
    willNotDrop &&
    agreedToTerms;

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
      className=" flex flex-col justify-between w-full h-full  text-white max-w-full bg-[#122461] rounded-tl-2xl rounded-bl-2xl shadow-2xl shadow-blue-100/40 p-8 md:p-10 space-y-10 ring-1 ring-gray-200/50 text-left"
    >
      
      <div>
        <h2 className="text-[24px] md:text-3xl font-[600] text-white tracking-tight">
          Complete Your Enrollment
        </h2>
        <p className="mt-2 text-[14px] text-white/80 ">
          Please confirm a few details before checkout
        </p>
      

      <div className="space-y-6 mt-auto pt-8">
        <FormCheckbox
          id="us-resident"
          checked={isUsResident}
          onCheckedChange={setIsUsResident}
        >
          I live in the US
        </FormCheckbox>

        <div>
          <p className="text-[14px] font-semibold text-white mb-4">
            I am authorized to work in the United States in one of the following ways:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <DegreeCard
              degree="Citizen"
              selected={workAuth === "Citizen"}
              onSelect={handleWorkAuthChange}
            />
            <DegreeCard
              degree="Green Card"
              selected={workAuth === "Green Card"}
              onSelect={handleWorkAuthChange}
            />
            <DegreeCard
              degree="Valid Work Permit"
              selected={workAuth === "Valid Work Permit"}
              onSelect={handleWorkAuthChange}
            />
          </div>
        </div>

        <FormCheckbox
          id="flexible"
          checked={isFlexible}
          onCheckedChange={setIsFlexible}
        >
          I am open to relocation within the United States (if required)
        </FormCheckbox>

        <div>
          <p className="text-[14px] font-semibold text-white mb-4">
            I have a degree in one of these fields:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
        </div>

        <FormCheckbox
          id="commit-time"
          checked={canCommitTime}
          onCheckedChange={setCanCommitTime}
        >
          I can commit at least 15–20 hours per week to this program
        </FormCheckbox>

        <FormCheckbox
          id="no-drop"
          checked={willNotDrop}
          onCheckedChange={setWillNotDrop}
        >
          I won't be dropping this course midway
        </FormCheckbox>

      </div>
      </div>
      <div>
        <Button
          type="submit"
          disabled={!isFormValid || isPurchased || !courseFound}
          className="w-full h-12  text-[16px] rounded-[12px] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPurchased ? "Already Purchased" : "Checkout with Stripe"}
        </Button>

      </div>
    </form>
  );
}
