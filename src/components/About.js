import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos nisi
          corrupti esse voluptatem nihil facere temporibus. Praesentium, unde
          reprehenderit, vitae ea iure omnis sit tenetur cum asperiores
          voluptatibus eum!
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          inventore iste dignissimos tenetur! Perspiciatis earum corporis quia
          voluptatum, nihil aspernatur nesciunt doloremque autem assumenda? Eius
          fugiat enim similique minus aliquid?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sint inventore iste dignissimos tenetur!
          Perspiciatis earum corporis quia voluptatum, nihil aspernatur nesciunt
          doloremque autem assumenda? Eius fugiat enim similique minus aliquid?
        </p>
      </div>
    </div>
  );
};

export default About;
