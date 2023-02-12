import DataNews from "@/core/data/news";
import React from "react";
import NewsCard from "../news_card";

const News = ({ showList }) => {
  const listNews = DataNews;

  return (
    <section className="my-24 px-8 lg:items-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center sm:px-5 md:flex-row tails-selected-element ">
        <div className="w-full md:w-1/2">
          <a href="#_" className="block">
            <img
              alt="img"
              src={listNews[0].image}
              className="object-cover mt-3 mr-5 h-36 lg:h-40"
            />
          </a>
        </div>
        <div className="flex flex-col items-center lg:items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-3/2">
          <div className="flex flex-col lg:items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
            <div className="bg-red-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
              <svg
                className="w-3.5 h-3.5 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Berita Terbaru</span>
            </div>
            <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
              <a href="#_" className="text-black">
                {listNews[0].title}
              </a>
            </h1>
            <p className="pt-2 text-sm font-medium">
              by{" "}
              <a href="#_" className="mr-1 underline text-black">
                BBMC Member
              </a>{" "}
              · <span className="mx-1">{listNews[0].date}</span> ·{" "}
              <span className="mx-1 text-gray-600">5 min. read</span>
            </p>
          </div>
        </div>
      </div>
      {showList ? (
        <div className="max-w-5xl mx-auto pt-24">
          <div className="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16 tails-selected-element">
            {listNews.slice(1).map((item) => NewsCard(item))}
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default News;
