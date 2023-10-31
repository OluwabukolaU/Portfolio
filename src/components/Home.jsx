import React from 'react';
import ThecodEmpress from '../assets/ThecodEmpress.png';
import {MdKeyboardArrowRight} from 'react-icons/md';
const Home = () => {
  return (
    <div name="home" class="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
        <div class="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-wow">
            <div class="flex flex-col justify-center h-full">
                <h2 class="text-4xl sm:text-7xl font-bold text-white">I am a Full Stack Developer</h2>
                <p class="text-gray-500 py-4 max-w-md">
                    I am a career changer who is passionate about coding and 
                    loves to solve problem with programming. I am a self taught
                    programmer who is always looking to learn new things.
                    Currently, I love working on web application using technologies like 
                    React, Tailwind, and Python.
                </p>

                <div>
                    <button class=" group text-white w-fit px-6 py-3 my-2
                    flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio 
                        <span class="group-hover:rotate-90 duration-300">
                            <MdKeyboardArrowRight size={25} class="ml-1"/>
                            </span>
                    </button>
                </div>
            </div>
            <div class="container mx-auto p-4">
                <img src={ThecodEmpress} alt="my profile" className="rounded-2xl mx-auto md:w-full w-20 h-auto" />
            </div>
        </div>
    </div>
  )
}

export default Home