import React from "react";
import LoginForm from "./components/LoginForm";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Login</h1>
      <LoginForm />
    </div>
  );
};

export default page;
