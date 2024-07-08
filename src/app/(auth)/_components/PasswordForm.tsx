"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Loader2, Eye, EyeOff } from "lucide-react";

const PasswordForm = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const onClickLoginHandler = async () => {
    setLoading(true);
    const res = await axios.post("/api/auth", {
      username: "testadmin",
      password: "testadmin",
    });
    if (res) {
      router.push("/");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="relative">
        <input
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mr-2 focus:outline-none"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <button
          className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? <Eye /> : <EyeOff />}
        </button>
      </div>
      <div className="flex justify-between items-center mt-5">
        <h6 className="text-[#4E4E4E] text-md">
          Use a minimum of 6 characters (case sensitive) with at least one
          number or special character.
        </h6>
        <button
          onClick={onClickLoginHandler}
          className="bg-[#000000] text-[#FFFFFF] rounded-md p-2"
        >
          {loading ? <Loader2 className="size-10 animate-spin" /> : "Continue"}
        </button>
      </div>
    </>
  );
};

export default PasswordForm;
