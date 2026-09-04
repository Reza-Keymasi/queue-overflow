import AnswerCard from "../cards/AnswerCard";
import DataRenderer from "../DataRenderer";
import { EMPTY_ANSWERS } from "@/constants/states";
import CommonFilters from "../filters/CommonFilters";
import { AnswerFilters } from "@/constants/filters";

interface AllAnswersProps extends ActionResponse<Answer[]> {
  totalAnswers: number;
}

const AllAnswers = ({
  success,
  data,
  error,
  totalAnswers,
}: AllAnswersProps) => {
  return (
    <div className="mt-11">
      <div className="flex items-center justify-between">
        <h3 className="primary-text-gradient">
          {totalAnswers} {totalAnswers === 1 ? "Answer" : "Answers"}
        </h3>
        <CommonFilters
          filters={AnswerFilters}
          otherClasses="sm:min-w-32 min-h-14"
          containerClasses="max-xs:w-full"
        />
      </div>

      <DataRenderer
        data={data}
        error={error}
        success={success}
        empty={EMPTY_ANSWERS}
        render={(answers) =>
          answers.map((answer) => <AnswerCard key={answer._id} {...answer} />)
        }
      />
    </div>
  );
};

export default AllAnswers;
