import React, { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import SideNavbar from "./Components/sideNavabar.jsx";
import man from "./Images/manImag.png";
import "./App.css";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";



function App() {
  let[menu, setMenu]= useState(false)

  let showMenu = ()=>{
    setMenu(!menu)
  }


  return (
    <div className="bg-zinc-800 w-full h-screen text-white">

      <Navbar />
      <SideNavbar onclick={showMenu} />
     

              <div className="bg-img w-full h-[60%] absolute z-0 sm:h-[60%] lg:h-[80%]">
                <div className="bg-zinc-700 opacity-70 w-full h-[100%]"></div> 
              </div>

              <div className="px-5 h-[20%] pt-[130px] sticky z-10 lg:h-[60%]">
                <div className="h-[60%] flex flex-col justify-center items-start sm:items-center gap-2">
                  <h1 className="text-[35px] sm:text-6xl lg:text-9xl">TRAIN YOUR BODY</h1>
                  <div className="sm:flex justify-start">
                    <p className="w-[60%] sm:w-full text-xl lg:text-3xl">
                      The body achieves what the mind believes.
                    </p>
                    <button className="bg-orange-700 px-5 py-1 rounded-sm hover:bg-orange-800 sm:w-32 lg:text-xl font-medium">
                      Join Us
                    </button>
                  </div>
                </div>
              </div>
    
      <div className="w-full pt-[185px] bg-zinc-800 text-center sm:pt-52 lg:pt-40">
          <h1 className="text-4xl">Trainer</h1>
          
          <div className="flex pt-10 justify-center items-center gap-5 overflow-hidden">
            <div className="w-10 h-10 bg-zinc-700 rounded-sm flex justify-center items-center absolute left-1 hover:bg-slate-500 lg:hidden"><AiOutlineLeft className="text-4xl" /></div>


            <div className="flex gap-5">

              <div className="card-01 w-52 h-64 bg-zinc-600 rounded-sm flex flex-col justify-center items-center  ">
                <img src={man} alt="Trainer" width={180} />
                <div className="traniner-detail">
                  <h1 className="text-2xl font-medium">Deepak Saini</h1>
                  <p>Trainer Description</p>
                </div>
              </div>
              <div className="card-02 w-52 h-64 bg-zinc-600 rounded-sm flex flex-col justify-center items-center  ">
                <img src={man} alt="Trainer" width={180} />
                <div className="traniner-detail">
                  <h1 className="text-2xl font-medium">Deepak Saini</h1>
                  <p>Trainer Description</p>
                </div>
              </div>
              <div className="card-03 w-52 h-64 bg-zinc-600 rounded-sm flex flex-col justify-center items-center  ">
                <img src={man} alt="Trainer" width={180} />
                <div className="traniner-detail">
                  <h1 className="text-2xl font-medium">Deepak Saini</h1>
                  <p>Trainer Description</p>
                </div>
              </div>
              <div className="card-03 w-52 h-64 bg-zinc-600 rounded-sm flex flex-col justify-center items-center  ">
                <img src={man} alt="Trainer" width={180} />
                <div className="traniner-detail">
                  <h1 className="text-2xl font-medium">Deepak Saini</h1>
                  <p>Trainer Description</p>
                </div>
              </div>
              <div className="card-03 w-52 h-64 bg-zinc-600 rounded-sm flex flex-col justify-center items-center  ">
                <img src={man} alt="Trainer" width={180} />
                <div className="traniner-detail">
                  <h1 className="text-2xl font-medium">Deepak Saini</h1>
                  <p>Trainer Description</p>
                </div>
              </div>
               
              
               
            </div>
            <div className="w-10 h-10 bg-zinc-700 rounded-sm flex justify-center items-center absolute right-1 hover:bg-slate-500 lg:hidden"><AiOutlineRight className="text-4xl"/></div>
          </div>

         
      </div>
    
    
    
    
    
    
    
    <div className="w-full  bg-zinc-800 p-5 ">
        <div className="text-center h-60">
          <h1 className="text-2xl">Why to join us?</h1>
          <p className="text-start py-3">"I'm drawn to this job because of the opportunity for growth and advancement. I'm eager to learn new skills and take on new challenges, and I see this role as a perfect fit for my career goals." of the opportunity for growth and advancement. I'm eager to learn new skills and take on new challenges, and I see this role as a pe .</p>
        </div>
        <div className="text-center">
          <h1 className="text-3xl py-5">Pricing</h1>
          <div className="Pricing flex flex-wrap justify-center items-center gap-4">
              <div className="bg-zinc-600 w-[210px] pb-4 rounded">
                <div className="text-2xl">Basic Plan</div>
                <div className="flex flex-col gap-2 justify-start items-start px-4 py-4"> 
                  <div className="flex gap-2"><RiCheckboxCircleFill className="text-2xl"/>No Personal Trainer</div>
                  <div className="flex gap-2"><RiCheckboxCircleFill className="text-2xl"/>No Extra Class</div>
                  <div className="flex gap-2"><RiCheckboxCircleFill className="text-2xl"/>No Discount</div>
                  <div className="flex gap-2"><RiCheckboxCircleFill className="text-2xl"/>Hard Work</div>
                  <div className="flex gap-2"><RiCheckboxCircleFill className="text-2xl"/>Only 1 Hour</div>
                </div>
                <button className="bg-orange-500 px-8 py-2 rounded cursor-pointer hover:bg-orange-600">Buy Now</button>
              </div>

              <div className="bg-zinc-600 w-[210px] pb-4 rounded">
                <div className="text-2xl">Standard Plan</div>
                <div className="flex flex-col gap-2 justify-start items-start px-4 py-4"> 
                  <div className="flex gap-2"><RiCheckboxCircleFill className="text-2xl"/>No Personal Trainer</div>
                  <div className="flex gap-2"><RiCheckboxCircleFill className="text-2xl"/>Extra Class</div>
                  <div className="flex gap-2"><RiCheckboxCircleFill className="text-2xl"/>20% Discount</div>
                  <div className="flex gap-2"><RiCheckboxCircleFill className="text-2xl"/>Hard Work</div>
                  <div className="flex gap-2"><RiCheckboxCircleFill className="text-2xl"/>Only 2 Hour</div>
                </div>
                <button className="bg-orange-500 px-8 py-2 rounded cursor-pointer hover:bg-orange-600">Buy Now</button>
              </div>
              <div className="bg-zinc-600 w-[210px] pb-4 rounded">
                <div className="text-2xl">Premium Plan</div>
                <div className="flex flex-col gap-2 justify-start items-start px-4 py-4"> 
                  <div className="flex gap-2"><RiCheckboxCircleFill className="text-2xl"/>Personal Trainer</div>
                  <div className="flex gap-2"><RiCheckboxCircleFill className="text-2xl"/>Extra Class</div>
                  <div className="flex gap-2"><RiCheckboxCircleFill className="text-2xl"/>50% Discount</div>
                  <div className="flex gap-2"><RiCheckboxCircleFill className="text-2xl"/>Hard Work</div>
                  <div className="flex gap-2"><RiCheckboxCircleFill className="text-2xl"/>Unlimited Hour</div>
                </div>
                <button className="bg-orange-500 px-8 py-2 rounded cursor-pointer hover:bg-orange-600">Buy Now</button>
              </div>
          </div>
        </div>
    </div>
    
    <div className="footer w-full bg-zinc-800 py-0 ">
      <div className="w-full px-5 py-2 bg-zinc-700 flex justify-between items-center sm:hidden">
        <div>Social Media</div>
        <div className="flex justify-end items-center gap-4 cursor-pointer">
        <FaFacebookSquare className="text-3xl" />
        <SiInstagram className="text-3xl" />
        <IoLogoYoutube className="text-3xl" />
        </div>
      </div>
      <div className="w-full px-5 py-2 bg-zinc-800 flex justify-center gap-10">
        <div className="quic-Acceess hidden lg:flex w-[30%]">
          <div className="w-full">
            <div className="text-center text-2xl py-4">Queic Access</div>
            <ul className='w-[100%] flex flex-col justify-start items-start gap-2'>
              <li className="w-[100%]"><a className='block w-[100%] px-4 py-2 rounded-sm transition duration-200 ease-in-out hover:bg-zinc-600' href="#">Home</a></li>
              <li className="w-[100%]"><a className='block w-[100%] px-4 py-2 rounded-sm transition duration-200 ease-in-out hover:bg-zinc-600' href="#">Galary</a></li>
              <li className="w-[100%]"><a className='block w-[100%] px-4 py-2 rounded-sm transition duration-200 ease-in-out hover:bg-zinc-600' href="#">Price</a></li>
              <li className="w-[100%]"><a className='block w-[100%] px-4 py-2 rounded-sm transition duration-200 ease-in-out hover:bg-zinc-600' href="#">Contact us</a></li>
              <li className="w-[100%]"><a className='block w-[100%] px-4 py-2 rounded-sm transition duration-200 ease-in-out hover:bg-zinc-600' href="#">About us</a></li>
            </ul>
          </div>

        </div>
        <div className="Location w-[300px] h-[300px] bg-zinc-600 text-2xl text-center">
            Google Map Location
        </div>
        <div className="Social-Media flex flex-col justify-start items-center gap-2">
            <div className="text-xl">Social Media</div>
              <div className="flex flex-col justify-start items-start gap-4 cursor-pointer">
                <div className="flex justify-start items-center gap-2"><FaFacebookSquare className="text-3xl hover:text-zinc-700" /> Facebook</div>
                <div className="flex justify-start items-center gap-2"><SiInstagram className="text-3xl hover:text-zinc-700" /> Instagram</div>
                <div className="flex justify-start items-center gap-2"><IoLogoYoutube className="text-3xl hover:text-zinc-700" /> Youtube</div>
              </div>
        </div>
      </div>

    </div>
     
    </div>
     

  );
}

export default App;
