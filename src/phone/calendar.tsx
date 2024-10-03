import { useEffect, useState } from "react";
import {   BsList } from "react-icons/bs";
import { FaCalendar, FaClock, FaPlus } from "react-icons/fa";
import plane from "../assets/images/plane.jpg"
import { RxCopy } from "react-icons/rx";
import Searchplate from "../components/search";
import { CgSortAz } from "react-icons/cg";
// import { FaMessage } from "react-icons/fa6";
// import { MdExplore } from "react-icons/md";
// import { LuHome } from "react-icons/lu";
// import { IoText } from "react-icons/io5";
// import { FiMessageCircle } from "react-icons/fi";

const Calendar = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
      const updateTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
       
        setTime(`${hours}:${minutes}`);
      };
      updateTime();
      const intervalId = setInterval(updateTime, 60000); // Update every minute
      return () => clearInterval(intervalId);
    }, []);
    const currentDate = new Date();
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfMonth = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()];
    const currentDay = currentDate.getDay(); // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
    
    // Calculate the starting date of the week (Sunday of the current week)
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDay); // Set to the previous Sunday
    
  return (
    <>
    <div className="max-h-screen bg-gradient-to-bl from-black via-[#000000] to-[#E48F4C] text-white p-4 flex flex-col overflow-auto " style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
    {/* First Section: Month, Date, Time, and To-Do List */}
    <div className="flex flex-col ">
    <div className="flex flex-row justify-between items-center">
            <div className="flex  gap-3 items-center ">
            <h1 className="text-xl font-light  mb-4 border-b border-white text-white">Calendar</h1>
            <h1 className="text-xl font-light   mb-4 text-gray-500 ">To Do</h1>
            </div>
               <div className="flex flex-row justify-between items-center gap-2">
               <CgSortAz className='w-10 h-10 p-2 border border-white bg-transparent rounded-full font-light'/>
               <FaPlus className='w-10 h-10 p-2 border border-white bg-transparent rounded-full font-light'/>
               </div>
               </div> 
      {/* Month and Date */}
      <div className="flex items-center mb-4 glass-effect p-4 rounded-lg">
        <div className="text-center mr-4 border-r-2 border-white pr-4">
          <h1 className="text-4xl font-bold text-start">{month}</h1>
          <h2 className="text-6xl font-extrabold text-start">
            {dayOfMonth}
            {dayOfMonth % 10 === 1 && dayOfMonth !== 11
              ? "st"
              : dayOfMonth % 10 === 2 && dayOfMonth !== 12
              ? "nd"
              : dayOfMonth % 10 === 3 && dayOfMonth !== 13
              ? "rd"
              : "th"}
          </h2>
        </div>

        {/* Time and To-Do */}
        <div className="flex flex-col items-center justify-start mb-4 p-4">
          <div className="flex flex-col">
            <span className="text-left text-gray-500 text-sm">Time</span>
            <span className="text-2xl ">
              {time} {new Date().getHours() >= 12 ? 'PM' : 'AM'}
            </span>
          </div>
          <div className="flex flex-col mt-4">
            <h3 className="text-xl text-gray-500 mb-2">Next To-Do</h3>
            <span>Appointment</span>
          </div>
        </div>
      </div>
    </div>

    {/* Second Section: Weekdays and Dates */}
    <div className="flex flex-col mt-3 glass-effect bg-white p-3 backdrop-blur-md bg-opacity-20 rounded-lg">
      <div className="flex justify-between">
        {weekdays.map((weekday, index) => {
          const weekDate = new Date(startOfWeek);
          weekDate.setDate(startOfWeek.getDate() + index); // Get the date for each weekday
          const dayNumber = weekDate.getDate();
          const isToday = dayNumber === currentDate.getDate();

          return (
            <div key={index} className="flex flex-col items-center ">
              {/* Weekday */}
              <span className={`text-lg text-gray-500`}>
                {weekday}
              </span>

              {/* Date */}
              <span className={`text-xl text-white ${isToday ? 'bg-white bg-opacity-20 px-3 py-1 rounded-md justify-center text-center' : ''}`}>
                {dayNumber}
                {isToday && (
                  <div className="flex mt-2 justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full -ml-1"></span>
                    <span className="w-2 h-2 bg-white rounded-full -ml-1"></span>
                    <span className="w-2 h-2 bg-slate-500 rounded-full -ml-1"></span>
                    <span className="w-2 h-2 bg-sky-500 rounded-full -ml-1"></span>
                  </div>
                )}
              </span>
              
              {/* Circles beneath the date */}
              {isToday && <span className="w-full mt-2 h-2 bg-white opacity-20 rounded-xl"></span>}         
            </div>
          );
        })}
      </div>
    </div>

    {/* section event and toggle */}

    <div className="w-full justify-between bg-transparent flex flex-row mt-4 ">
        <div className="flex flex-col">
            <h2 className="text-white text-xl">Your Events</h2>
            <span className="text-gray-300 text-left">4 events</span>
        </div>
        <div className="rounded-full w-[110px] justify-between items-center p-3 flex-row flex  text-3xl border border-gray-500">
            <span  className=" bg-white bg-opacity-30 border border-white rounded-full p-2">
        <RxCopy className="rotate-180 text-xl" />

            </span>
        <BsList/>
        </div>
    </div>

    {/* section search */}
    <Searchplate/>

    <div className="mt-4 bg-white bg-opacity-20 rounded-xl flex flex-col p-2">
    <div className="justify-between items-center p-1 flex flex-row">
      <h2 className="text-gray-300">personal</h2>
      <span className="p-3 min-w-20 text-center bg-white bg-opacity-30 text-white rounded-3xl">High</span>
    </div>
     <h1 className="text-white text-2xl  text-start p-1">Flight to Rome</h1>
     <div className="flex flex-row justify-between items-center p-1">
      <div className="flex flex-row items-center gap-2">
        <FaClock/> <span className="text-gray-300">10:00AM - 11:00AM</span>
      </div>
      <img src={plane} className="rounded-full h-10 w-10 " alt="img"/>
    </div>
    </div>
    <div className="mt-4 bg-white bg-opacity-20 rounded-xl flex flex-col p-2">
    <div className="justify-between items-center p-1 flex flex-row">
      <h2 className="text-gray-300">personal</h2>
      <span className="p-3 min-w-20 text-center bg-white bg-opacity-30 text-white rounded-3xl">High</span>
    </div>
     <h1 className="text-white text-2xl  text-start p-1">Flight to Rome</h1>
     <div className="flex flex-row justify-between items-center p-1">
      <div className="flex flex-row items-center gap-2">
        <FaClock/> <span className="text-gray-300">10:00AM - 11:00AM</span>
      </div>
      <img src={plane} className="rounded-full h-10 w-10 " alt="img"/>
    </div>
    </div>

   
  </div>
  <div className="p-3 flex flex-row justify-evenly items-baseline gap-4 text-3xl bg-gradient-to-t to-black from-[#c46e2c] h-full">
  <svg className="text-gray-500" width="30" height="31" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.3197 16.3601C16.3197 16.8515 15.9214 17.2498 15.43 17.2498H1.19499C0.70363 17.2498 0.305298 16.8515 0.305298 16.3601V7.00867C0.305298 6.73412 0.432052 6.47495 0.648772 6.3064L7.76633 0.770539C8.0876 0.52066 8.53743 0.52066 8.85869 0.770539L15.9762 6.3064C16.1929 6.47495 16.3197 6.73412 16.3197 7.00867V16.3601ZM7.42282 10.1323V15.4705H9.2022V10.1323H7.42282Z" fill="gray" />
  </svg>

  <FaCalendar className="text-white" />

  {/* Background Image with Blur */}
  <div className="relative w-16 h-16 flex items-center justify-center">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center backdrop-blur-2xl rounded-full"
      style={{ backgroundImage: `url(${plane})` }}
    ></div>
    {/* SVG Icon */}
    <svg
      className="relative z-10 fill-white"
      width="24"
      height="24"
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
  </div>

  <svg width="30" height="30" className="text-gray-500" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.05893 0.235413H11.6177C15.5486 0.235413 18.7352 3.42203 18.7352 7.35294C18.7352 11.2839 15.5486 14.4705 11.6177 14.4705V17.5844C7.16924 15.805 0.941406 13.1359 0.941406 7.35294C0.941406 3.42203 4.12803 0.235413 8.05893 0.235413Z" fill="gray" />
  </svg>

  <svg width="30" className="fill-gray-500"  height="30" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.88881 0.345718C13.3088 0.345718 16.896 3.93295 16.896 8.35293C16.896 12.7729 13.3088 16.3601 8.88881 16.3601C4.46882 16.3601 0.881592 12.7729 0.881592 8.35293C0.881592 3.93295 4.46882 0.345718 8.88881 0.345718ZM16.4381 14.644L18.9545 17.1604L17.6963 18.4186L15.1799 15.9022L16.4381 14.644Z" fill="gray" />
  </svg>
</div>


    </>
  
  );
};

export default Calendar;
