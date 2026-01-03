import Image from "next/image";
import { ReactNode } from "react";

import SocialAuthForms from "@/components/forms/SocialAuthForms";
import { cn } from "@/lib/utils";

import Logo from "../../../public/images/logo.svg";

const AuthLayoutComponent = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className={cn(
        "flex justify-center items-center min-h-screen px-4 py-10",
        "bg-auth-light dark:bg-auth-dark bg-cover bg-no-repeat bg-center"
      )}
    >
      <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] px-4 sm:px-8 py-10 shadow-md sm:min-w-130">
        <div className="flex-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-dark100_light900">
              Join Queue <span className="text-primary-500">Overflow</span>
            </h1>
            <p className="paragraph-regular text-dark500_light400">
              To get your questions answered
            </p>
          </div>
          <Image src={Logo} alt="Logo" className="object-contain" />
        </div>
        {children}
        <SocialAuthForms />
      </section>
    </main>
  );
};

export default AuthLayoutComponent;
