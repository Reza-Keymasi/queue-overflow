import Link from "next/link";
import { redirect } from "next/navigation";

import TagCard from "@/components/cards/TagCard";
import Metric from "@/components/Metric";
import UserAvatar from "@/components/UserAvatar";
import ROUTES from "@/constants/routes";
import { formatNumber, getTimeStamp } from "@/lib/utils";
import Preview from "@/components/editor/Preview";
import { getQuestion } from "@/lib/actions/question.actions";

const QuestionDetails = async ({ params }: RouteParams) => {
  const { id } = await params;

  const {
    success,
    data: question,
    error,
  } = await getQuestion({ questionId: id });

  if (!success || !question) return redirect("/");

  const { author, createdAt, answers, views, tags, content, title } = question;
  return (
    <>
      <div className="w-full flex-start flex-col">
        <div className="w-full flex flex-col-reverse justify-between">
          <div className="flex items-center justify-start gap-1">
            <UserAvatar
              id={author._id}
              name={author.name}
              className="size-5.5"
              fallbackClassName="text-[10px]"
            />

            <Link href={ROUTES.PROFILE(author._id)}>
              <p className="paragraph-semibold text-dark300_light700">
                {author.name}
              </p>
            </Link>
          </div>

          <div className="flex justify-end">
            <p>Votes</p>
          </div>
        </div>
        <h2 className="h2-semibold text-dark200_light900 mt-3.5 w-full">
          {title}
        </h2>
      </div>

      <div className="flex flex-wrap gap-4 mb-8 mt-5">
        <Metric
          imgUrl="/icons/clock.svg"
          alt="clock icon"
          value={`• asked ${getTimeStamp(new Date(createdAt))}`}
          title=""
          isAuthor
          textStyles="small-regular text-dark400_light700"
          titleStyles="max-sm:hidden"
        />
        <Metric
          imgUrl="/icons/message.svg"
          alt="message icon"
          value={answers}
          title=""
          isAuthor
          textStyles="small-regular text-dark400_light700"
          titleStyles="max-sm:hidden"
        />
        <Metric
          imgUrl="/icons/eye.svg"
          alt="eye icon"
          value={formatNumber(views)}
          title=""
          isAuthor
          textStyles="small-regular text-dark400_light700"
          titleStyles="max-sm:hidden"
        />
      </div>

      <Preview content={content} />

      <div className="flex flex-wrap gap-2 mt-8">
        {tags.map((tag: Tag) => (
          <TagCard key={tag._id} _id={tag._id} name={tag.name} compact />
        ))}
      </div>
    </>
  );
};

export default QuestionDetails;
