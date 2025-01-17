"use server";

import { z } from "zod";

const usernameSchema = z
  .string()
  .min(5, { message: "Must be 5 or more characters long" })
  .max(15, { message: "Must be 15 or less characters long" });

const emailSchema = z.string().email({ message: "Invalid email address" });

const passwordSchema = z
  .string()
  .min(8, { message: "Must be 8 or more characters long" })
  .refine((password) => /[A-Z]/.test(password), {
    message: "Must include at least one uppercase letter",
  })
  .refine((password) => /[a-z]/.test(password), {
    message: "Must include at least one lowercase letter",
  })
  .refine((password) => /[0-9]/.test(password), {
    message: "Must include at least one number",
  })
  .refine((password) => /[!@#$%^&*()<>?]/.test(password), {
    message: "Must include at least one special character",
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  usernameSchema.parse(data.username);
  emailSchema.parse(data.email);
  passwordSchema.parse(data.password);
}
