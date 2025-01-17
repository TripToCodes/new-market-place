"use server";

export async function handleForm(prevState: any, formData: FormData) {
  return {
    errors: ["Passwords don't match"],
  };
}
