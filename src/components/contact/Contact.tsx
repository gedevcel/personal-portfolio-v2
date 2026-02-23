"use client";

import { useState } from "react";

import SectionTitle from "@/components/ui/SectionTitle";
import { Copy } from "@/components/icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "gerard.doncel.gutierrez@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="w-full max-w-[1520px] mx-auto px-5 md:px-[5.5rem] h-[calc(100dvh-115px)] relative"
    >
      <SectionTitle label="Contact" />
      <div className="flex flex-col gap-4 md:gap-10">
        <motion.div
          className="flex flex-col gap-3 mb-2"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
            type: "ease",
          }}
          viewport={{ once: true }}
        >
          <span className="font-semibold uppercase opacity-50">Email</span>
          <div className="flex flex-wrap sm:flex-nowrap gap-x-4 gap-y-2 items-center mb-3 md:mb-6 overflow-hidden">
            <a
              href={`mailto:${email}`}
              target="_blank"
              className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold lg:hover:text-primary duration-200 break-all sm:break-normal max-w-full"
            >
              {email}
            </a>
            <button
              onClick={handleCopy}
              aria-label="Copiar correo electrónico"
              className="relative flex items-center gap-1 lg:hover:text-primary transition-colors duration-200 shrink-0"
            >
              <Copy size={24} className="w-5 h-5 sm:w-6 sm:h-6" />

              <AnimatePresence>
                {copied && (
                  <motion.span
                    key="tooltip"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs sm:text-lg bg-black text-white px-2 py-1 rounded-md shadow-lg whitespace-nowrap z-10 border border-white/10"
                  >
                    Copied!
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
          <div className="h-0.5 w-full bg-gray-600 opacity-50"></div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-3 mb-2"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
            type: "ease",
          }}
          viewport={{ once: true }}
        >
          <span className="font-semibold uppercase opacity-50">Phone</span>
          <a
            href="tel:+34636739799"
            target="_blank"
            className="text-xl sm:text-3xl md:text-4xl lg:text-4xl mb-3 md:mb-6 font-bold lg:hover:text-primary duration-200 w-fit"
          >
            +34 636 73 97 99
          </a>
          <div className="h-0.5 w-full bg-gray-600 opacity-50"></div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-3 mb-2"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
            type: "ease",
          }}
          viewport={{ once: true }}
        >
          <span className="font-semibold uppercase opacity-50">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/gerarddoncel/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-3xl md:text-4xl lg:text-4xl mb-3 md:mb-6 font-bold lg:hover:text-primary duration-200 w-fit"
          >
            LinkedIn Profile Page
          </a>
          <div className="h-0.5 w-full bg-gray-600 opacity-50"></div>
        </motion.div>
      </div>
    </section>
  );
}
