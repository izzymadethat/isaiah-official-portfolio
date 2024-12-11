"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiDocker } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description: `Hello, and thanks for traveling to my space! I'm Isaiah Vickers. My programming adventure launched on June 8th, 2023.

Before I became a programmer, I was (and still am) a professional audio engineer. I decided to dive into the world of code because I love solving puzzles and exploring new frontiers. Becoming a software engineer felt like the perfect mission for me.

Coding has let me use all the skills I've picked up over the years. I have experience in design, finance, marketing, and music. Now, I get to mix all that knowledge with my love for being a programmer.

Discovering new techniques and languages is like discovering new planets, except we're in the vast universe of technology! This has opened up so many exciting opportunities for me, and it's the best decision I've ever made!

Join me as I journey through the cosmos of code, exploring new worlds and creating amazing things along the way.`,
  info: [
    {
      fieldname: "Name",
      fieldValue: "Isaiah Vickers"
    },
    {
      fieldname: "Email",
      fieldValue: "isaiah.vickers@outlook.com"
    },
    {
      fieldname: "Phone",
      fieldValue: "(1) 850 694 7127"
    },
    {
      fieldname: "Experience",
      fieldValue: "5+ Years"
    },
  ]
};

const skills = {
  title: "Technologies",
  description: "All of the skills and technologies I've picked up over the years",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS3"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <FaReact />,
      name: "React"
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS"
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJS"
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJS"
    },
    {
      icon: <SiDocker />,
      name: "Docker"
    },
  ]
};

const education = {
  title: "Education",
  description: "Relevant education and certifications",
  programs: [
    {
      institution: "App Academy",
      year: "2024",
      degree: "Certified Software Engineer",
    },
    {
      institution: "University of Michigan",
      year: "2023",
      degree: "Certified Python Developer",
    },
    {
      institution: "Amazon Web Services",
      year: "expected early 2025",
      degree: "AWS Certified Cloud Practitioner",
    }
  ]
};

const AboutPage = () => {
  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
    <div className="container px-4 mx-auto">
      <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        {/* content */}
        <div className="min-h-[70vh] w-full">
          <TabsContent value="about" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left ">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
            </div>
          </TabsContent>
          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                  {education.programs.map((item, index) => (
                    <li key={index} className="bg-[#232329] h-184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:justify-start gap-1">
                      <span className="text-primary">{item.year}</span>
                      <h3 className="text-2xl max-w-[260px] min-h-[60px] text-center ">{item.degree}</h3>
                      <div className="flex items-center gap-4">
                        <span className="size-[6px] rounded-full bg-primary"></span>
                        <p className="text-white/60">{item.institution}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px] ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 xl:gap-[30px] md:grid-cols-4">
                {skills.skillList.map((skill, index) => (
                  <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                          <div className="text-6xl transition-all duration-300 group-hover:text-primary">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </div>

          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>;
};
export default AboutPage;
