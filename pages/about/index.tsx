import AppLayout from "@/components/layouts/App";
import SupportBy from "@/components/layouts/home/support_by";
import News from "@/components/layouts/News";
import { NextPage } from "next";
// import Image from "next/image";
import React from "react";

const About: NextPage = () => (
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
            tentang
          </h2>

          <h1 className="text-4xl font-semibold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
            Bikers Brotherhood Motorcycle Club
          </h1>
          <div className="max-w-lg mx-auto mt-6 text-sm text-center text-black md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">
            Bikers Brotherhood Motorcycle Club merupakan paguyuban bikers
            seluruh indonesia yang mencakup 33 provinsi
          </div>
          <div className="mt-8 text-sm text-black">
            By signing up, you agree to our terms and services.
          </div>
        </div>
      </div>
    </div>
    <section>
      <div className="max-w-5xl mx-auto my-12 flex flex-col items-center sm:px-5 md:flex-row tails-selected-element">
        <div className="flex flex-col items-start justify-center w-full h-full py-6 pr-16 mb-6 md:mb-0 md:w-3/2">
          <div className="flex flex-col px-4 items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Sekilas info
            </h2>
            <div className=" mt-6 text-sm text-justify text-black sm:text-base ">
              Organisasi ini bernama BIKERS BROTHERHOOD MOTORCYCLES CLUB
              disingkat BBMC. No. SK Direktorat Jenderal Administrasi Hukum Umum
              – Kementrian Hukum dan Hak Asasi Manusia Republik Indonesia :
              AHU-0004105.AH.01.07.Tahun 2018 | Direktorat Jenderal Administrasi
              Hukum
            </div>
            <div className=" mt-4 text-sm text-justify text-black sm:text-base ">
              BIKERS BROTHERHOOD MOTORCYCLES CLUB berdiri atas dasar kesamaan
              pendapat dan ide yang telah disahkan pada tanggal 13 Juni 1988 di
              Kota Bandung Propinsi Jawa Barat Negara Republik Indonesia untuk
              waktu yang tidak ditentukan lamanya. Selanjutnya pada Tanggal dan
              Tempat tersebut Ditetapkan dan Diperingati Setiap Tahun sebagai
              Perayaan Hari Ulang Tahun BBMC.
            </div>
            <div className=" mt-4 text-sm text-justify text-black sm:text-base ">
              Sifat Organisasi BIKERS BROTHERHOOD MOTORCYCLES CLUB: Bersifat Non
              – Politis, Bersifat Nasional dan Internasional dimana sebagai
              Pusat (disebut Mother Chapter) yaitu Kota Bandung, dan Wilayah
              atau Daerah lain di Indonesia atau Luar Negeri (disebut Chapter).
              Bersifat Tunggal (bukan organisasi yang menginduk kepada
              organisasi manapun). Dapat bekerjasama dengan Organisasi sejenis
              lainnya dan menjadi Organisasi Induk yang memiliki sayap
              organisasi lain (Syarat-syarat dan ketentuan tentang sayap
              organisasi , diatur dalam Peraturan Organisasi). Dalam menjalankan
              roda organisasi, BIKERS BROTHERHOOD MOTORCYCLES CLUB memiliki
              Lembaga-lembaga Sosial dan Usaha yang keanggotaannya bisa berasal
              dari luar BIKERS BROTHERHOOD MOTORCYCLES CLUB, dimana Pemimpin
              dari lembaga tersebut adalah Life Member (Syarat-syarat dan
              ketentuan tentang kelembagaan tersebut diatur dalam Peraturan
              Organisasi).
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 items-end">
          <img
            alt="img"
            src="https://awsimages.detik.net.id/community/media/visual/2019/05/28/67c058c0-4015-463a-a6a8-0e6ec0588794_34.jpeg?w=700&q=90"
            className="object-fill mt-3 mx-auto h-16 lg:h-24"
          />
        </div>
      </div>
    </section>
    <SupportBy />
    <News showList={false} />
    <div className="w-full px-3 my-12 antialiased lg:px-6 flex items-center justify-center ">
      <div className="mx-auto max-w-5xl center">
        <div className="container py-auto mx-auto text-center sm:px-4 ">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            visi misi
          </h2>

          <h1 className="text-4xl font-semibold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
            Bikers Brotherhood Motorcycle Club
          </h1>

          <div className="max-w-5xl mx-auto my-12 flex flex-col items-start sm:px-5 md:flex-row tails-selected-element">
            <div className="flex flex-col items-start justify-center w-full h-full py-6 pr-16 mb-6 md:mb-0 md:w-3/2">
              <div className="flex flex-col px-4 items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Visi
                </h2>
                <div className=" mt-6 text-sm text-justify text-black sm:text-base ">
                  1. MEMPERAT SILAHTURAHMI
                </div>
                <div className=" mt-6 text-sm text-justify text-black sm:text-base ">
                  2. MEMPERAT KEKOMPAKAN
                </div>
                <div className=" mt-6 text-sm text-justify text-black sm:text-base ">
                  3. MENJALIN KEBERSAMAAN
                </div>
                <div className=" mt-6 text-sm text-justify text-black sm:text-base ">
                  4. MENJALIN ORGANISASI YANG KUAT
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-full h-full py-6 pr-16 mb-6 md:mb-0 md:w-3/2">
              <div className="flex flex-col px-4 items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Misi
                </h2>
                <div className=" mt-6 text-sm text-justify text-black sm:text-base ">
                  Dengan Adanya Komunitas Bikers Brotherhood Motorcycle Club Ini
                  Diharapkan Bisa Untuk Ajang Silahturahmi Untuk Para Anggota.
                  Dan Selain Itu Semoga Komunitas Ini Bisa Membuat Kebersamaan
                  Yang Kuat Untuk Semua Anggota. Bikers Brotherhood Motorcycle
                  Club Ini Ingin Menyatukan Semua Pikiran-Pikiran Yang Berbeda
                  Untuk Menuju Satu Tujuan Yang Sama.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
);

export default About;
