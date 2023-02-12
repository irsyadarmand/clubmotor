import { NewsType } from "@/core/types/news";
import React from "react";

const NewsCard = (data: NewsType) => {
  const items = data;
  return (
    <div className="flex flex-col items-center lg:items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
      <a href="#_" className="block">
        <img
          alt="img"
          className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
          src={items.image}
        />
      </a>

      <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
        <a href="#_">{items.title}</a>
      </h2>
      <p className="text-sm text-gray-500">{items.description}</p>
      <p className="pt-2 text-xs font-medium">
        <a href="#_" className="mr-1 underline">
          BBMC Member
        </a>{" "}
        · <span className="mx-1">{items.date}</span> ·{" "}
        <span className="mx-1 text-gray-600">3 min. read</span>
      </p>
    </div>
  );
};

export default NewsCard;
