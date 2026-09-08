import Link from "next/link";
import Image from "next/image";

import ROUTES from "@/constants/routes";
import TagCard from "../cards/TagCard";
import { getHotQuestions } from "@/lib/actions/question.actions";
import DataRenderer from "../DataRenderer";
import { cn } from "@/lib/utils";
import { getTopTags } from "@/lib/actions/tag.actions";

const RightSidebar = async () => {
  const {
    success: questionsSucccess,
    data: hotQuestions,
    error: questionsError,
  } = await getHotQuestions();
  const {
    success: tagsSuccess,
    data: topTags,
    error: tagsError,
  } = await getTopTags();

  return (
    <section className="max-xl:hidden flex flex-col gap-6 h-screen w-87.5 custom-scrollbar pt-36 background-light900_dark200 light-border sticky right-0 top-0 border-l p-6 shadow-light-300 dark:shadow-none overflow-y-auto">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

        <div className="flex flex-col gap-7.5 w-full mt-7">
          <DataRenderer
            data={hotQuestions}
            empty={{
              title: "No questions found",
              message: "No questions have been asked yet",
            }}
            success={questionsSucccess}
            error={questionsError}
            render={(hotQuestions) => (
              <div className="w-full flex flex-col gap-7.5 mt-7">
                {hotQuestions.map(({ _id, title }, index) => (
                  <Link
                    key={_id}
                    href={ROUTES.QUESTION(_id)}
                    className="flex items-start justify-between gap-5 cursor-pointer"
                  >
                    <Image
                      alt="Question"
                      src={`${index % 2 === 0 ? "/icons/question-blue.svg" : "/icons/question-green.svg"}`}
                      width={40}
                      height={40}
                      className={cn("invert-colors w-6 h-6")}
                    />
                    <p className="flex-1 body-medium text-md text-dark500_light700 line-clamp-2 shrink-0">
                      {title}
                    </p>

                    <Image
                      alt="Chevron"
                      src="/icons/chevron-right.svg"
                      width={20}
                      height={20}
                      className="invert-colors"
                    />
                  </Link>
                ))}
              </div>
            )}
          />
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>

        <DataRenderer
          data={topTags}
          empty={{
            title: "No tags found",
            message: "No tags have been asked yet",
          }}
          success={tagsSuccess}
          error={tagsError}
          render={(topTags) => (
            <div className="mt-7 flex flex-col gap-4">
              {topTags?.map(({ _id, name, questions }) => (
                <TagCard
                  key={_id}
                  _id={_id}
                  name={name}
                  questions={questions}
                  showCount
                  compact
                />
              ))}
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default RightSidebar;
