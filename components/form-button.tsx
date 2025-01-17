"use client";
import { useFormStatus } from "react-dom";

interface FormButtonProps {
  text: string;
}
export default function FormButton({ text }: FormButtonProps) {
  const { pending } = useFormStatus(); // useFormStatus should be used in a child component of a form
  return (
    <button
      disabled={pending}
      className="btn btn-outline h-10 w-full disabled:bg-neutral-400  disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {pending ? "Loading..." : text}
    </button>
  );
}
