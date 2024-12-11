"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Resonate",
    description: "Resonate is a project management platform built with tools so that audio professionals can work with their clients with ease.",
    stack: [
      {
        name: "React",
      },
      {
        name: "Redux",
      },
      {
        name: "Express",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "AWS S3"
      },
      {
        name: "Docker"
      },
      {
        name: "Sequelize"
      }
    ],
    image: "/assets/works/resonate.png",
    live: "https://resonate-hr8p.onrender.com/",
    github: "https://github.com/izzymadethat/resonate"
  },
  {
    num: "02",
    category: "fullstack",
    title: "Neocord",
    description: "Neocord is a discord clone that was built as a group project during my time at App Academy.",
    stack: [
      {
        name: "React",
      },
      {
        name: "Redux",
      },
      {
        name: "Flask",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "TailwindCSS",

      },
      {
        name: "Docker"
      },
      {
        name: "GitHub Actions"
      }
    ],
    image: "/assets/works/neocord.png",
    live: "https://neocord.onrender.com/",
    github: "https://github.com/izzymadethat/Neocord"
  },
  {
    num: "03",
    category: "fullstack",
    title: "Dunno",
    description: "A 'sticky notes' styled todo list app built with Nextjs",
    stack: [
      {
        name: "Nextjs",

      },
      {
        name: "TailwindCSS",
      },
      {
        name: "WebStorage",
      }
    ],
    image: "/assets/works/dunno.png",
    live: "https://dunno-todoapp.vercel.app/",
    github: "https://github.com/izzymadethat/dunno-todoapp"
  }

];

const WorksPage = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
    <div className="container px-4 mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="font-extrabold leading-none stroke-2 text-primary text-8xl">{project.num}</div>
            <h2 className="text-[42px] leading-none text-white group-hover:text-primary transition-all duration-500 capitalize font-bold">{project.title}</h2>
            <p className="text-white/60">{project.description}</p>
            <ul className="flex gap-4">
              {project.stack.map((item, index) => (
                <li key={index} className="text-base text-primary">
                  {item.name}
                  {index !== project.stack.length - 1 && ","}
                </li>
              ))}
            </ul>
            <div className="border border-white/20"></div>
            {/* Buttons */}
            <div className="flex items-center gap-4">
              {/* Live Project Link */}
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="size-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-3xl text-white group-hover:text-primary" />
                    </TooltipTrigger>
                    <TooltipContent>
                      View the Live Project
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/* Github Link */}
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="size-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-3xl text-white group-hover:text-primary" />
                    </TooltipTrigger>
                    <TooltipContent>
                      Github Repo
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}>
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="w-full">
                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                  {/* overlay */}
                  <div className="absolute top-0 left-0 z-10 w-full h-full transition-all duration-500 bg-black/40 hover:bg-transparent"></div>
                  <div>
                    <Image src={project.image} fill className="object-cover" alt={project.title} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-20px)] xl:bottom-0 w-full justify-between z-30 zl:w-max xl:justify-end" btnStyles="bg-primary hover:bg-primary/80 text-black size-[44px] rounded-full flex justify-center items-center transition-all duration-500" />
          </Swiper>
        </div>
      </div>
    </div>
  </motion.section>;
};
export default WorksPage;
