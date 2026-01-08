"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignInFormSchema } from "@/lib/validations";

const signInFormDefaultValues = { email: "", password: "" };

const SignIn = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInFormSchema}
      defaultValues={signInFormDefaultValues}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignIn;
