import { Icon } from "@iconify/react/dist/iconify.js";
import { useUpdateScore } from "../../hooks/useUpdateScore";

export const QuickStatistics = () => {
  const { scores } = useUpdateScore();
  return (
    <div className="bg-white border border-gray-200 my-5 rounded-lg p-2 ">
      <h1 className="font-bold text-lg">Quick Statistics</h1>
      <div className="grid sm:grid-cols-3 gap-4 mt-3">
        <StatisticsItem
          label={"Your Rank"}
          value={`${scores.rank}`}
          icon={<Icon className="text-2xl" icon="noto:trophy" />}
        />
        <StatisticsItem
          label={"Percentile"}
          value={`${scores.percentile}`}
          icon={
            <Icon className="text-2xl" icon="fluent-color:calendar-clock-24" />
          }
        />
        <StatisticsItem
          label={"Correct Answers"}
          value={`${scores.currentScore}/15`}
          showBorder={false}
          icon={
            <Icon
              className="text-2xl"
              icon="fluent-emoji-flat:check-mark-button"
            />
          }
        />
      </div>
    </div>
  );
};

const StatisticsItem = ({
  label,
  value,
  icon,
  showBorder = true,
}: {
  label: string;
  value: string;
  icon: any;
  showBorder?: boolean;
}) => (
  <div
    className={`w-full ${
      showBorder && "sm:border-r border-b"
    } border-gray-300 p-4 py-6 text-center`}
  >
    <div className="flex w-full gap-2">
      <div className="bg-gray-100 rounded-full p-2 w-12 h-12 flex items-center justify-center">
        {icon}
      </div>
      <div className="w-full flex-1">
        <p className="text-2xl text-start font-bold">{value}</p>
        <p className="text-sm text-start text-gray-600 uppercase whitespace-nowrap">
          {label}
        </p>
      </div>
    </div>
  </div>
);
