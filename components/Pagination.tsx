"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { formUrlQuery } from "@/lib/url";

interface PaginationProps {
  page?: number | string;
  isNext: boolean;
  containerClasses?: string;
}

const Pagination = ({
  page = 1,
  isNext,
  containerClasses = "",
}: PaginationProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleNavidation = (type: "prev" | "next") => {
    const nextPageNumber =
      type === "prev" ? Number(page) - 1 : Number(page) + 1;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "page",
      value: nextPageNumber.toString(),
    });

    router.push(newUrl);
  };

  return (
    <div
      className={cn(
        "w-full flex items-center justify-center gap-2 mt-5",
        containerClasses
      )}
    >
      {Number(page) > 1 && (
        <Button
          onClick={() => handleNavidation("prev")}
          className="flex items-center justify-center gap-2 border light-border-2 btn min-h-9"
        >
          <p className="body-medium text-dark200_light800">Prev</p>
        </Button>
      )}

      <div className="flex justify-center items-center rounded-md bg-primary-500 px-3.5 py-2">
        <p className="body-semibold text-light-900">{page}</p>
      </div>

      {isNext && (
        <Button
          onClick={() => handleNavidation("next")}
          className="flex items-center justify-center gap-2 border light-border-2 btn min-h-9"
        >
          <p className="body-medium text-dark200_light800">Next</p>
        </Button>
      )}
    </div>
  );
};

export default Pagination;
