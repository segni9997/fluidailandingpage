import { FaCalendar, FaFacebook, FaPlus} from 'react-icons/fa';
import plane from "../assets/images/plane.jpg"
import Searchplate from '../components/search';
import { MdSettings } from 'react-icons/md';
import dubai from "../assets/images/Dub.jpg"
import blu from "../assets/images/Blu.png"
import aub from "../assets/images/hotel.jpg"
import  zuma from "../assets/images/zuma.png"
import ProfileWithFacebookIcon from '../components/imageprofiles';
import { FaInstagram, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

const messages = [
  {
    name: "Alex Linderson",
    message: "How are you today?",
    time: "2 min ago",
    multiple: false,
    singleimage: dubai,
    site:<FaFacebook className='text-blue-500'/>
  },
  {
    name: "Trip to Rome",
    message: "Don't forget to attend the meeting!",
    time: "12 min ago",
    multiple: true,
    multipleImages: [
      blu,
      zuma,
      aub,
      blu
    ],
    site: <FaWhatsapp className='text-green-700'/>
  },
  {
    name: "Sarah A.",
    message: "Hey! Can you join the meeting?",
    time: "20 min ago",
    multiple: false,
    singleimage:aub,
    site:<FaFacebook className='text-blue-500'/>
  },
  {
    name: "Laith",
    message: "How are you today?",
    time: "1 hour ago",
    multiple: false,
    singleimage: dubai,
    site:<FaInstagram className='text-pink-800'/>
  },
  {
    name: "Sabila Sayma",
    message: "Have a good day!",
    time: "1 hour ago",
    multiple: false,
    singleimage: blu,
    site:<FaFacebook className='text-blue-500'/>

  },
  {
    name: "Zaheer S.",
    message: "Angel Dayna",
    time: "1 hour ago",
    multiple: false,
    singleimage: zuma,
    site:<FaXTwitter className='text-black'/>
  },
  {
    name: "Sabila Sayma",
    message: "How are you?",
    time: "2 hours ago",
    multiple: false,
    singleimage: dubai,
    site:<FaFacebook className='text-blue-500'/>

  },
];

const MessageList = () => {

  return (
    <>
   
    <div className="flex flex-col h-screen bg-gradient-to-bl from-black via-[#000000] to-[#E48F4C] p-2" >
      {/* Header */}
      <div className="flex flex-row justify-between items-center ">
            <div className="flex  gap-3 items-center ">
            <h1 className="text-3xl font-light  mb-4 ">Messages</h1>
            </div>
               <div className="flex flex-row justify-between items-center gap-2">
               <MdSettings className='w-9 h-9 p-2 border border-white bg-transparent rounded-full font-light'/>
               <FaPlus className='w-9 h-9 p-2 border border-white bg-transparent rounded-full font-light'/>
               </div>
               </div>
      {/* Search Bar */}
   <Searchplate />

      {/* Segmented Control */}
      <div className="flex flex-row gap-5 ">
        <button className=" p-1 space-x-3  mr-2 text-white border-b h-full border-white" >All</button>
        <button className=" p-1 space-x-3  mr-2">Unread</button>
        <button className=" p-1 space-x-3 ">Groups</button>
        <button className=" p-1 space-x-3 ">facebook</button>
        <button className=" p-1 space-x-3 ">whatsup</button>

      </div>
      <hr className='mb-2 w-screen'/>

      {/* Messages List */}
       <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {messages.map((msg, index) => (
      <>
        <div
          key={index}
          className="flex justify-between items-center p-4 bg-transparent  rounded-lg mb-2 hover:bg-gray-900 transition"
        >
          {msg.multiple &&
          <ProfileWithFacebookIcon  multipleImages={msg.multipleImages} sites={msg.site} />
        }
          <ProfileWithFacebookIcon profileImageUrl={msg.singleimage}  sites={msg.site}  />
          <div>
            <h2 className="text-lg font-semibold">{msg.name}</h2>
            <p className="text-gray-400">{msg.message}</p>
          </div>
          <span className="text-gray-500 text-sm">{msg.time}</span>
          
        </div>
        <hr className='text-gray-500' />
      </>
      ))}
    </div>
    </div>
    <div className="p-3 flex flex-row justify-evenly items-baseline gap-4 text-3xl bg-gradient-to-t to-black from-[#c46e2c] h-full">
  <svg className="" width="30" height="31" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3197 16.3601C16.3197 16.8515 15.9214 17.2498 15.43 17.2498H1.19499C0.70363 17.2498 0.305298 16.8515 0.305298 16.3601V7.00867C0.305298 6.73412 0.432052 6.47495 0.648772 6.3064L7.76633 0.770539C8.0876 0.52066 8.53743 0.52066 8.85869 0.770539L15.9762 6.3064C16.1929 6.47495 16.3197 6.73412 16.3197 7.00867V16.3601ZM7.42282 10.1323V15.4705H9.2022V10.1323H7.42282Z" fill="white"/>
</svg>

  <FaCalendar />

  {/* Background Image with Blur */}
  <div className="relative w-16 h-16 flex items-center justify-center ">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center backdrop-blur-2xl rounded-full  "
      style={{ backgroundImage: `url(${plane})` }}
    ></div>
    {/* SVG Icon */}
    <svg
      className="relative z-10"
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
  <svg width="30" height="30" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.05893 0.235413H11.6177C15.5486 0.235413 18.7352 3.42203 18.7352 7.35294C18.7352 11.2839 15.5486 14.4705 11.6177 14.4705V17.5844C7.16924 15.805 0.941406 13.1359 0.941406 7.35294C0.941406 3.42203 4.12803 0.235413 8.05893 0.235413Z" fill="white"/>
</svg>

<svg width="30" height="30" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.88881 0.345718C13.3088 0.345718 16.896 3.93295 16.896 8.35293C16.896 12.7729 13.3088 16.3601 8.88881 16.3601C4.46882 16.3601 0.881592 12.7729 0.881592 8.35293C0.881592 3.93295 4.46882 0.345718 8.88881 0.345718ZM16.4381 14.644L18.9545 17.1604L17.6963 18.4186L15.1799 15.9022L16.4381 14.644Z" fill="white"/>
</svg>

</div>
    </>
  ); 
};

export default MessageList;
