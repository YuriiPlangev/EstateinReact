import Header from "../widgets/Header/Header";
import Footer from "../widgets/Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../widgets/ScrollToTop";

const Layout = () => {
  return (
    <>
    <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
