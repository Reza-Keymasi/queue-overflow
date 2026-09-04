import LocalSearch from "@/components/search/LocalSearch";
import QuestionCard from "@/components/cards/QuestionCard";
import DataRenderer from "@/components/DataRenderer";
import { EMPTY_QUESTION } from "@/constants/states";
import { getSavedQuestions } from "@/lib/actions/collection.actions";
import ROUTES from "@/constants/routes";

interface SearchParams {
  searchParams: Promise<Record<string, string>>;
}

const Collections = async ({ searchParams }: SearchParams) => {
  const { page, pageSize, query, filter } = await searchParams;

  const { success, data, error } = await getSavedQuestions({
    page: Number(page) || 1,
    pageSize: Number(pageSize) || 10,
    query: query || "",
    filter: filter || "",
  });

  const { collection } = data || {};

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Saved Questions</h1>
      <section className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route={ROUTES.COLLECTION}
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          iconPosition="left"
          className="flex-1"
        />
      </section>

      <DataRenderer
        success={success}
        data={collection}
        error={error}
        empty={EMPTY_QUESTION}
        render={(collection) => (
          <div className="mt-10 w-full flex flex-col gap-6">
            {collection.map((item) => (
              <QuestionCard key={item._id} question={item.question} />
            ))}
          </div>
        )}
      />
    </>
  );
};

export default Collections;
