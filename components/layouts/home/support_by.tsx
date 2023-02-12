import React from "react";

const imgUrl = [
  "https://pbs.twimg.com/media/CG-FHMyUgAAJJ6O.jpg",
  "https://i.pinimg.com/originals/47/23/ce/4723ce51a771167fe607f208fc4731c3.jpg",
  "https://i.pinimg.com/originals/23/95/d0/2395d0b3066106200583d3728c121cbc.jpg",
  "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-800,pr-true/uploads/community-staging/img/club//asosiasi-honda-jakarta-60856e8af77e9914b2065fdb-2-23052021-023114.png",
  "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-800,pr-true/uploads/community-staging/img/club//surabaya-honda-community-60856eebf77e9914b2066032-23052021-024621.png",
];

const SupportBy = () => (
  <section>
    <div className="w-full px-4  pb-12  sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-base font-semibold py-12 tracking-wide uppercase">
          Supported by
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          {imgUrl.map((url, idx) => (
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <img key={idx} src={url} alt="logo" width={100} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SupportBy;
