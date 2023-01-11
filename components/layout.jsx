import NavBar from "./Elements_Layout/Navbar/NavBar";
import Footer from "./Elements_Layout/Footer";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title = "Lazy Buy", noLayout = false }) => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/logocartremove.png"
          type="image/x-icon"
        />
        <title>{title}</title>
      </Head>
      <Toaster position="top-center" />
      {!noLayout && <NavBar />}
      <main>{children}</main>
      {!noLayout && <Footer />}
    </>
  );
};

export default Layout;
