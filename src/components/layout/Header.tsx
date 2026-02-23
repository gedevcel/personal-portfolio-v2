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
        <div className="flex h-full px-5 md:px-[5.5rem] justify-between items-center">
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
              className="bg-primary text-white px-6 py-2 rounded-xl cursor-pointer"
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
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 w-full h-screen bg-[#1c1c1c] flex flex-col items-center justify-between p-8 pt-28 md:hidden z-50"
            >
              {/* Top Branding */}
              <div className="flex flex-col items-center gap-1 group">
                <h2 className="text-6xl font-semibold leading-none text-white opacity-90 group-hover:opacity-100 transition-opacity mt-8">
                  Software
                </h2>
                <h3 className="text-5xl font-medium leading-none bg-gradient-to-r from-[#FFC76B] to-[#F47B2A] inline-block text-transparent bg-clip-text">
                  Developer.
                </h3>
              </div>

              {/* Center Menu */}
              <div className="flex flex-col items-center gap-10 w-full max-w-xs">
                <div className="flex flex-col items-center w-full group">
                  <a
                    className="text-white text-3xl font-medium cursor-pointer transition-all duration-300 group-hover:scale-110"
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => {
                        scrollToId("experience");
                      }, 1);
                    }}
                  >
                    Experience
                  </a>
                  <div className="h-0.5 bg-gradient-to-r from-[#FFC76B] to-[#F47B2A] w-0 group-hover:w-full transition-all duration-300 mt-2"></div>
                </div>

                <div className="flex flex-col items-center w-full group">
                  <a
                    className="text-white text-3xl font-medium cursor-pointer transition-all duration-300 group-hover:scale-110"
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => {
                        scrollToId("aboutme");
                      }, 1);
                    }}
                  >
                    About
                  </a>
                  <div className="h-0.5 bg-gradient-to-r from-[#FFC76B] to-[#F47B2A] w-0 group-hover:w-full transition-all duration-300 mt-2"></div>
                </div>

                <div className="flex flex-col items-center w-full group">
                  <a
                    className="text-white text-3xl font-medium cursor-pointer transition-all duration-300 group-hover:scale-110"
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => {
                        scrollToId("projects");
                      }, 1);
                    }}
                  >
                    Projects
                  </a>
                  <div className="h-0.5 bg-gradient-to-r from-[#FFC76B] to-[#F47B2A] w-0 group-hover:w-full transition-all duration-300 mt-2"></div>
                </div>
              </div>

              {/* Bottom Button */}
              <div className="w-full max-w-sm pb-10">
                <button
                  className="w-full bg-primary text-white py-5 rounded-2xl text-xl font-bold shadow-2xl active:scale-95 transition-all duration-300 hover:brightness-110"
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => {
                      scrollToBottom();
                    }, 1);
                  }}
                >
                  Get in touch
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
