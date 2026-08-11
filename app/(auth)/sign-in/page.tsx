import AuthForm from "@/components/forms/AuthForm";
import { signInWithCredentials } from "@/lib/actions/auth.actions";

const signInFormDefaultValues = { email: "", password: "" };

const SignIn = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      defaultValues={signInFormDefaultValues}
      onSubmit={signInWithCredentials}
    />
  );
};

export default SignIn;
