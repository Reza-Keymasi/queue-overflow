"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";

interface LocalSearchProps {
  route: string;
  imgSrc: string;
  placeholder: string;
  className?: string;
}

const LocalSearch = ({
  route,
  imgSrc,
  placeholder,
  className,
}: LocalSearchProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const delayDebouncedFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });

        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["query"],
          });

          router.push(newUrl, { scroll: false });
        }
      }
    }, 500);

    return () => clearTimeout(delayDebouncedFn);
  }, [searchQuery, router, route, searchParams, pathname]);

  return (
    <div
      className={cn(
        "flex items-center min-h-14 grow rounded-[10px] px-4 background-light800_darkgradient",
        className
      )}
    >
      <Image
        alt="Search"
        src={imgSrc}
        width={24}
        height={24}
        className="cursor-pointer"
      />

      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none bg-transparent!"
      />
    </div>
  );
};

export default LocalSearch;
