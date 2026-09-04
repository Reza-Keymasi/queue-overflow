import Link from "next/link";

import LocalSearch from "@/components/search/LocalSearch";
import HomeFilter from "@/components/filters/HomeFilter";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import QuestionCard from "@/components/cards/QuestionCard";
import handleError from "@/lib/handlers/error";
import { api } from "@/lib/api";
import { getQuestions } from "@/lib/actions/question.actions";
import DataRenderer from "@/components/DataRenderer";
import { EMPTY_QUESTION } from "@/constants/states";
import CommonFilters from "@/components/filters/CommonFilters";
import { HomePageFilters } from "@/constants/filters";

interface SearchParams {
  searchParams: Promise<Record<string, string>>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { page, pageSize, query, filter } = await searchParams;

  const { success, data, error } = await getQuestions({
    page: Number(page) || 1,
    pageSize: Number(pageSize) || 10,
    query: query || "",
    filter: filter || "",
  });

  const { questions } = data || {};

  // const filteredQuestions = questions.filter((question) => {
  //   const matchedQuery = question.title
  //     .toLowerCase()
  //     .includes(query?.toLowerCase());
  //   const matchedFilter = filter
  //     ? question.tags.some(
  //         (tag) => tag.name.toLowerCase() === filter.toLowerCase()
  //       )
  //     : true;

  //   return matchedQuery && matchedFilter;
  // });

  return (
    <>
      <section className="w-full flex flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Button
          asChild
          className="primary-gradient min-h-11.5 px-4 py-3 text-light-900"
        >
          <Link href={ROUTES.ASK_QUESTION}> Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          iconPosition="left"
          className="flex-1"
        />

        <CommonFilters
          filters={HomePageFilters}
          otherClasses="min-h-14 sm:min-w-42.5"
          containerClasses="hidden max-md:flex"
        />
      </section>
      <HomeFilter />
      <DataRenderer
        success={success}
        data={questions}
        error={error}
        empty={EMPTY_QUESTION}
        render={(questions) => (
          <div className="mt-10 w-full flex flex-col gap-6">
            {questions.map((question) => (
              <QuestionCard key={question._id} question={question} />
            ))}
          </div>
        )}
      />
    </>
  );
};

export default Home;
