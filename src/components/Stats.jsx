"use client";
import CountUp from "react-countup";
import { differenceInYears } from "date-fns";

const stats = [
  {
    num: differenceInYears(new Date(), new Date(2017, 5, 8)),
    text: "+ years of experience",
  },
  {
    num: 6,
    text: "Completed projects",
  },
  {
    num: 1000,
    text: "+ Github Commits",
  }
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div key={index} className="flex items-center justify-center flex-1 gap-4 xl:justify-start">
              <CountUp end={item.num} duration={5} delay={2} className="text-4xl font-extrabold xl:text-6xl" />
              <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80 text-lg`}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Stats;