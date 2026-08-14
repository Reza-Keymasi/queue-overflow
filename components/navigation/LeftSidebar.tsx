import Link from "next/link";
import Image from "next/image";

import NavLinks from "./navbar/NavLinks";
import { Button } from "../ui/button";
import ROUTES from "@/constants/routes";
import { auth, signOut } from "@/auth";
import { LogOut } from "lucide-react";

const LeftSidebar = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  return (
    <section className="custom-scrollbar flex flex-col justify-between gap-6 background-light900_dark200 light-border sticky left-0 top-0 h-screen border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-66.5 overflow-y-auto">
      <div className="flex flex-1 flex-col gap-3">
        <NavLinks userId={userId} />
      </div>

      <div className="flex flex-col gap-3">
        {userId ? (
          <form
            action={async () => {
              "use server";

              await signOut();
            }}
          >
            <Button
              type="submit"
              className="base-medium w-fit bg-transparent hover:bg-gray-100 hover:dark:bg-gray-600 px-4 py-3"
            >
              <LogOut className="size-5 text-black dark:text-white" />
              <span className="text-dark300_light900 max-lg:hidden">
                Logout
              </span>
            </Button>
          </form>
        ) : (
          <>
            <Button
              asChild
              className="w-full min-h-10.25 small-medium btn-secondary rounded-lg px-4"
            >
              <Link href={ROUTES.SIGN_IN}>
                <Image
                  alt="Account"
                  src="/icons/account.svg"
                  width={20}
                  height={20}
                  className="invert-colors lg:hidden"
                />
                <span className="primary-text-gradient max-lg:hidden">
                  Log In
                </span>
              </Link>
            </Button>

            <Button
              asChild
              className="w-full min-h-10.25 small-medium light-border-2 btn-tertiary text-dark400_light900 rounded-lg px-4 shadow-none"
            >
              <Link href={ROUTES.SIGN_UP}>
                <Image
                  alt="Account"
                  src="/icons/account.svg"
                  width={20}
                  height={20}
                  className="invert-colors lg:hidden"
                />
                <span className="primary-text-gradient max-lg:hidden">
                  Sign Up
                </span>
              </Link>
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default LeftSidebar;
