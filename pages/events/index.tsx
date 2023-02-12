import AppLayout from "@/components/layouts/App";
import News from "@/components/layouts/News";
import type { NextPage } from "next";

const Events: NextPage = () => (
  <AppLayout>
    <News showList="true" />
  </AppLayout>
);

export default Events;
