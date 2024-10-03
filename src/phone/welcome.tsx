import { FaArrowLeft, FaClock, FaMicrophone } from "react-icons/fa";
import vide from "/src/assets/videos/video1.mp4"
import { ImAttachment } from "react-icons/im";

const Welcome = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-black">

            {/* Phone Frame */}
            <div className="relative w-full h-screen min-h-[812px]  rounded-[2rem] overflow-hidden shadow-lg">
                <div className="flex flex-row w-full justify-between items-center p-3">
                    <FaArrowLeft />
                    <span>Speaking to Flui Ai</span>
                    <FaClock />
                </div>

                {/* Main Text Content */}
                <div className="absolute inset-0 flex flex-col justify-center gap-y-32 items-center text-white px-4 ">
                    <p className="  text-white text-center text-3xl ">
                        Hi! Can you find me top rated restaurants with a <br />
                        <span className="text-gray-400"> nice view</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-8">Go ahead, I'm listening</p>
                </div>

                {/* Bottom UI Buttons */}
                <div className="absolute  bottom-0  left-0 right-0 flex justify-center items-center ">
                    {/* Video Container */}
                    <div className="relative w-screen mb-8">
                        {/* Video Section */}
                        <video
                            className="w-full max-h-52 h-auto bg-transparent bg-cover" // Full width with reduced height
                            autoPlay
                            autoFocus
                            loop
                            src={vide}
                        />

                        {/* Buttons Overlapping the Video */}
                        <div className="absolute inset-0 flex justify-between items-center px-8">
                            {/* Left Button - Link Icon */}
                            <button className="bg-gray-600 bg-opacity-20 rounded-full p-3 z-10">
                                <ImAttachment />
                            </button>

                            {/* Center Button - Microphone Icon */}
                            <button className="bg-gray-700 opacity-80 rounded-full p-5 z-10 flex justify-center items-center">
                                <div className="w-20 h-20 bg-gray-500 rounded-full flex justify-center items-center text-white">
                                    <FaMicrophone className="text-3xl text-white" />
                                </div>
                            </button>


                            {/* Right Button - Keyboard Icon */}
                            <button className="bg-white bg-opacity-20 rounded-full p-3 z-10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 10h18M3 14h18M5 6h.01M5 18h.01M9 18h.01M9 6h.01M14 6h.01M14 18h.01M18 6h.01M18 18h.01"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>





            </div>
        </div>
    );
};

export default Welcome;
