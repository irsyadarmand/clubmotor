import React from "react";

const HeadComponentView = () => (
  <section>
    <div className="w-full px-3 h-screen antialiased bg-white lg:px-6 flex items-center justify-center ">
      <div className="mx-auto max-w-5xl center">
        <div className="container py-auto mx-auto text-center sm:px-4 ">
          <h1 className="text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
            <span className="block my-6">(BBMC)</span>{" "}
            <span className="inline-block relative">
              Bikers Brotherhood Motorcycle Club
            </span>
          </h1>
          <div className="max-w-lg mx-auto mt-6 text-sm text-center text-black md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">
            Induk organisasi dari para bikers se Indonesia.
          </div>
          <div className="mt-8 text-sm text-black">
            By signing up, you agree to our terms and services.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeadComponentView;
