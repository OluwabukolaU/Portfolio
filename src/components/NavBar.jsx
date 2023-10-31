import React, { useState} from 'react'
import{FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {
    
    const [nav, setNav] = useState(false);

    const links  = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Portfolio'
        },
        {
            id: 4,
            link: 'Experience'
        },
        {
            id: 5,
            link: 'Contact'
        },

    ];

  return (
    <div class="flex justify-between items-center w-full h-20
    px-4 text-white  bg-black fixed">
        <div> 
            <h1 class="text-4xl font-signature ml-2">ThecodEmpress</h1>
        </div>

        <ul class=" hidden md:flex">

            {links.map(({id, link}) => {
                return(
                    <li 
                    key={id} class="px-4 cursor-pointer capitalize font-medium 
                    text-grey-500 hover:scale-105 duration-200">{link}</li>
                )
            })}
            
        </ul>

        <div onClick={() => setNav(!nav)} class="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/> }
        </div>

        {nav && (

        <ul class="flex flex-col justify-center items-center absolute top-0 left-0 w-full 
        h-screen bg-gradient-to-b
        from-black to-gray-800 text-gray-500">

        {links.map(({id, link}) => {
                return(
                    <li 
                    key={id} class="px-4 cursor-pointer capitalize py-6 text-4xl">{link}</li>
                )
            })}
  
            <li class="">Home</li>
           
        </ul>

    )}
    </div>
  ) ;
};

export default NavBar