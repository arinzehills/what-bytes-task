import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-2 text-2xl font-medium">Welcome to WhatBytes</h1>
      <Button>
        <Link href={"/login"} className="font-black text-black-600">
          Login
        </Link>
      </Button>
      <p className="text-center my-4">or</p>
      <Button>
        <Link href={"/register"} className="font-black text-black-600">
          Register
        </Link>
      </Button>
    </div>
  );
};

export default Homepage;
