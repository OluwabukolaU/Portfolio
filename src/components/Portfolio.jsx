/*import React from "react";
import marketplace from "../assets/portfolio/marketplace.png";
import travelwebsite from "../assets/portfolio/travelwebsite.png";
import landingpage from "../assets/portfolio/landingpage.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: landingpage,
    },
    {
      id: 2,
      src: travelwebsite,
    },
    {
      id: 3,
      src: marketplace,
    },
   
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;*/

import React from "react";
import restfulapi from "../assets/portfolio/restfulapi.png";
import travelwebsite from "../assets/portfolio/travelwebsite.png";
import moviesearch from "../assets/portfolio/moviesearch.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: moviesearch,
      demoUrl: "https://moviesphere-hscg.vercel.app/",
      codeUrl: "https://github.com/OluwabukolaU/Moviesphere"
    },
    {
      id: 2,
      src: travelwebsite,
      demoUrl: "https://seasidess.netlify.app/",
      codeUrl: "https://github.com/OluwabukolaU/Seasides"
    },
    {
      id: 3,
      src: restfulapi,
      demoUrl: "https://sophiau.pythonanywhere.com/user/login",
      codeUrl: "https://github.com/OluwabukolaU/DRF-API"
    },
   
  ];

  const openDemo = (url) => {
    window.open(url, "_blank");
  };

  const openCode = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src , demoUrl, codeUrl}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() =>openDemo(demoUrl)}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => openCode(codeUrl)}>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;