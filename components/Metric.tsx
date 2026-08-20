import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface MetricProps {
  imgUrl: string;
  alt: string;
  title: string;
  value: string | number;
  href?: string;
  textStyles: string;
  titleStyles?: string;
  imgClassName?: string;
  isAuthor?: boolean;
}

const Metric = ({
  imgUrl,
  alt,
  title,
  value,
  href,
  textStyles,
  titleStyles = "",
  imgClassName,
  isAuthor,
}: MetricProps) => {
  const metricContent = (
    <>
      <Image
        alt={alt}
        src={imgUrl}
        width={16}
        height={16}
        className={cn("rounded-full object-contain", imgClassName)}
      />

      <p className={cn("flex items-center gap-1", textStyles)}>
        {value}

        {title ? (
          <span
            className={cn(
              "small-regular line-clamp-1",

              isAuthor ? "max-sm:hidden" : ""
            )}
          >
            {title}
          </span>
        ) : null}
      </p>
    </>
  );

  return href ? (
    <Link href={href} className="flex-center gap-1">
      {metricContent}
    </Link>
  ) : (
    <div className="flex-center gap-1">{metricContent}</div>
  );
};

export default Metric;
