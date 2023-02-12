import AppLayout from "@/components/layouts/App";
import SupportBy from "@/components/layouts/home/support_by";
import News from "@/components/layouts/News";
import type { NextPage } from "next";

const data = [
  {
    id: 1,
    name: "Wingday 3 Dokumentasi",
    imageSrc:
      "https://tiger-club.or.id/upload/gallery/gallery-wingday3dokumentasi-1587235658.jpg?time=1670660891",
  },
  {
    id: 2,
    name: "Wingday 3 Dokumentasi",
    imageSrc:
      "https://tiger-club.or.id/upload/gallery/gallery-wingday3dokumentasi-1587235677.jpg?time=1670660891",
  },
  {
    id: 3,
    name: "Wingday 3 Dokumentasi",
    imageSrc:
      "https://tiger-club.or.id/upload/gallery/gallery-wingday3dokumentasi-1587235717.jpg?time=1670660891",
  },
  {
    id: 4,
    name: "Wingday 3 Dokumentasi",
    imageSrc:
      "https://tiger-club.or.id/upload/gallery/gallery-wingday3dokumentasi-1587235743.jpg?time=1670660891",
  },
  {
    id: 5,
    name: "MUKERNAS 1 PP HTCI Periode 2017-2019",
    imageSrc:
      "https://tiger-club.or.id/upload/gallery/gallery-mukernas1pphtciperiode2017-2019-1587235783.jpg?time=1670660891",
  },
  {
    id: 6,
    name: "JAMNAS MANADO",
    imageSrc:
      "https://tiger-club.or.id/upload/gallery/gallery-jamnasmanado-1587235852.jpg?time=1670660891",
  },
];

const Gallery: NextPage = () => (
  <AppLayout>
    <div className="w-full px-3 h-screen antialiased lg:px-6 flex items-center justify-center ">
      <div className="mx-auto max-w-5xl center">
        <div className="container py-auto mx-auto text-center sm:px-4 ">
          <div className="max-w-md border-md mx-auto p-4">
            <img
              alt="about_image"
              src="https://www.naikmotor.com/wp-content/uploads/2018/11/Jabar_Kondusif_Jokowi_BB1MC-8.jpeg"
              className="my-10 text-center rounded-md"
            />
          </div>

          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Gallery
          </h2>

          <h1 className="text-4xl font-semibold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
            Bikers Brotherhood Motorcycle Club
          </h1>
        </div>
      </div>
    </div>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((gallery) => (
            <div key={gallery.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={gallery.imageSrc}
                  alt={gallery.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {gallery.name}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <SupportBy />
    <News showList="true" />
  </AppLayout>
);

export default Gallery;
