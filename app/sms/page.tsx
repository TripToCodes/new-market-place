import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";

export default function SMSLogin() {
  return (
    <div>
      <h1 className="flex items-center justify-center text-4xl font-bold text-red-600">
        YouTrack
      </h1>
      <div className="flex flex-col gap-10 py-8 px-6">
        <div className="flex items-center justify-center text-2xl font-bold">
          <h2 className="text-xl">Verify your phone number</h2>
        </div>
        <form className="flex flex-col gap-3">
          <FormInput
            name="phoneNumber"
            type="number"
            placeholder="Phone number"
            required={true}
            errors={[]}
          />
          <FormInput
            name="verificationCode"
            type="number"
            placeholder="Verification code"
            required={true}
            errors={[]}
          />

          <FormButton loading={false} text="Log In" />
        </form>
      </div>
    </div>
  );
}
