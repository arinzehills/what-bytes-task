"use client";

import { Form, Formik } from "formik";

import Button from "@/components/Button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import InputField from "@/components/InputField";
import { RegisterSchema } from "../models/register.schema";
import { useRegister } from "../hooks/useRegister";

interface RegisterProps {
  onSubmit?: (values: { email: string; password: string }) => void;
  isLoading?: boolean;
  error?: string;
}

const RegisterForm = ({}: RegisterProps) => {
  const { handleLogin, isLoading, error } = useRegister();
  return (
    <div className="w-[90%] sm:w-[45%] md:w-[40%] bg-[#F6F6F6] p-8 my-2 rounded-lg">
      <Formik
        initialValues={{
          action: "register",
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form>
            <h1 className="text-4xl mb-12 mt-6 font-bold text-black text-center">
              WhatBytes
            </h1>
            <InputField
              withRedBorder
              width="96"
              height={55}
              label={"Full Name"}
              prefixIcon={
                <Icon icon="iconamoon:profile-fill" className="text-black " />
              }
              name="name"
              placeholder="Enter name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors.name ? errors.name : ""}
            />
            <InputField
              withRedBorder
              width="96"
              height={55}
              label={"Email"}
              prefixIcon={
                <Icon icon="mage:email-fill" className="text-black " />
              }
              name="email"
              placeholder="Enter email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && errors.email ? errors.email : ""}
            />
            <InputField
              withRedBorder
              width="96"
              height={55}
              label={"Password"}
              name="password"
              prefixIcon={
                <Icon icon="solar:lock-bold-duotone" className="text-black " />
              }
              placeholder="Enter password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && errors.password ? errors.password : ""}
              type={"password"}
            />
            <div className="formgroup my-5 w-full flex justify-start items-center gap-3">
              <input
                type="checkbox"
                style={{ height: "1.5rem", width: "1.5rem", color: "red" }}
              />
              <label className="text-black font-bold">Remember me</label>
            </div>
            {error && (
              <p className="text-red-400 text-center">Error: {error}</p>
            )}
            <Button loading={isLoading} width="full" height={50} type="submit">
              Login
            </Button>
            <div className="w-full flex justify-center items-center">
              <p className="text-[#191919]">
                Don’t have an account?{" "}
                <Link href={"/Login"} className="font-black text-black-600">
                  Login
                </Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
