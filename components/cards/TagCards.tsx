import Link from "next/link";

import ROUTES from "@/constants/routes";
import { Badge } from "../ui/badge";
import { getDeviconClassName } from "@/lib/utils";

interface TagCardsProps {
  _id: string;
  name: string;
  questions: number;
  showCount?: boolean;
  compact?: boolean;
}

const TagCards = ({
  _id,
  name,
  questions,
  showCount,
  compact,
}: TagCardsProps) => {
  const iconClassName = getDeviconClassName(name);
  return (
    <Link
      href={ROUTES.TAGS(_id)}
      className="flex justify-between items-center gap-2"
    >
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2">
        <div className="flex-center space-x-2">
          <i className={`${iconClassName} text-sm`}></i>
          <span>{name}</span>
        </div>
      </Badge>
      {showCount && (
        <p className="subtle-medium text-dark500_light700">{questions}</p>
      )}
    </Link>
  );
};

export default TagCards;
