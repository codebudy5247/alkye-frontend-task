"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const EmailForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col mt-2 space-y-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mr-2 focus:outline-none"
        id="email"
        type="email"
        placeholder="Email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <div className="flex justify-between items-center">
        <h6 className="text-[#4E4E4E] text-md">Have an account?</h6>
        <button
          onClick={() => router.push("/password")}
          className="bg-[#000000] text-[#FFFFFF] rounded-md sm:p-2 xs:p-1"
        >
          Agree & Continue
        </button>
      </div>
    </div>
  );
};

export default EmailForm;
