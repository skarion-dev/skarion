import { SignInForm } from "@/components/sign-in-form";
export default function SignInPage() {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <div className="w-full max-w-sm">
        <SignInForm />
      </div>
    </div>
  );
}
