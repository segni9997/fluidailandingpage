
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdMore } from "react-icons/io";
import { BsClock } from "react-icons/bs";
import Navbar from "./components/navbar"
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { DeviceFrameset } from "react-device-frameset";
import 'react-device-frameset/styles/marvel-devices.min.css'
import MessageList from "./phone/messages";
import Explore from "./phone/explore";
import Calendar from "./phone/calendar";
import Welcome from "./phone/welcome";
// /src/assets/images/swipeimage1.jpg
import dubai from "/src/assets/images/swipeimage1.jpg"
import aub from "/src/assets/images/plane.jpg"
import zuma from "/src/assets/images/hotel.jpg"

import "./App.css"
import CountryAutoComplete from "./components/countries";
import PhoneHeader from "./components/phoneheader";

// datas

const datas = [
  {
    title: "Fluid has Internet access, so you can get up-to-date information from it.",
    message: "Time for Work",
    url: dubai
  },
  {
    title: "You can use Fluid as an assistant to save time - and save your sanity.",
    message: "Time For Family",
    url: aub

  },
  {
    title: "Fluid easily integrates with your friends' calendars",
    message: "Time for Friends",
    url: zuma

  },
];
const phones = [
  {
    heading: " Fluid AI: Simplify, Organize, and Achieve More",
    description: " In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, schedules, meal plans, and bucket lists into one seamless platform. ",
    components: <Welcome />
  },
  {
    heading: " Fluid AI: Simplify, Organize, and Achieve More",
    description: " In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, schedules, meal plans, and bucket lists into one seamless platform. ",
    components: <Calendar />
  }, {
    heading: " Fluid AI: Simplify, Organize, and Achieve More",
    description: " In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, schedules, meal plans, and bucket lists into one seamless platform. ",
    components: <MessageList />
  },
  {
    heading: " Fluid AI: Simplify, Organize, and Achieve More",
    description: " In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, schedules, meal plans, and bucket lists into one seamless platform. ",
    components: <Explore />
  }
]
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  // for swipe section
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? datas.length - 1 : prevIndex - 1
    );
    animateCard("left");
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === datas.length - 1 ? 0 : prevIndex + 1
    );
    animateCard("right");
  };

  const animateCard = (direction: "left" | "right") => {
    // Set initial position for animation
    if (cardRef.current) {
      gsap.set(cardRef.current, { x: direction === "left" ? -200 : 200, opacity: 0 });

      // Animate card into view
      gsap.to(cardRef.current, {
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "power2.out",
      });
    }
  };
  // animations
  const textRef = useRef<HTMLDivElement | null>(null); // Reference for the text and icon
  const contentRef = useRef<HTMLDivElement | null>(null); // Reference for the content section
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the Fluid Ai section
      gsap.fromTo(
        textRef.current,
        { scale: 2, opacity: 1, y: 100 }, // Start values: bigger size
        {
          scale: 0.4, // Scale down to 0.4
          opacity: 1, // Keep visible
          y: 300, // Move down as it shrinks
          scrollTrigger: {
            trigger: textRef.current, // Element to watch for scrolling
            start: "top center", // Start when the top of the element hits the center of the viewport
            end: "bottom top", // End when the bottom of the element hits the top of the viewport
            scrub: true, // Smooth scrubbing
            markers: false, // Add markers for debugging (remove this in production)
            onEnter: () => {
              // Show content section when the animation starts
              gsap.to(contentRef.current, { opacity: 1, scale: 1, y: 0, duration: 1 });
            },
            onLeaveBack: () => {
              // Hide content section when scrolling back up
              gsap.to(contentRef.current, { opacity: 0, scale: 0.8, y: 100, duration: 1 });
            },
          },
          duration: 2,
        }
      );

      // Set initial state for content section to be hidden
      gsap.set(contentRef.current, { opacity: 0, scale: 0.8, y: 100 }); // Hidden by default
    }, []);

    return () => ctx.revert(); // Clean up
  }, []);

  // Calculate card positions
  useEffect(() => {
    // Pop in from bottom (center section)
    gsap.fromTo(
      ".center-section",
      { y: 100, opacity: 0 }, // Initial state (hidden and below)
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".center-section",
          start: "top 90%", // Starts when the top of the element reaches 80% of the viewport
          end: "top ", // Ends when top of the element reaches 30% of the viewport
          toggleActions: "play pause reverse reverse", // Play when scrolling down, reverse when scrolling back up
          markers: false, // Markers for debugging (set to true if you want to see the triggers)
        },
      }
    );

    // Pop in from left
    gsap.fromTo(
      ".left-section",
      { x: -100, opacity: 0 }, // Initial state (hidden and shifted left)
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".left-section",
          start: "top 80%",
          end: "top 10%",
          toggleActions: "restart pause reverse pause",
        },
        markers: true

      }
    );


  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".right-section",
      { x: 100, opacity: 0 }, // Initial state (hidden and shifted left)
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".left-section",
          start: "bottom 30%",
          end: "top 0%",
          toggleActions: "restart pause reverse pause",

        },
        markers: true

      }
    );
  }, [])


  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-black to-orange-700 min-h-screen w-full">
 
         {/* Fluid Ai Section */}
         <div className="h-screen flex items-center justify-center mb-0">
  <div ref={textRef} className="flex flex-row items-center justify-center text-center lg:text-left">
    <svg
      className=" max-w-xs h-auto w-6 lg:w-40 lg:h-40"
      viewBox="0 0 163 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.4789 88.617C50.1532 88.029 59.5658 86.9206 65.6712 80.7309C72.2526 74.0587 73.1579 63.8714 71.6329 54.6244C69.2801 40.358 73.5324 25.1901 84.39 14.1827C102.238 -3.91115 131.174 -3.91117 149.022 14.1827C166.869 32.2765 166.869 61.6125 149.022 79.7063C137.773 91.1101 122.12 95.3266 107.614 92.3558C98.4061 90.47 88.0665 91.1763 81.4661 97.8679C75.7411 103.672 74.7057 112.448 74.545 120.598C74.3906 128.427 71.3669 136.209 65.4739 142.183C53.3708 154.453 33.7477 154.453 21.6446 142.183C9.54151 129.913 9.5415 110.019 21.6446 97.7492C27.1668 92.1508 34.2544 89.1067 41.4789 88.617ZM46.6175 62.8133C36.0093 73.5679 18.81 73.5679 8.20187 62.8133C-2.40632 52.0587 -2.40632 34.6221 8.20187 23.8675C18.8101 13.1129 36.0093 13.1129 46.6175 23.8675C57.2257 34.6221 57.2257 52.0587 46.6175 62.8133ZM123.052 139.85C116.197 146.799 105.083 146.799 98.2288 139.85C91.3741 132.901 91.3741 121.634 98.2288 114.684C105.083 107.735 116.197 107.735 123.052 114.684C129.906 121.634 129.906 132.901 123.052 139.85Z"
        fill="white"
      />
    </svg>

    <h1 className="custom-font text-xl lg:text-7xl font-bold font-serif text-white lg:ml-8 mt-4 lg:mt-0">
      Fluid Ai
    </h1>
  </div>
</div>


        {/* Content Section (hidden until scroll) */}
        <div className="relative w-full h-screen bg-gray-100 bg-inherit">
          {/* Bubble at Top Left */}
          <div className="left-section absolute -top-20 left-36 w-16 h-16 bg-blue-400 rounded-full">
            <div className="rounded-xl h-48 shadow-lg bg-gray-900 text-white relative w-[140px] inline-block">
              {/* Image */}
              <img
                className="w-full h-48 object-cover rounded-xl"
                src="/src/assets/images/clapdubai.png" // Ensure you replace this with the actual image path
                alt="Restaurant"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gray-700 bg-opacity-30 rounded-xl"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-3">
                <div className="flex justify-between items-center">
                  {/* Tag */}
                  <div className="bg-gray-800 bg-opacity-50 rounded-full px-2 py-1 text-sm">
                    Resturant
                  </div>
                  {/* Options button */}
                  <div className="text-white cursor-pointer">
                    <IoMdMore className="text-3xl" />
                  </div>
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-lg text-left font-semibold">clap dubai</h3>
                  <div className="text-[12px] text-left text-gray-200 ">
                    <span>4.4 . $$$. Japanese</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="left-section absolute top-1/3 -left-6 w-44 h-16 text-white  bg-opacity-30 bg-[#2626264D] rounded-xl">

            <div className="flex flex-col p-1 ">
              <h1 className="text-left items-start">To Do</h1>
              <span >Renew Car Insurance</span>

            </div>
          </div>




          {/* center */}
          <div className="  center-section absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl text-white">Unlock Seamless Efficiency</h1>
              <button className="text-black bg-white p-2 w-52 font-semibold h-14 mt-4 rounded-full shadow-2xl shadow-white">
                Join Waitlist
              </button>
            </div>
          </div>


          {/* cards */}
          {/* Bubble at Bottom Left */}
          <div className=" left-section absolute bottom-52 left-72  w-36 h-12 bg-[#2626264D] bg-opacity-30 rounded-3xl ">
            <h1 className=" items-start text-xl p-2 text-center text-white">Cafe nearby</h1>

          </div>
          <div className=" left-section absolute bottom-[200px] left-10  w-60 h-32 bg-[#2626264D] bg-opacity-30 rounded-xl">
            <div className="flex flex-col p-3">
              <div className="flex  justify-end">
                <img src="/src/assets/images/p1.png" alt="person" width={26} height={24} className="border border-white bg-cover rounded-full -ml-3" />
                <img src="/src/assets/images/p2.jpg" alt="person" width={26} height={24} className="border border-white bg-cover rounded-full -ml-3" />
                <img src="/src/assets/images/p3.png" alt="person" width={26} height={24} className="border border-white bg-cover rounded-full -ml-3" />
              </div>
              <span className="text-gray-400">upComing Events </span>
              <h2 className="text-white text-lg">Kite Beach</h2>
              <span className="flex items-center gap-2 text-gray-400"><BsClock /> 10:00- 14:00</span>

            </div>
          </div>
          <div className="right-section absolute bottom-24 right-24  w-72 h-32 bg-[#2626264D] bg-opacity-30 rounded-xl">
            <div className="rounded-xl w-72 h-52 shadow-lg bg-gray-900 text-white relative  inline-block">
              {/* Image */}
              <img
                className="w-full h-full object-cover rounded-xl"
                src="/src/assets/images/clapdubai.png" // Ensure you replace this with the actual image path
                alt="Restaurant"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gray-700 bg-opacity-30 rounded-xl"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-3">


                {/* Info */}
                <div className="absolute bottom-4">
                  <h3 className="text-lg text-left text-gray-300">Reservations</h3>

                  <h3 className="text-lg text-left font-semibold">Resturant Le Bous</h3>
                  <div className="text-[12px] text-left text-gray-200 ">
                    <span className="flex items-center gap-2 text-gray-400"><BsClock /> 4 Oct 20:00</span>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" left-section absolute bottom-0 left-1/3 transform -translate-x-1/2 w-96 h-48 bg-[#2626264D] bg-opacity-30 rounded-xl">
            <div className="flex justify-between  p-3 text-white text-sm mb-1 ">
              <span>Dubai</span>
              <span>Emrates</span>
              <span>Paris</span>

            </div>
            <div className="flex ">
              <div className="flex flex-col justify-center items-center p-3 pl-8  text-xs    text-gray-300">
                <h1 className="text-white text-lg">DXB</h1>
                <span>oct 4</span>
                <span>8:20</span>

              </div>
              <div className="">     <svg className="justify-center items-center" width="196" height="48" viewBox="0 0 196 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M181.789 33.7859C109.454 -5.51262 42.4539 13.5049 12.9996 30.4306" stroke="white" stroke-width="1.0161" stroke-dasharray="6.1 6.1" />
                <path d="M125 13.519C75.9251 4.58828 34.3545 18.1227 12.8857 30.4965" stroke="white" stroke-width="1.0161" />
                <g clip-path="url(#clip0_2_2583)">
                  <path d="M123.29 14.4366L117.991 20.5723L116.362 20.285L119.604 13.7863L115.239 13.0164L113.438 15.3502L112.217 15.1347L113.698 11.4187L113.55 7.41541L114.771 7.63087L115.684 10.4434L120.049 11.2133L119.176 3.98877L120.805 4.27606L123.734 11.8635L128.17 12.6459C128.494 12.703 128.781 12.8934 128.969 13.175C129.156 13.4567 129.228 13.8067 129.169 14.1479C129.11 14.4891 128.925 14.7936 128.654 14.9945C128.384 15.1954 128.05 15.2761 127.726 15.219L123.29 14.4366Z" fill="white" />
                </g>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.14628 43.7085C12.4085 43.7085 15.8637 40.0065 15.8637 35.4398C15.8637 30.8732 12.4085 27.1711 8.14628 27.1711C3.88405 27.1711 0.428833 30.8732 0.428833 35.4398C0.428833 40.0065 3.88405 43.7085 8.14628 43.7085ZM5.28767 37.6317L10.0808 34.9782L9.18145 38.3386L10.0582 38.6079L11.3623 33.7351L6.54038 32.2537L6.30326 33.1396L9.62854 34.1612L4.83541 36.8148L5.28767 37.6317Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M177.401 40.2993C179.597 44.3033 184.607 45.7398 188.591 43.5077C192.575 41.2756 194.025 36.2202 191.829 32.2161C189.633 28.212 184.623 26.7755 180.639 29.0076C176.655 31.2398 175.205 36.2952 177.401 40.2993ZM180.999 34.1763L185.714 37.1226L182.328 37.9182L182.531 38.8126L187.441 37.6589L186.325 32.7395L185.433 32.9493L186.202 36.3418L181.487 33.3955L180.999 34.1763Z" fill="white" />
                <defs>
                  <clipPath id="clip0_2_2583">
                    <rect width="20.9474" height="19.8449" rx="9.92244" transform="matrix(-0.170149 0.985418 -0.984796 -0.173717 132.036 4.01855)" fill="white" />
                  </clipPath>
                </defs>
              </svg></div>
              <div className="flex flex-col justify-center items-center p-3 text-xs      text-gray-300">
                <h1 className="text-white text-lg">CDG</h1>
                <span>oct 4</span>
                <span>13:30</span>

              </div>
            </div>
            <div className="flex  justify-between items-center border-t border-gray-400">
              <div className="flex flex-row  p-4 gap-5  ">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">flight</span>
                  <h2 className="text-white" >EK073</h2 >
                </div><div className="flex flex-col">
                  <span className="text-xs text-gray-400">Class</span>
                  <h2 className="text-white" >Guest</h2 >
                </div><div className="flex flex-col">
                  <span className="text-xs text-gray-400">Aircraft</span>
                  <h2 className="text-white" >A380</h2 >
                </div>

              </div>
              <span className="p-4 text-gray-300">7 hours 10 mins </span>

            </div>

          </div>

          <div className=" right-section absolute top-60 right-14  w-36 h-12 bg-[#2626264D] bg-opacity-30 rounded-3xl ">
            <h1 className=" items-start text-xl p-2 text-center text-white">Book Flight</h1>

          </div>



          <div className=" right-section absolute top-80 right-20  w-36 h-12 bg-[#2626264D] bg-opacity-30 rounded-3xl ">
            <h1 className=" items-start text-xl p-2 text-center text-white">Trip ideas</h1>

          </div>

          <div className="right-section absolute -top-[75px] right-36 text-white w-48 h-16  p-2 bg-[#2626264D] bg-opacity-30 rounded-xl">
            <div className="flex flex-col p-1 ">
              <h1 className="text-left items-start">To Do</h1>
              <span >Renew Car Insurance</span>

            </div>

          </div>

          <div className="right-section absolute top-[100px] right-10  w-60 h-32 bg-[#2626264D] bg-opacity-30 rounded-xl">
            <div className="flex flex-col p-3">
              <div className="flex  justify-end">
                <img src="/src/assets/images/p1.png" alt="person" width={26} height={24} className="border border-white bg-cover rounded-full -ml-3" />
                <img src="/src/assets/images/p2.jpg" alt="person" width={26} height={24} className="border border-white bg-cover rounded-full -ml-3" />
                <img src="/src/assets/images/p3.png" alt="person" width={26} height={24} className="border border-white bg-cover rounded-full -ml-3" />
              </div>
              <span className="text-gray-400">upComing Events </span>
              <h2 className="text-white text-lg">Kite Beach</h2>
              <span className="flex items-center gap-2 text-gray-400"><BsClock /> 10:00- 14:00</span>

            </div>
          </div>


        </div>

        <section className="min-h-screen bg-inherit">
          <div className=" text-white flex flex-col items-center justify-center p-10">
            {/* Features Heading */}
            <div className="text-center">
              <p className="text-sm uppercase tracking-widest">Our Features</p>
              <h1 className="text-3xl lg:text-8xl  justify-center items-center mt-4">
                Fluid AI was born out of a desire to simplify and streamline modern life
              </h1>

            </div>

 <div className="flex flex-col items-center justify-center mt-12 lg:space-y-8">
  {phones.map((items, index) => (
    <div key={index} className="flex flex-col lg:flex-row w-full lg:items-center justify-center lg:space-x-8">
      {/* Left or Right Side Description based on index */}
      {index === 0 || index === 2 ? (
        <div className="lg:w-1/3 flex flex-col justify-between p-2 items-center my-auto lg:items-end text-center lg:text-left">
          <div className="lg:h-96">
            <h2 className="text-xl lg:text-2xl font-semibold text-white">
              {items.heading}
            </h2>
            <p className="mt-4 text-md text-gray-400">{items.description}</p>
          </div>
          {/* Index Number at the Bottom */}
          <span className="text-gray-400 text-md mt-2 self-end">
            {index + 1}/{phones.length}
          </span>
        </div>
      ) : null}

      {/* Centered Phone */}
      <div className="relative mt-8 lg:mt-0 flex items-center justify-center lg:w-auto">
        <div className="">
          <DeviceFrameset device="iPhone X" color="gold" landscape={false}>
             <PhoneHeader/>
            {items.components}
          </DeviceFrameset>
        </div>
      </div>

      {/* Right or Left Side Description based on index */}
      {index !== 0 && index !== 2 ? (
        <div className="lg:w-1/3 flex flex-col justify-center p-2 items-center my-auto lg:items-start text-center lg:text-left">
          <div className="lg:h-96 w-96 ml-14">
            <h2 className="text-xl lg:text-2xl font-semibold text-white">
              {items.heading}
            </h2>
            <p className="mt-4 text-md text-gray-400">{items.description}</p>
          </div>
          {/* Index Number at the Bottom */}
          <span className="text-gray-400 text-md mt-2 ml-16 self-start">
            {index + 1}/{phones.length}
          </span>
        </div>
      ) : null}
    </div>
  ))}
</div>




          </div>
        </section>

        <section
          ref={cardRef}
          style={{
            backgroundImage: `url(${datas[currentIndex].url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
          className="relative flex items-center justify-center"
        >
          {/* Big Card in the Middle */}
          <div

            className="relative bg-white bg-opacity-10 p-8 rounded-lg shadow-lg min-h-96 max-w-lg w-[450px]"
          >
            {/* Top Left Text */}
            <h2 className="text-lg font-normal mb-2 absolute top-4 left-4 text-white">
              {datas[currentIndex].title}
            </h2>

            {/* Bottom Left Text */}
            <p className="text-2xl font-bold absolute bottom-4 left-4 text-white">
              {datas[currentIndex].message}
            </p>

            {/* Left Arrow */}
            <div className="absolute left-[-50px] top-1/2 transform -translate-y-1/2">
              <button
                onClick={handlePrevious}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white bg-opacity-10 text-white transition-all"
              >
                &larr;
              </button>
            </div>

            {/* Right Arrow */}
            <div className="absolute right-[-50px] top-1/2 transform -translate-y-1/2">
              <button
                onClick={handleNext}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white bg-opacity-10 text-white transition-all"
              >
                &rarr;
              </button>
            </div>
          </div>
        </section>

        <section className="flex min-h-screen bg-black p-8 w-full gap-32">
          {/* Left Div */}
          <div className="flex-1 text-white rounded-lg shadow-lg p-6 mr-4" style={{ flex: '4 1 0%' }}>
            <h2 className="text-5xl  mb-4">
              What can curiosity, wonder, and awe do for you?
            </h2>
            <p className="text-gray-400 text-sm">
              Research shows that experiencing curiosity and awe can immensely benefit our mental, physical, and professional health. Here’s a brief overview of what curiosity and awe can do for you.
            </p>
          </div>

          {/* Right Div */}
          <div className="flex-1 text-white rounded-lg shadow-lg p-6" style={{ flex: '6 1 0%' }}>
            <h2 className="text-2xl font-bold mb-4">Right Section</h2>
            <div className="justify-between flex border-b border-white p-2  m-2 ">
              <p className="text-white">
                Does Fluid AI increase wellbeing and meaning in life?
              </p>
              <span className=" text-white text-2xl">+</span>
            </div>
            <div className="justify-between flex border-b border-white p-2  m-2 ">
              <p className="text-white">
                Does Fluid AI increase wellbeing and meaning in life?
              </p>
              <span className=" text-white text-2xl">+</span>
            </div><div className="justify-between flex border-b border-white p-2  m-2 ">
              <p className="text-white">
                Does Fluid AI increase wellbeing and meaning in life?
              </p>
              <span className=" text-white text-2xl">+</span>
            </div><div className="justify-between flex border-b border-white p-2  m-2 ">
              <p className="text-white">
                Does Fluid AI increase wellbeing and meaning in life?
              </p>
              <span className=" text-white text-2xl">+</span>
            </div><div className="justify-between flex border-b border-white p-2  m-2 ">
              <p className="text-white">
                Does Fluid AI increase wellbeing and meaning in life?
              </p>
              <span className=" text-white text-2xl">+</span>
            </div><div className="justify-between flex border-b border-white p-2  m-2 ">
              <p className="text-white">
                Does Fluid AI increase wellbeing and meaning in life?
              </p>
              <span className=" text-white text-2xl">+</span>
            </div><div className="justify-between flex border-b border-white p-2  m-2 ">
              <p className="text-white">
                Does Fluid AI increase wellbeing and meaning in life?
              </p>
              <span className=" text-white text-2xl">+</span>
            </div>
          </div>
        </section>


        {/* section 7 */}
        <section className="bg-[url('/src/assets/images/handWithPhone.jpg')] bg-cover bg-center min-h-screen">
          <div className="w-full max-w-md p-4 bg-transparent bg-opacity-20 rounded-lg ml-8">
            {/* Big Heading */}
            <h1 className="text-5xl mb-4 text-left text-white">
              Join the Fluid AI Waitlist Today!
            </h1>

            {/* Input Fields */}
            <div className="App flex flex-col justify-center items-center space-y-2">
              <label className='relative cursor-pointer'>
                <input
                  type="text"
                  placeholder="Name"
                  className='h-20 w-96 text-xl text-white bg-black border-white border-b-2 rounded-lg border-opacity-50 outline-none placeholder-gray-300 placeholder-opacity-0 transition duration-200'
                />
                <span className='text-xl text-white text-opacity-80 bg-black absolute left-5 top-8 px-1 transition duration-200 input-text'>Name</span>
              </label>

              <label className='relative cursor-pointer'>
                <input
                  type="text"
                  placeholder="Email"
                  className='h-20 w-96 text-xl text-white bg-black border-white border-b-2 rounded-lg border-opacity-50 outline-none placeholder-gray-300 placeholder-opacity-0 transition duration-200'
                />
                <span className='text-xl text-white text-opacity-80 bg-black absolute left-5 top-8 px-1 transition duration-200 input-text'>Email</span>
              </label>
            </div>

            {/* Country Selection */}
            <CountryAutoComplete />
            <button className="text-black bg-white p-2 w-52 font-semibold items-center h-14 mt-4 rounded-full shadow-2xl shadow-white">
              Join Waitlist
            </button>
          </div>
        </section>
        <footer className="bg-black text-white p-8">
          <div className="flex justify-between">
            {/* Left Div */}
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2 flex  items-center justify-start gap-2">
                <svg width="24" height="24" viewBox="0 0 163 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M41.4789 88.617C50.1532 88.029 59.5658 86.9206 65.6712 80.7309C72.2526 74.0587 73.1579 63.8714 71.6329 54.6244C69.2801 40.358 73.5324 25.1901 84.39 14.1827C102.238 -3.91115 131.174 -3.91117 149.022 14.1827C166.869 32.2765 166.869 61.6125 149.022 79.7063C137.773 91.1101 122.12 95.3266 107.614 92.3558C98.4061 90.47 88.0665 91.1763 81.4661 97.8679C75.7411 103.672 74.7057 112.448 74.545 120.598C74.3906 128.427 71.3669 136.209 65.4739 142.183C53.3708 154.453 33.7477 154.453 21.6446 142.183C9.54151 129.913 9.5415 110.019 21.6446 97.7492C27.1668 92.1508 34.2544 89.1067 41.4789 88.617ZM46.6175 62.8133C36.0093 73.5679 18.81 73.5679 8.20187 62.8133C-2.40632 52.0587 -2.40632 34.6221 8.20187 23.8675C18.8101 13.1129 36.0093 13.1129 46.6175 23.8675C57.2257 34.6221 57.2257 52.0587 46.6175 62.8133ZM123.052 139.85C116.197 146.799 105.083 146.799 98.2288 139.85C91.3741 132.901 91.3741 121.634 98.2288 114.684C105.083 107.735 116.197 107.735 123.052 114.684C129.906 121.634 129.906 132.901 123.052 139.85Z" fill="white" />
                </svg>

                <span className="text-3xl ">Fluid Ai</span></h2>
              <p className="text-white">
                2024 Fluid Ai
              </p>
            </div>

            {/* Right Div */}
            <div className="flex-1 flex justify-end gap-10">
              {/* Column 1 */}
              <div className="mr-2"> {/* Reduced margin */}
                <ul className="text-gray-400">
                  <li className="mb-1"><a href="#">Our Features</a></li>
                  <li className="mb-1"><a href="#">Areas</a></li>
                  <li className="mb-1"><a href="#">FAQs</a></li>
                  <li className="mb-1"><a href="#">The Waitlist</a></li>
                  <li className="mb-1"><a href="#">Contact us</a></li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <p className="text-gray-400">Terms of Service</p>
                <p className="text-gray-400">Privacy Policy</p>
              </div>
            </div>
          </div>
        </footer>
</div>

    </>

  );
};

export default App;
