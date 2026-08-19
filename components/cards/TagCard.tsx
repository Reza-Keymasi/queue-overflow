import Link from "next/link";

import ROUTES from "@/constants/routes";
import { Badge } from "../ui/badge";
import { cn, getDeviconClassName, getTechDescription } from "@/lib/utils";
import Image from "next/image";

interface TagCardsProps {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
  remove?: boolean;
  isButton?: boolean;
  onTagRemove?: () => void;
}

const TagCard = ({
  _id,
  name,
  questions,
  showCount,
  compact,
  remove,
  isButton,
  onTagRemove,
}: TagCardsProps) => {
  const iconClassName = getDeviconClassName(name);
  const iconDescription = getTechDescription(name);

  const renderBadge = (
    <>
      <Badge className="flex gap-2 subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2">
        <div className="flex-center space-x-2">
          <i className={`${iconClassName} text-sm`}></i>
          <span>{name}</span>
        </div>
        {remove && (
          <Image
            alt="Close"
            src="/icons/close.svg"
            className="cursor-pointer object-contain invert-0 dark:invert"
            onClick={onTagRemove}
            width={12}
            height={12}
          />
        )}
      </Badge>
      {showCount && (
        <p className="subtle-medium text-dark500_light700">{questions}</p>
      )}
    </>
  );

  if (compact) {
    return isButton ? (
      <button type="button" className="flex justify-between gap-2">
        {renderBadge}
      </button>
    ) : (
      <Link
        href={ROUTES.TAG(_id)}
        className="flex justify-between items-center gap-2"
      >
        {renderBadge}
      </Link>
    );
  }

  return (
    <Link href={ROUTES.TAG(_id)} className="shadow-light100_darknone">
      <article className="sm:w-65 w-full flex flex-col background-light900_dark200 border light-border rounded-2xl px-8 py-10">
        <div className="flex items-center justify-between gap-3">
          <div className="w-fit rounded-sm px-5 py-1.5 background-light800_dark400">
            <p className="paragraph-semibold text-dark300_light900">{name}</p>
          </div>
          <i className={cn(iconClassName, "text-2xl")} aria-hidden />
        </div>
        <p className="w-full small-regular text-dark500_light700 mt-5 line-clamp-3">
          {iconDescription}
        </p>

        <p className="small-medium text-dark400_light500 mt-3.5">
          <span className="body-semibold primary-text-gradient mr-2.5">
            {questions}+
          </span>
          Questions
        </p>
      </article>
    </Link>
  );
};

export default TagCard;
