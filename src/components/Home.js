import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ReactComponent as HeroImage } from "../assets/Code typing-amico (1).svg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full text-white">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            Hi, my name is Julian and I have experience in developiong full
            stack web apps. Currently I am focusing on React, Tailwind, GraphQL,
            and Express.
          </p>

          <div>
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white font-medium hover:font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-emerald-500 to-cyan-600 cursor-pointer"
            >
              Contact
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <HeroImage className="rounded-2xl mx-auto w-2/3 md:w-56 lg:w-64 xl:w-72 2xl:w-80  " />
        </div>
      </div>
    </div>
  );
};

export default Home;
