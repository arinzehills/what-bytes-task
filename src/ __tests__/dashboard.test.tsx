import React from "react";
import { render, screen } from "@testing-library/react";
import SkillSet from "../pages/dashboard";
import "@testing-library/jest-dom";

// Mock child components to isolate the SkillSet component
jest.mock("../components/SkillTestCard", () => ({
  SkillTestCard: () => <div data-testid="skill-test-card">Skill Test Card</div>,
}));

jest.mock("../components/QuickStatistics", () => ({
  QuickStatistics: () => (
    <div data-testid="quick-statistics">Quick Statistics</div>
  ),
}));

jest.mock("../components/ComparisonGraph", () => ({
  ComparisonGraph: () => (
    <div data-testid="comparison-graph">Comparison Graph</div>
  ),
}));

jest.mock("../components/SyllabusAnalysis", () => ({
  SyllabusAnalysis: () => (
    <div data-testid="syllabus-analysis">Syllabus Analysis</div>
  ),
}));

jest.mock("../components/QuestionAnalysis", () => ({
  QuestionAnalysis: () => (
    <div data-testid="question-analysis">Question Analysis</div>
  ),
}));

describe("SkillSet Page", () => {
  beforeEach(() => {
    render(<SkillSet />);
  });

  it("renders the page title", () => {
    const pageTitle = screen.getByText("Skill Test");
    expect(pageTitle).toBeInTheDocument();
    expect(pageTitle).toHaveClass("text-xl", "font-normal", "text-gray-600");
  });

  it("renders all child components", () => {
    // Left column components
    expect(screen.getByTestId("skill-test-card")).toBeInTheDocument();
    expect(screen.getByTestId("quick-statistics")).toBeInTheDocument();
    expect(screen.getByTestId("comparison-graph")).toBeInTheDocument();

    // Right column components
    expect(screen.getByTestId("syllabus-analysis")).toBeInTheDocument();
    expect(screen.getByTestId("question-analysis")).toBeInTheDocument();
  });

  it("has correct layout structure", () => {
    const leftColumn = screen.getByTestId("skill-test-card").closest("div");
    const rightColumn = screen.getByTestId("syllabus-analysis").closest("div");

    expect(leftColumn).toHaveClass("w-full", "lg:w-[65%]");
    expect(rightColumn).toHaveClass("w-full", "lg:w-[40%]");
  });
});
