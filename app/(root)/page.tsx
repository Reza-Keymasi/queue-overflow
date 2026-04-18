import Link from "next/link";

import LocalSearch from "@/components/search/LocalSearch";
import HomeFilter from "@/components/filters/HomeFilter";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { questions } from "@/constants/questions";
import QuestionCard from "@/components/cards/QuestionCard";
import handleError from "@/lib/handlers/error";
import dbConnect from "@/lib/mongoose";
import { api } from "@/lib/api";

interface SearchParams {
  searchParams: Promise<Record<string, string>>;
}

const test = async () => {
  try {
    return await api.users.getAll();
  } catch (error) {
    return handleError(error);
  }
};

const Home = async ({ searchParams }: SearchParams) => {
  const users = await test();

  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchedQuery = question.title
      .toLowerCase()
      .includes(query?.toLowerCase());
    const matchedFilter = filter
      ? question.tags.some(
          (tag) => tag.name.toLowerCase() === filter.toLowerCase()
        )
      : true;

    return matchedQuery && matchedFilter;
  });
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
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          className="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="w-full flex flex-col gap-6 mt-10">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
