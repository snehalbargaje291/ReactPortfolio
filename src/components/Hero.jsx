import React from "react";
// import { Link } from 'react-router-dom'
import profilepic from "../assets/photomy.png";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import {
  DiJavascript1,
  DiReact,
  DiAngularSimple,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiMysql,
} from "react-icons/di";
import { motion } from "framer-motion";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFigmaLogoLight, PiFramerLogoFill } from "react-icons/pi";
import { BiDownload } from "react-icons/bi";

function Hero() {
  return (
    <div
      className="max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-4 mb-6"
      id="home"
    >
      <div data-aos="fade-right" data-aos-delay="100" className="grid grid-cols-2 md:col-span-5 p-4 glass">
        <motion.div
          whileHover={{ scale: 0.8, rotate: [0, -10, 0, 10, 0] }}
          className="flex items-center justify-center"
        >
          <img
            className="w-[800px] rounded-3xl"
            src={profilepic}
            alt="profile pic"
          />
        </motion.div>
        <div className="my-auto ml-0 md:ml-4 flex-col text-gray-200">
          <p className="text-xl lg:text-4xl font-bold">
            Hi! i am <br /> Snehal Bargaje
            <br />
            <TypeAnimation
              sequence={[
                "Frontend Dev",
                1000,
                "Webdesigner",
                1000,
                "Consultant",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
          <p className="text-xl lg:text-3xl font-semibold text-gray-400">
            with a 4 months experiance
          </p>
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.5, rotate: 360  }}
            className="mt-6 px-2 py-2 text-lg md:text-4xl font-bold text-white bg-primary-color rounded-full"
          >
            <a
              href="/SnehalsResume .pdf"
              download="Snehal's Resume.pdf"
              title="Download Resume"
            >
              <BiDownload/>
            </a>
          </motion.button>
        </div>
      </div>

      <div className="grid md:col-span-3 gap-6">
        <div data-aos="fade-left" className="text-5xl p-4 glass">
          <p className="text-gray-200 text-xl font-bold mb-4 text-center">
            My Tech Stack <br />
            <code className="text-sm text-yellow-300 blink">Drag them!</code>
          </p>
          
          <div className="grid grid-cols-4 md:gap-4 lg:gap-6">
            <motion.div
              drag
              dragConstraints={{
                top: -30,
                left: -30,
                right: 30,
                bottom: 30,
              }}
              className="flex items-center justify-center"
            >
              <DiHtml5 className="text-orange-600" />
            </motion.div>
            <motion.div
              drag
              dragConstraints={{
                top: -30,
                left: -30,
                right: 30,
                bottom: 30,
              }}
              className="flex items-center justify-center"
            >
              <DiCss3 className="text-blue-600" />
            </motion.div>
            <motion.div
              drag
              dragConstraints={{
                top: -30,
                left: -30,
                right: 30,
                bottom: 30,
              }}
              className="flex items-center justify-center"
            >
              <DiSass className="text-pink-600" />
            </motion.div>
            <motion.div
              drag
              dragConstraints={{
                top: -30,
                left: -30,
                right: 30,
                bottom: 30,
              }}
              className="flex items-center justify-center"
            >
              <RiTailwindCssFill className="text-blue-600" />
            </motion.div>
            <motion.div
              drag
              dragConstraints={{
                top: -30,
                left: -30,
                right: 30,
                bottom: 30,
              }}
              className="flex items-center justify-center"
            >
              <PiFramerLogoFill className="text-black" />
            </motion.div>
            <motion.div
              drag
              dragConstraints={{
                top: -30,
                left: -30,
                right: 30,
                bottom: 30,
              }}
              className="flex items-center justify-center"
            >
              <PiFigmaLogoLight className="text-white" />
            </motion.div>
            <motion.div
              drag
              dragConstraints={{
                top: -30,
                left: -30,
                right: 30,
                bottom: 30,
              }}
              className="flex items-center justify-center"
            >
              <DiBootstrap className="text-purple-600" />
            </motion.div>
            <motion.div
              drag
              dragConstraints={{
                top: -30,
                left: -30,
                right: 30,
                bottom: 30,
              }}
              className="flex items-center justify-center">
            <SiNextdotjs className="text-black bg-white rounded-full" />
            </motion.div>
            <motion.div
              drag
              dragConstraints={{
                top: -30,
                left: -30,
                right: 30,
                bottom: 30,
              }}
              className="flex items-center justify-center"
            >
              <DiJavascript1 className="text-yellow-500" />
            </motion.div>
            <motion.div
              drag
              dragConstraints={{
                top: -30,
                left: -30,
                right: 30,
                bottom: 30,
              }}
              className="flex items-center justify-center"
            >
              <DiReact className="text-blue-500" />
            </motion.div>
            <motion.div
              drag
              dragConstraints={{
                top: -30,
                left: -30,
                right: 30,
                bottom: 30,
              }}
              className="flex items-center justify-center"
            >
              <DiAngularSimple className="text-red-600" />
            </motion.div>
            <motion.div
              drag
              dragConstraints={{
                top: -30,
                left: -30,
                right: 30,
                bottom: 30,
              }}
              className="flex items-center justify-center"
            >
              <DiMysql className="text-white" />
            </motion.div>
          </div>
        </div>
        <div data-aos="fade-left" className="text-6xl gap-4 p-2 flex justify-center items-center glass text-gray-600">
          <a
            href="https://github.com/snehalbargaje291"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <AiFillGithub className="transition duration-300" />
          </a>
          <a
            href="www.linkedin.com/in/snehal-bargaje-o2910"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <AiFillLinkedin className="transition duration-300" />
          </a>
          <a href="mailto:snehal.bargaje291@gmail.com" title="Email">
            <AiOutlineMail className="transition duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
