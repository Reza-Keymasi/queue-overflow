"use client";

import { SignUpFormSchema } from "@/lib/validations";
import AuthForm from "@/components/forms/AuthForm";

const signUpFormDefaultValues = {
  name: "",
  username: "",
  email: "",
  password: "",
};

const SignUp = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpFormSchema}
      defaultValues={signUpFormDefaultValues}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignUp;
