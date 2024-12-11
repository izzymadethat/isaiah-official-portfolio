import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full px-4 mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          <div className="order-2 text-center xl:text-left xl:order-none">
            <span className="text-xl">Software Engineer</span>

            <h1 className="mb-6 h1">
              Hi 👋🏾, I'm <br />{" "}
              <span className="text-primary -z-10">Isaiah Vickers</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              I'm an innovative full-stack web app developer, backend systems architect, analyst, and professional musician. I bring sight to visions!
            </p>
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 uppercase"
                asChild
              >
                <Link href="/assets/resume/IsaiahVickers_SWE_Resume.pdf" download="IsaiahVickers_SWE_Resume.pdf" >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Link>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-primary rounded-full flex justify-center items-center text-primary text-base hover:bg-primary hover:text-white/90 hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 mb-8 xl:order-none xl:mb-0"><Photo /></div>
        </div>
      </div>
      <Stats />
    </section>
  );
};
export default Home;
