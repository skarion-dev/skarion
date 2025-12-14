"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { ApiError, AuthService } from "@/api-client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const validationSchema = z
  .object({
    name: z.string().min(4, "Name must be at least 4 characters"),
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignUpFormData = z.infer<typeof validationSchema>;

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignUpFormData) => {
    setIsPending(true);

    try {
      const resp = await AuthService.authControllerSignup({
        name: data.name,
        username: data.username,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });

      toast.success("Account created successfully!");
      router.push("/auth/sign-in");
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        toast.error(error.body.message as string || "Failed to create account");
      } else {
        toast.error("Failed to create account");
      }
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="grid gap-6">
        <div className="grid">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            {...register("name")}
            type="text"
            placeholder="John Doe"
            className="mt-3"
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
        </div>
        <div className="grid">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            {...register("email")}
            type="email"
            placeholder="m@example.com"
            className="mt-3"
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
        </div>
        <div className="grid">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            {...register("username")}
            type="text"
            placeholder="rianulamin.r"
            className="mt-3"
          />
          {errors.username && <p className="text-sm text-red-500 mt-1">{errors.username.message}</p>}
        </div>
        <div className="grid">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            id="password"
            {...register("password")}
            type="password"
            className="mt-3"
          />
          {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
        </div>
        <div className="grid">
          <div className="flex items-center">
            <Label htmlFor="confirm_password">Confirm Password</Label>
          </div>
          <Input
            id="confirm_password"
            {...register("confirmPassword")}
            type="password"
            className="mt-3"
          />
          {errors.confirmPassword && <p className="text-sm text-red-500 mt-1">{errors.confirmPassword.message}</p>}
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
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
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