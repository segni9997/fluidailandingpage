import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side */}
        <div className="hidden md:flex space-x-8 ">
          <a href="#" className="text-white hover:text-gray-300">
            Our Features
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Areas
          </a>
        </div>

        {/* Right side */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-gray-300">
            FAQs
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            The Waitlist
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4 mt-4">
            <a href="#" className="text-white hover:text-gray-300">
              Our Features
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Areas
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              FAQs
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              The Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
