import NavBar from "./NavBar";
import Footer from "./Footer";
import Head from "next/head";

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
      {!noLayout && <NavBar />}
      <main>{children}</main>
      {!noLayout && <Footer />}
    </>
  );
};

export default Layout;
