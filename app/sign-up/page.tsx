"use client";

import FormInput from "@/components/form-input";
import FormButton from "@/components/form-button";
import Link from "next/link";
import { useFormState } from "react-dom";
import { createAccount } from "./action";

export default function SignUp() {
  const [state, dispatch] = useFormState(createAccount, null);

  return (
    <div>
      <h1 className="flex items-center justify-center text-4xl font-bold text-red-600">YouTrack</h1>
      <div className="flex flex-col gap-10 py-8 px-6">
        <div className="flex items-center justify-center text-2xl font-bold">
          <h2 className="text-xl">Create a new account</h2>
        </div>
        <form action={dispatch} className="flex flex-col gap-3">
          <FormInput name="userName" type="text" placeholder="Username" required={true} />
          <FormInput name="email" type="email" placeholder="Email" required={true} />
          <FormInput name="password" type="password" placeholder="Password" required={true} />
          <FormInput
            name="password"
            type="password"
            placeholder="Confirm password"
            required={true}
          />
          <FormButton text="Sign Up" />
        </form>
        <div className="flex items-center justify-center">
          <Link href="/login" className="text-red-600 font-medium hover:underline">
            Already have an account? Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
