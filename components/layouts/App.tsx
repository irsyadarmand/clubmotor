import Head from "next/head";
import Footer from "../Footer";
import ConfirmationModal from "../modal/confirmation/confirmation_modal";
import ModalLogin from "../modal/login/login_modal";
import Navbar from "../Navbar";

const AppLayout = ({ children }) => (
  <>
    <Head>
      <title>bbmc.</title>
    </Head>
    <Navbar />
    <ModalLogin />
    <ConfirmationModal />
    <div>{children}</div>
    <Footer />
  </>
);
export default AppLayout;
