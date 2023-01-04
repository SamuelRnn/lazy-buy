import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
