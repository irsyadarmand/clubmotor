import { useRouter } from "next/router";
import React from "react";

const CustomButton = ({ onClick, title, pathName }) => {
  const router = useRouter();
  return (
    <button
      onClick={onClick}
      className={`p-4 mx-4 items-center inline-flex text-black border-b-2  hover:text-gray-600 hover:border-black ease-linear transition-all duration-400 ${
        router.pathname === pathName ? "border-black" : "border-transparent"
      }`}
    >
      <div className="block">{title}</div>
    </button>
  );
};

export default CustomButton;
