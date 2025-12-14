import { SignUpForm } from "@/components/sign-up-form";
export default function SignUpPage() {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>
  );
}
