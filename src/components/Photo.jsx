"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="relative w-full h-full">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}>
                {/* image */}
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
                    className="w-[403px] h-[189px] xl:w-[806px] xl:h-[604px] rounded-full absolute">
                    <Image src="/assets/head-shot.png" priority quality={100} fill alt="headshot image of Isaiah Vickers" className="object-contain rounded-full" />
                </motion.div>
                {/* circle */}
                <motion.svg className="w-[408px] h-[192px] xl:w-[812px] xl:h-[608px] rounded-full" fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
                    <motion.circle cx="253" cy="253" r="250" stroke="#F97316" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" initial={{ strokeDasharray: "24 10 0 0" }} animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], rotate: [120, 360], transition: { duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } }} />
                </motion.svg>
            </motion.div>
        </div>
    );
};
export default Photo;