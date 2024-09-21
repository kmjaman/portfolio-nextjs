import About from "@/components/About";
import Contact from "@/components/Contact";
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
    </>
  );
}
