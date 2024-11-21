"use client";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useUpdateScore } from "../hooks/useUpdateScore";
import { UpdateScoreSchema } from "../models/upateScore.model";
import SideToast from "@/components/Toastify/SideToast";
import { Icon } from "@iconify/react/dist/iconify.js";

const UpdateScoreForm = ({ setOpenModal }: any) => {
  const { updateScore, scores } = useUpdateScore();
  const onSubmit = (values: any) => {
    updateScore(values);
    SideToast.FireSuccess({ message: "Scores updated successfully!" });
    setOpenModal?.(false);
  };
  return (
    <>
      <Formik
        initialValues={{
          rank: scores.rank,
          percentile: scores.percentile,
          currentScore: scores.currentScore,
        }}
        validationSchema={UpdateScoreSchema}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form>
            <h1 className="text-2xl mb-6 font-bold text-center">
              Update Scores
            </h1>

            <InputField
              label="Update your Rank"
              name="rank"
              type="number"
              value={values.rank}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.rank && errors.rank ? errors.rank : ""}
            />

            <InputField
              label="Update your Percentile"
              name="percentile"
              type="number"
              value={values.percentile}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.percentile && errors.percentile ? errors.percentile : ""
              }
            />

            <InputField
              label="Update your Current Score (out of 15)"
              name="currentScore"
              type="number"
              value={values.currentScore}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.currentScore && errors.currentScore
                  ? errors.currentScore
                  : ""
              }
            />

            <div className="flex justify-end items-center gap-3 mt-6">
              <button
                type="button"
                onClick={() => setOpenModal?.(false)}
                className="py-2 px-4 rounded border border-blue-700 text-blue-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <Button
                bgColor={"bg-blue-900"}
                withBorder
                type="submit"
                suffixIcon={<Icon icon="ph:arrow-right-thin" />}
              >
                Save
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UpdateScoreForm;
