import React from 'react';

const NavBar = ({ setCurrentPage }) => {
  const navItems = [
    { name: 'Home', page: 'Home' },
    { name: 'Profile', page: 'Profile' },
    { name: 'Register', page: 'Register' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-start">
        <div className="flex space-x-8 rtl:space-x-reverse"> 
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setCurrentPage(item.page)}
              className="text-gray-800 font-semibold text-lg hover:text-indigo-600 transition duration-300 transform hover:scale-105 focus:outline-none"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;