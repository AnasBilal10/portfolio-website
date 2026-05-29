"use client";
import { useSectionInView } from "@/lib/hooks/sectionInView";
import { motion } from "framer-motion";
import SectionHeader from "./section-header";

function AboutUs() {
  const { ref } = useSectionInView({ threshold: 1, sectionName: "About" });

  return (
    <motion.div
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeader>About Me</SectionHeader>
      <p className="mb-3">
        I'm a <span className="font-medium bold">Full-Stack Developer</span>{" "}
        with 4+ years of experience building web applications for B2B and B2C
        products. Over the years I've worked across the full stack, but my
        strongest area is{" "}
        <span className="font-medium bold">Angular and TypeScript</span> — I've
        used it across multiple production products, from small startups to
        enterprise-scale platforms.
      </p>

      <p>
        Right now I'm working at Vroozi, an AI-powered procurement SaaS, where I
        build complex modules and workflows used by enterprise clients.
        Alongside that, I work with international clients on freelance projects
        — mostly around integrating AI into existing web apps using the OpenAI
        and Claude APIs. I enjoy working on products that solve real problems,
        and I take pride in writing code that's clean enough for the next
        developer to understand without a meeting.
      </p>
    </motion.div>
  );
}

export default AboutUs;
