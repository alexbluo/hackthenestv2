import classNames from "classnames";
import { useCycle } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AboutSection from "../components/sections/AboutSection";
import FAQSection from "../components/sections/FAQSection";
import FrontSection from "../components/sections/FrontSection";
import ScheduleSection from "../components/sections/ScheduleSection";
import SponsorsSection from "../components/sections/SponsorsSection";
import useGradient from "../utils/useGradient";

// TODO: handle tab focus styles
const Index: NextPage = () => {
  const [open, toggleOpen] = useCycle(false, true);

  return (
    <>
      <Head>
        <title>Hack the Nest</title>
      </Head>
      <div
        className={classNames(useGradient(), "relative text-white", {
          "fixed left-0 right-0 top-0 md:static": open,
        })}
      >
        <div className="absolute top-0 left-0 h-full w-screen">
          <Image
            className="object-cover object-top"
            src="/background.png"
            alt="Website background"
            fill
            priority
          />
        </div>
        <NavBar open={open} toggleOpen={toggleOpen} />
        <main className="relative z-0">
          <FrontSection />
          <AboutSection />
          {/* <ScheduleSection /> */}
          <FAQSection />
          <SponsorsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
