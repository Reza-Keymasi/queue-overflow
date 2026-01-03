import { ReactNode } from "react";

import AuthLayoutComponent from "@/components/layout/auth-layout/AuthLayoutComponent";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <AuthLayoutComponent>{children}</AuthLayoutComponent>;
};

export default AuthLayout;
