import React from "react";
import RegisterForm from "./components/RegisterForm";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h1 className="text-3xl font-bold">Create Account</h1>
      <RegisterForm />
    </div>
  );
};

export default page;
