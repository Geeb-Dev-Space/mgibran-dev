import AboutMe from "./components/home/about-me";
import Contact from "./components/home/contact";
import EducationSkills from "./components/home/education-skills";
import Softwares from "./components/home/software";
import ExperienceSec from "./components/home/experience-sec";
import HeroSection from "./components/home/hero-section";
import ContactBar from "./components/home/hero-section/contact-bar";
import LatestWork from "./components/home/latest-work";
import Gears from "./components/home/gears";

const page = () => {
  return (
    <>
      <main>
        <HeroSection />
        <ContactBar />
        <AboutMe />
        <ExperienceSec />
        <EducationSkills />
        <Softwares />
        <LatestWork />
        <Gears />
        <Contact />
      </main>
    </>
  );
};

export default page;
