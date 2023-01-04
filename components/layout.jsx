import NavBar from "./NavBar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children, title = "Lazy Buy" }) => {
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
      <NavBar />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
