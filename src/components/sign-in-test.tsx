"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInTest() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.target as HTMLFormElement & {
      email: { value: string };
      password: { value: string };
    };

    const res = await signIn("credentials", {
      redirect: false,
      email: form.email.value,
      password: form.password.value,
    });

    console.log("SIGNIN RESULT", res);

    if (res?.error) {
      setError("Invalid email or password");
      return;
    }

    if (res?.ok) {
      router.push("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="text" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Sign In</button>

      <button
        type="button"
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      >
        Sign in with Google
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
