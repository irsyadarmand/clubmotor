import Head from "next/head";
import Footer from "../Footer";
import ConfirmationModal from "../modal/confirmation/confirmation_modal";
import ModalLogin from "../modal/login/login_modal";
import Navbar from "../Navbar";
import ModalRegister from "../modal/register/register_modal";
import SideBar from "../SideBar";

const AppLayout = ({ children }) => (
  <>
    <Head>
      <title>bbmc.</title>
    </Head>
    <Navbar />
    <ModalRegister />
    <ModalLogin />
    <ConfirmationModal />
    {/* <div>{children}</div> */}
    <div className="max-w-7xl mx-auto pt-18 pb-24">
      <section>
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:grid grid-cols-4 mt-4 gap-8">
            <SideBar />
            <div className="col-span-3 flex-col">{children}</div>
          </div>
        </div>
      </section>
    </div>

    {/* <div className="max-w-5xl mx-auto pt-18 pb-24">
      <section>
        <div className="px-4 sm:px-6 lg:px-8 py-8 pt-20">
          <SideBar />
          <div className="col-span-3 pt-10 md:mt-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-8">
            <div className="md:grid grid-cols-4 mt-4 gap-8">
              <div className="">{children}</div>
            </div>
          </div>
        </div>
      </section>
    </div> */}
    <Footer />
  </>
);
export default AppLayout;
