import Link from "next/link";
import Image from "next/image";

import NavLinks from "./navbar/NavLinks";
import { Button } from "../ui/button";
import ROUTES from "@/constants/routes";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar flex flex-col justify-between gap-6 background-light900_dark200 light-border sticky left-0 top-0 h-screen border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-66.5 overflow-y-auto">
      <div className="flex flex-1 flex-col gap-3">
        <NavLinks />
      </div>

      <div className="flex flex-col gap-3">
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
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
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
            <span className="primary-text-gradient max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LeftSidebar;
