import { About } from "./ui/about";
import { Contact } from "./ui/contact";
import { Footer } from "./ui/footer";
import { HomeSection } from "./ui/home";
import { Projects } from "./ui/projects";
import { Skills } from "./ui/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <HomeSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
