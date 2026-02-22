"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/constants/navigationLinks";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";
import { Fragment } from "react";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();
  const userId = 1;
  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        if (item.route === "/profile") {
          if (userId) item.route = `${item.route}/${userId}`;
        }

        const LinkComponent = (
          <Link
            key={item.label}
            href={item.route}
            className={cn(
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900",
              "flex-start gap-4 bg-transparent p-4"
            )}
          >
            <Image
              src={item.imgURL}
              width={20}
              height={20}
              className={cn({ "inverted-colors": !isActive })}
              alt={item.label}
            />
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hidden"
              )}
            >
              {item.label}
            </p>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={item.label}>
            {LinkComponent}
          </SheetClose>
        ) : (
          <Fragment key={item.label}>{LinkComponent}</Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
