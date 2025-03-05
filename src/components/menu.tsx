"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import Avatar from "./avatar";

export default function Menu() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      {user.objectId ? (
        <Avatar user={user} />
      ) : (
        <div className="flex gap-5 text-white pr-7">
          <button
            onClick={() => router.push("/Register")}
            className="cursor-pointer hover:text-sky-300"
          >
            Register
          </button>
          <button
            onClick={() => router.push("/Login")}
            className="cursor-pointer hover:text-sky-300"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}
