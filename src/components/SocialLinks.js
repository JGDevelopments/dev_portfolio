import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPortrait } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/JGDevelopments",
    },
    {
      id: 3,
      child: (
        <>
          Mail <FaEnvelope size={30} />
        </>
      ),
      href: "mailto:dsikes313@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <FaPortrait size={30} />
        </>
      ),
      href: "./resume.pdf",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map(
          (
            { id, child, href, style, download } //we are just iterating over the links array using map, assinging the map key with the id of the link id's in the array and destructuring so we dont have to type links.id or links.link.
          ) => (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 " +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                {child}{" "}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default SocialLinks;
