import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Social from "../components/Social";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Social />
      <Footer />
    </>
  );
}