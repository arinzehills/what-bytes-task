import * as Yup from "yup";
export const UpdateScoreSchema = Yup.object().shape({
    rank: Yup.number().min(1, "Rank must be at least 1").required("Rank is required"),
    percentile: Yup.number()
        .min(0, "Percentile must be between 0 and 100")
        .max(100, "Percentile must be between 0 and 100")
        .required("Percentile is required"),
    currentScore: Yup.number()
        .min(0, "Score cannot be negative")
        .max(15, "Score cannot exceed 15")
        .required("Current score is required"),
});