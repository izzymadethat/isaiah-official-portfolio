"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMap } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(1) 850 694 7127"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "isaiah.vickers@outlook.com"
  },
  {
    icon: <FaMap />,
    title: "Location",
    description: "Tallahasee, Florida, USA"
  }
];

const ContactPage = () => {
  const [wordCount, setWordCount] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTextArea = (e) => {
    const text = e.target.value;
    if (text.length > 1000) {
      return;
    }

    setMessage(text);
    setWordCount(text.length);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !message) {
      return;
    }
    setIsLoading(true);
    try {
      const contactData = {
        name: `${firstName} ${lastName}`,
        email,
        companyName,
        message
      };
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contactData)
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      alert("Message sent successfully!");
      setFirstName("");
      setLastName("");
      setCompanyName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl font-bold text-center xl:text-left text-primary">
                Available for Hire
              </h3>
              <p>Let’s Build the Future Together – Reach Out if You're Looking for a Passionate Software Developer!</p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                  type="text"
                  placeholder="First name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                  placeholder="Last name"
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <Input
                  placeholder="Company Name"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* text */}
              <div className="relative">
                <Textarea
                  placeholder="Type your message here"
                  className="h-[200px]"
                  required
                  maxLength={1000}
                  onChange={handleTextArea}
                  value={message}
                />
                {/* count */}
                <p>
                  <span className="text-white/60">{wordCount}</span>/1000
                </p>
              </div>
              <Button size="lg" className="max-w-40" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
          <div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="text-primary size-[52px] xl:size-[72px] bg-[#27272c] rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-2xl font-bold">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default ContactPage;
