import AuthForm from "@/components/forms/AuthForm";
import { signUpWithCredentials } from "@/lib/actions/auth.actions";

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
      defaultValues={signUpFormDefaultValues}
      onSubmit={signUpWithCredentials}
    />
  );
};

export default SignUp;
