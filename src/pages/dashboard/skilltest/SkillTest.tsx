// pages/dashboard.tsx
import { ComparisonGraph } from "../components/ComparisonGraph";
import Layout from "../components/Layout";
import { QuestionAnalysis } from "./components/QuestionAnalysis";
import { QuickStatistics } from "./components/QuickStatistics";
import { SkillTestCard } from "./components/SkillTestCard";
import { SyllabusAnalysis } from "./components/SyllabusAnalysis";
const SkillSet = () => (
  <>
    <h4 className="text-xl font-normal text-gray-600">Skill Test</h4>

    <div className="flex  flex-wrap lg:flex-nowrap gap-8">
      <div className="w-full lg:w-[65%] gap-12">
        <SkillTestCard />
        <QuickStatistics />
        <ComparisonGraph />
      </div>
      <div className="w-full lg:w-[40%] gap-4 mt-4">
        <SyllabusAnalysis />
        <QuestionAnalysis />
      </div>
    </div>
  </>
);

export default SkillSet;
