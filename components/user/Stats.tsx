import { formatNumber } from "@/lib/utils";
import Image from "next/image";

interface StatsProps {
  totalQuestions: number;
  totalAnswers: number;
  badges: BadgeCounts;
  reputationPoints: number;
}

interface StatsCardProps {
  imgUrl: string;
  value: number;
  title: string;
}

const StatsCard = ({ imgUrl, value, title }: StatsCardProps) => (
  <div className="flex flex-wrap items-center justify-start gap-4 rounded-md p-4 shadow-light-300 dark:shadow-dark-200 border light-border background-light900_dark300">
    <Image src={imgUrl} alt={title} width={40} height={50} />
    <div>
      <p className="paragraph-semibold text-dark200_light900 text-xs">
        {value}
      </p>
      <p className="body-medium text-dark300_light700 text-xs">{title}</p>
    </div>
  </div>
);

const Stats = ({
  totalAnswers,
  totalQuestions,
  badges,
  reputationPoints,
}: StatsProps) => {
  return (
    <div className="mt-3">
      <h4 className="h3-semibold text-dark200_light900">
        Stats
        <span className="h3-semibold text-dark200_light900">
          {formatNumber(reputationPoints)}
        </span>
      </h4>

      <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-4 mt-5">
        <div className="flex flex-wrap items-center justify-start gap-4 rounded-md p-4 shadow-light-300 dark:shadow-dark-200 border light-border background-light900_dark300">
          <div>
            <p className="paragraph-semibold text-dark200_light900 text-xs">
              {formatNumber(totalQuestions)}
            </p>

            <p className="body-medium text-dark400_light700 text-xs">
              Questions
            </p>
          </div>

          <div>
            <p className="paragraph-semibold text-dark200_light900 text-xs">
              {formatNumber(totalAnswers)}
            </p>

            <p className="body-medium text-dark400_light700 text-xs">Answers</p>
          </div>
        </div>
        <StatsCard
          imgUrl="/icons/gold-medal.svg"
          value={badges.GOLD}
          title="Gold Badges"
        />
        <StatsCard
          imgUrl="/icons/silver-medal.svg"
          value={badges.SILVER}
          title="Silver Badges"
        />
        <StatsCard
          imgUrl="/icons/bronze-medal.svg"
          value={badges.BRONZE}
          title="Bronze Badges"
        />
      </div>
    </div>
  );
};

export default Stats;
