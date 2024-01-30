"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const router = useRouter();

  const navigat = (page) => {
    router.push(page);
  };

  return (
    <div>
      <div>
        <Link href="/projects">Projects</Link>
      </div>
      <div>
        <button
          className="m-3 border-2 p-5 bg-blue-700 text-white rounded-md"
          onClick={() => navigat("about")}
        >
          Go to About
        </button>
        <button
          className="m-3 border-2 p-5 bg-blue-700 text-white rounded-md"
          onClick={() => navigat("register")}
        >
          Go to Profile
        </button>
      </div>
    </div>
  );
};

export default Login;
