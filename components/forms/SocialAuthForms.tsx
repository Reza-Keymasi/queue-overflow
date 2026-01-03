"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

import { Button } from "../ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import ROUTES from "@/constants/routes";

import GitHub from "../../public/icons/github.svg";
import Google from "../../public/icons/google.svg";

const SocialAuthForms = () => {
  const btnClassName =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5 cursor-pointer";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
      });
    } catch (error) {
      console.error(error);
      toast.error("Sign-in Failed", {
        description:
          error instanceof Error
            ? error.message
            : "An error occured during sign-in",
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        className={cn(btnClassName)}
        onClick={() => handleSignIn("github")}
      >
        <Image
          src={GitHub}
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
          alt="GitHub"
        />
        <span>Log in with GitHub</span>
      </Button>
      <Button
        className={cn(btnClassName)}
        onClick={() => handleSignIn("google")}
      >
        <Image
          src={Google}
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
          alt="Google"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForms;
