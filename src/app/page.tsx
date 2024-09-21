import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Profile />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
