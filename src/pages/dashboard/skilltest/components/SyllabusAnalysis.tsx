export const SyllabusAnalysis = () => {
  const topics = [
    {
      label: "HTML Tools, Forms, History",
      score: 80,
      bg: "bg-blue-600",
      color: "text-blue-600",
    },
    {
      label: "Tags & References in HTML",
      score: 60,
      bg: "bg-orange-400",
      color: "text-orange-400",
    },
    {
      label: "Tables & References in HTML",
      score: 24,
      bg: "bg-red-400",
      color: "text-red-400",
    },
    {
      label: "Tables & CSS Basics",
      score: 96,
      bg: "bg-green-400",
      color: "text-green-400",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 p-4 rounded-lg mt-4">
      <h2 className="font-bold text-lg mt-2 mb-6">Syllabus Wise Analysis</h2>
      {topics.map((topic, index) => (
        <div key={index} className="my-3">
          <p className="text-sm my-4">{topic.label}</p>
          <div className="flex gap-4 items-center justify-center">
            <div className="w-full bg-gray-200 h-3 rounded-full mt-1">
              <div
                className={`${topic.bg} h-3 rounded-full`}
                style={{ width: `${topic.score}%` }}
              />
            </div>
            <span className={`${topic.color}`}>{`${topic.score}%`}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
