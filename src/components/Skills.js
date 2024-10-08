import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/node.png";
import sonarcloud from "../assets/sonar.png";
import aws from "../assets/logoimage.png";
import azure from "../assets/az.png";

const Skills = () => {
  const techstack = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JS",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: aws,
      title: "AWS",
      style: "shadow-orange-400",
    },
    {
      id: 9,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-400",
    },
    {
      id: 10,
      src: sonarcloud,
      title: "Sonar Cloud",
      style: "shadow-orange-400",
    },
    {
      id: 9,
      src: azure,
      title: "Azure",
      style: "shadow-blue-400",
    },
  ];
  return (
    <div
      name="skills"
      className="pb-10 bg-gradient-to-b from-black to-gray-800 to-black w-full h-3/4"
      style={{ paddingBottom: "200px" }}
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
            Tech Skills
          </p>
          <br />
          <br />
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
          {techstack.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="html" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
