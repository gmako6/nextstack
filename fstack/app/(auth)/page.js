"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";

const Auth = () => {
  const navigation = useRouter();

  return (
    <div>
      <div>
        <Link></Link>
      </div>
      <div>
        <button onClick={() => navigation.push("about")}>Go to About</button>
      </div>
    </div>
  );
};

export default Auth;
