"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import Hamburger from "@/components/icons/Hamburger";
import Cross from "@/components/icons/Cross";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const { lenis, scrollToTop, scrollToBottom, scrollToId } = useSmoothScroll();

  useEffect(() => {
    if (lenis) {
      if (isOpen) {
        lenis.stop();
        document.body.style.overflow = "hidden";
      } else {
        lenis.start();
        document.body.style.overflow = "unset";
      }
    }
  }, [isOpen, lenis]);

  return (
    <>
      <header
        className={`sticky top-0 h-20 backdrop-blur-xl ${isOpen ? "z-[60]" : "z-10"}`}
      >
        <div className="flex h-full px-5 justify-between items-center max-w-[1520px] mx-auto">
          <a href="#">
            <img
              onClick={scrollToTop}
              src="/signature.png"
              alt="Gerard Doncel"
              className="w-20"
            />
          </a>
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex justify-end items-center gap-x-10">
              <a
                className="cursor-pointer"
                onClick={() => scrollToId("aboutme")}
              >
                About
              </a>
              <a
                className="cursor-pointer"
                onClick={() => scrollToId("experience")}
              >
                Experience
              </a>
              <a
                className="cursor-pointer"
                onClick={() => scrollToId("projects")}
              >
                Projects
              </a>
            </nav>
            <a
              onClick={() => scrollToBottom()}
              className="bg-primary text-black font-semibold px-6 py-2 rounded cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_#A587E6]"
            >
              Get in touch
            </a>
          </div>

          <button
            className="md:hidden z-[70] text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <Cross className="w-8 h-8" />
            ) : (
              <Hamburger className="w-8 h-8" />
            )}
          </button>

          {!isOpen && (
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#FFC76B] to-[#F47B2A] transform-gpu"
              style={{ scaleX: scrollYProgress, originX: 0 }}
            />
          )}
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 h-screen md:hidden z-20"
              onClick={() => {
                setIsOpen(false);
              }}
            />
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 w-full h-screen bg-[#1c1c1c] backdrop-blur-xl flex flex-col items-center justify-center p-8 md:hidden z-50"
            >
              {/* Center Menu */}
              <div className="flex flex-col items-center gap-10 w-full max-w-xs">
                <div className="flex flex-col items-center w-full">
                  <a
                    className="text-white text-3xl font-medium cursor-pointer transition-all duration-300"
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => {
                        scrollToId("aboutme");
                      }, 1);
                    }}
                  >
                    About
                  </a>
                </div>

                <div className="flex flex-col items-center w-full">
                  <a
                    className="text-white text-3xl font-medium cursor-pointer transition-all duration-300"
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => {
                        scrollToId("experience");
                      }, 1);
                    }}
                  >
                    Experience
                  </a>
                </div>

                <div className="flex flex-col items-center w-full">
                  <a
                    className="text-white text-3xl font-medium cursor-pointer transition-all duration-300"
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => {
                        scrollToId("projects");
                      }, 1);
                    }}
                  >
                    Projects
                  </a>
                </div>

                <div className="flex flex-col items-center w-full">
                  <a
                    className="text-white text-3xl font-medium cursor-pointer transition-all duration-300"
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => {
                        scrollToId("contact");
                      }, 1);
                    }}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
