import AppLayout from "@/components/layouts/App";
import AboutComponentView from "@/components/layouts/home/about";
import HeadComponentView from "@/components/layouts/home/head";
import SupportBy from "@/components/layouts/home/support_by";
import News from "@/components/layouts/News";
import type { NextPage } from "next";

const Home: NextPage = () => (
  <AppLayout>
    <HeadComponentView />
    <SupportBy />
    <AboutComponentView />
    <News showList="true" />
  </AppLayout>
);

export default Home;
