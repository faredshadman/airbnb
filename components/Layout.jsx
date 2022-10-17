import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, placeholder }) => {
  return (
    <>
      <Header placeholder={placeholder} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
