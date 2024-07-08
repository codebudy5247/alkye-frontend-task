"use client";
import { useEffect, useState } from "react";
import { apiService } from "@/services";

type Props = {
  user: User;
};

const UserName = ({ user }: Props) => {
  const [currentUser, setCurrentUser] = useState<Customer | null>(null);

  useEffect(() => {
    const getCustomerList = async () => {
      const res = await apiService.customerLogin(user.token);
      if (res?.status === 200) {
        const loggedInUser = res.data.find(
          (obj: Customer) => obj.id === user.user_id
        );
        if (loggedInUser) {
          setCurrentUser(loggedInUser);
        }
      }
    };
    getCustomerList();
  }, []);
  return (
    <div className="mt-10 flex gap-2">
      <h1 className="font-test-soehne text-4xl text-white">Welcome</h1>
      <h1 className="font-test-soehne text-4xl text-white underline">
        {currentUser?.customer_name.split(" ")[0]}
      </h1>
    </div>
  );
};

export default UserName;
