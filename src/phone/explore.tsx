import { FaCalendar } from 'react-icons/fa';
import plane from "../assets/images/plane.jpg"
import { CgSortAz } from 'react-icons/cg';
import Searchplate from '../components/search';
import dubai from "../assets/images/Dub.jpg"
import blu from "../assets/images/Blu.png"
import aub from "../assets/images/hotel.jpg"
import  zuma from "../assets/images/zuma.png"

import { IoMdMore } from 'react-icons/io';
import { MdOutlineLocationOn } from 'react-icons/md';
const recommendations = [
    {
        name: "CE LA VI",
        type: "Restaurant",
        rating: "5.0 · $$$$ · Asian",
        imageUrl: dubai, 
    },
    {
        name: "BLU Dubai",
        type: "Night Club",
        rating: "4.8",
        imageUrl: blu, 
    },
    {
        name: "AUB",
        type: "Restaurant",
        rating: "4.5",
        imageUrl: aub ,
    },
];

const recentlyViewed = [
    {
        name: "Zuma",
        type: "Restaurant",
        rating: "4.1",
        priceRange: "$$$",
        location: "DIFC Gate Village 2",
        imageUrl: zuma
    },
    {
        name: "Ameli",
        type: "Restaurant",
        rating: "4.0",
        priceRange: "$$",
        location: "DIFC",
        imageUrl: dubai
    },
    {
        name: "Zuma",
        type: "Restaurant",
        rating: "4.1",
        priceRange: "$$$",
        location: "DIFC Gate Village 2",
        imageUrl: zuma
    },
    {
        name: "Ameli",
        type: "Restaurant",
        rating: "4.0",
        priceRange: "$$",
        location: "DIFC",
        imageUrl: dubai
    },
    {
        name: "Zuma",
        type: "Restaurant",
        rating: "4.1",
        priceRange: "$$$",
        location: "DIFC Gate Village 2",
        imageUrl: zuma
    },
    {
        name: "Ameli",
        type: "Restaurant",
        rating: "4.0",
        priceRange: "$$",
        location: "DIFC",
        imageUrl: dubai
    },
];

const Explore = () => {
    return (
        <>


            <div className="flex flex-col h-screen bg-black text-white p-4">
                {/* Header */}
               <div className="flex flex-row justify-between items-center">
                 <h1 className="text-3xl font-semibold mb-4">Explore</h1>
                 <CgSortAz className='w-10 h-10 p-2 border border-white bg-transparent rounded-full'/>
               </div>

                {/* Search Bar */}
                <Searchplate/>

                {/* Categories */}
                <div className="flex flex-row mb- space-x-2 mt-4  ">
                    <button className="p-2 text-[12px] text-white border-b-4 border-white">All</button>
                    <button className="p-2 text-[12px] text-gray-400">Restaurants</button>
                    <button className="p-2 text-[12px] text-gray-400">Night Clubs</button>
                    <button className="p-2 text-[12px] text-gray-400">Hotels</button>
                    <button className="p-2 text-[12px] text-gray-400">Concerts</button>
                </div>
                <hr className='text-gray-500' />

                {/* Recommended Section */}
                <h2 className="text-xl font-semibold mb-2 text-left mt-4 ">Recommended</h2>
                {/* <div className="flex space-x-6 mb-4 min-h-min  w-[500px] overflow-auto  " style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}> */}
                <div className="flex space-x-6 mb-4 min-h-min min-w-min overflow-x-scroll scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
  {recommendations.map((items, index) => (
    <div key={index} className="rounded-xl h-48 shadow-lg bg-gray-900 text-white relative w-[140px] inline-block">
      {/* Image */}
      <img
        className="w-full h-48 object-cover rounded-xl"
        src={items.imageUrl} // Ensure you replace this with the actual image path
        alt="Restaurant"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-700 bg-opacity-30 rounded-xl"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-3">
        <div className="flex justify-between items-center">
          {/* Tag */}
          <div className="bg-gray-800 bg-opacity-50 rounded-full px-2 py-1 text-sm">
            {items.type}
          </div>
          {/* Options button */}
          <div className="text-white cursor-pointer">
            <IoMdMore className="text-3xl" />
          </div>
        </div>
        
        {/* Info */}
        <div>
          <h3 className="text-lg text-left font-semibold">{items.name}</h3>
          <div className="text-sm text-left text-gray-400 ">
            <span>{items.rating}</span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


                {/* Recently Viewed Section */}
                <h2 className="text-xl text-left mt-2  font-semibold mb-2 ">Recently Viewed</h2>
                <div className="flex flex-col h-52 overflow-auto    " style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
  {recentlyViewed.map((item, index) => (
    <div key={index} className="flex justify-between p-1 bg-transparent bg-opacity-30 rounded-lg mb-2">
      {/* Image */}
      <div className="flex items-start space-x-4 h-full">
        <img
          src={item.imageUrl} // Ensure this points to the correct image URL
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg"
        />

        {/* Item Details */}
        <div>
          <h3 className="text-lg text-white text-left font-semibold">{item.name}</h3>
          <p className="text-gray-400 text-left">{item.type} - {item.priceRange}</p>
          <p className="text-gray-500 text-left flex items-center gap-1"> <MdOutlineLocationOn/> {item.location}</p>
        </div>
      </div>
 
    </div>
  ))}
</div>

            </div>

            <div className="p-3 flex flex-row justify-evenly items-baseline gap-4 text-3xl bg-gradient-to-t to-black from-[#c46e2c] h-full">
  <svg className="text-gray-500" width="30" height="31" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.3197 16.3601C16.3197 16.8515 15.9214 17.2498 15.43 17.2498H1.19499C0.70363 17.2498 0.305298 16.8515 0.305298 16.3601V7.00867C0.305298 6.73412 0.432052 6.47495 0.648772 6.3064L7.76633 0.770539C8.0876 0.52066 8.53743 0.52066 8.85869 0.770539L15.9762 6.3064C16.1929 6.47495 16.3197 6.73412 16.3197 7.00867V16.3601ZM7.42282 10.1323V15.4705H9.2022V10.1323H7.42282Z" fill="gray" />
  </svg>

  <FaCalendar className="text-gray-500" />

  {/* Background Image with Blur */}
  <div className="relative w-16 h-16 flex items-center justify-center">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center backdrop-blur-2xl rounded-full"
      style={{ backgroundImage: `url(${plane})` }}
    ></div>
    {/* SVG Icon */}
    <svg
      className="relative z-10 fill-gray-500"
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

  <svg width="30" height="30" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.88881 0.345718C13.3088 0.345718 16.896 3.93295 16.896 8.35293C16.896 12.7729 13.3088 16.3601 8.88881 16.3601C4.46882 16.3601 0.881592 12.7729 0.881592 8.35293C0.881592 3.93295 4.46882 0.345718 8.88881 0.345718ZM16.4381 14.644L18.9545 17.1604L17.6963 18.4186L15.1799 15.9022L16.4381 14.644Z" fill="white" />
  </svg>
</div>

        </>
    );
};

export default Explore;
