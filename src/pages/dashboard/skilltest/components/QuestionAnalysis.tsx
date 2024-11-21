import { useUpdateScore } from "../../hooks/useUpdateScore";

export const QuestionAnalysis = () => {
  const { scores } = useUpdateScore();
  return (
    <div className="bg-white shadow p-4 rounded-lg mt-4">
      <h2 className="font-bold text-lg">Question Analysis</h2>
      <p className="text-sm mt-2">
        You scored {`${scores.currentScore}`} questions correct out of 15.
        However, it still needs some improvements.
      </p>
    </div>
  );
};
