import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-3/4 pb-[350px] bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I’m a passionate full-stack web developer who blends creativity with
          technology to build seamless, user-friendly applications. Proficient
          in HTML, CSS, JavaScript, and frameworks like React and Node.js, I
          thrive on transforming ideas into robust solutions.
        </p>

        <br />

        <p className="text-xl">
          With a commitment to continuous learning and collaboration, I ensure
          every project meets high standards of functionality and design. Let’s
          connect and create something amazing together!
        </p>
      </div>
    </div>
  );
};

export default About;
