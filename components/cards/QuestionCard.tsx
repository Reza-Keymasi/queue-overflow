import ROUTES from "@/constants/routes";
import { getTimeStamp } from "@/lib/utils";
import Link from "next/link";
import TagCard from "./TagCard";
import Metric from "../Metric";

interface QuestionCardProps {
  question: Question;
}

const QuestionCard = ({
  question: { _id, title, tags, author, createdAt, upvotes, answers, views },
}: QuestionCardProps) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:p-11">
      <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-5">
        <div>
          <span className="flex sm:hidden subtle-regular text-dark400_light700 line-clamp-1">
            {getTimeStamp(createdAt)}
          </span>

          <Link href={ROUTES.QUESTION(_id)}>
            <h3 className="flex-1 sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1">
              {title}
            </h3>
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-wrap gap-3 mt-3.5">
        {tags.map((tag) => (
          <TagCard key={tag._id} _id={tag._id} name={tag.name} compact />
        ))}
      </div>

      <div className="w-full flex-between flex-wrap gap-3 mt-6">
        <Metric
          title={`• Asked ${getTimeStamp(createdAt)} ago`}
          imgUrl={author.image}
          value={author.name}
          alt={author.name}
          href={ROUTES.PROFILE(author._id)}
          textClassName="body-medium text-dark400_light700"
          isAuthor
        />

        <div className="flex items-center sm:flex-wrap gap-3 max-sm:justify-start">
          <Metric
            imgUrl="/icons/like.svg"
            alt="like"
            value={upvotes}
            title=" Votes"
            textClassName="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/icons/message.svg"
            alt="answers"
            value={answers}
            title=" Answers"
            textClassName="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/icons/eye.svg"
            alt="views"
            value={views}
            title=" Views"
            textClassName="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
