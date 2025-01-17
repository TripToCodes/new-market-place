"use client";
import FormInput from "@/components/form-input";
import FormButton from "@/components/form-button";
import SocialLogin from "@/components/social-login";
import Link from "next/link";
import { useFormState } from "react-dom";
import { handleForm } from "./action";

export default function Login() {
  const [state, action] = useFormState(handleForm, null);

  return (
    <div>
      <h1 className="flex items-center justify-center text-4xl font-bold text-red-600">
        YouTrack
      </h1>
      <div className="flex flex-col gap-10 py-8 px-6">
        <div className="flex items-center justify-center text-2xl font-bold">
          <h2 className="text-xl">Log Into YouTrack</h2>
        </div>
        <form action={action} className="flex flex-col gap-3">
          <FormInput
            name="email"
            type="email"
            placeholder="Email"
            required={true}
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Password"
            required={true}
          />

          <FormButton text="Log In" />
        </form>
        <SocialLogin />
        <div className="flex items-center justify-center">
          <Link
            href="/sign-up"
            className="text-red-600 font-medium hover:underline"
          >
            Don&apos;t have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
