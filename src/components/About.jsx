import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 mt-[-20%] md:mt-[-10%]">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-8">
          Welcome to my corner of the web! I'm a passionate problem-solver with
          a background in a different industry, I've now shifted my focus to web
          development, using the power of HTML, CSS, JavaScript, React, Python,
          and Django to craft creative solutions. My goal is to build
          user-friendly, visually captivating web experiences that leave a
          lasting impression. Explore my work, and let's connect for exciting
          collaborations!
        </p>

        <br />

        <p className="text-xl mb-6">
          As a tech enthusiast with just under a year of hands-on experience in
          web development using HTML, CSS, Python, Django, and React, I've had
          the opportunity to build projects. I'm
          excited to continue this journey and contribute my skills to a
          forward-thinking team that values innovation and growth and provide cutting-edge software solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
