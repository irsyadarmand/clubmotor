/* eslint-disable jsx-a11y/label-has-associated-control */
import { useAppDispatch, useAppSelector } from "@/core/redux/hooks";
import { selectAuth } from "@/core/redux/slices/auth";
import { useGetCategoriesQuery } from "@/core/redux/slices/posts/queries";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CustomButton from "./Button";

const SideBar = () => {
  const router = useRouter();
  const { token, user } = useAppSelector(selectAuth);
  const [hover, setHover] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <details
      open
      className="overflow-hidden border border-gray-200 bg-white rounded md:sticky md:top-20 md:left-0 col-span-1 h-max"
    >
      <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
        <span className="text-sm font-medium">Toggle Filters</span>
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </summary>
      <div className="flex-col space-y-4">
        <legend
          onClick={() => router.push(`/articles`)}
          className={`block w-full px-5 py-2 rounded-md hover:bg-gray-100 cursor-pointer ${
            router.pathname === "/articles" && "font-bold bg-gray-200"
          }`}
        >
          Articles
        </legend>
        <legend
          onClick={() => router.push(`/gallery`)}
          className={`block w-full px-5 py-2 rounded-md hover:bg-gray-100 cursor-pointer ${
            router.pathname === "/gallery" && "font-bold bg-gray-200"
          }`}
        >
          Gallery
        </legend>
        <legend
          onClick={() => router.push(`/events`)}
          className={`block w-full px-5 py-2 rounded-md hover:bg-gray-100 cursor-pointer ${
            router.pathname === "/events" && "font-bold bg-gray-200"
          }`}
        >
          Events
        </legend>
      </div>
    </details>
  );
};
export default SideBar;
