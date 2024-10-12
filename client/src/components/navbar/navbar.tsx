import React, { useState,useEffect } from "react";

const NavBar = () => {
  const [activePage, setActivePage] = useState('Home'); // Tracks active page
  const [navbarBg, setNavbarBg] = useState(false); 

  
  // Function to handle page change
  const handlePageChange = (page: React.SetStateAction<string>) => {
    setActivePage(page);
    console.log(page,activePage);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 75) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
<nav
      className={`flex z-50 items-center justify-between p-4 sm:p-9 fixed top-0 right-0 w-full  transition-transform  ease-out duration-700 
        ${ navbarBg ? 'bg-[#161616] translate-y-0 ' : 'bg-transparent translate-y-4 ' }`}>
        <div className="text-zinc-400 opacity-100 font-bold text-xl ml-8 sm:text-1xl">
        Aravinth
      </div>
      {/* Desktop Menu */}
      <ul className="justify-end hidden md:flex space-x-4 mr-8 sm:space-x-8 bg-transparent ">
        {['Home', 'Resume', 'Works', 'Contacts'].map(page => (
          <li key={page}>
            <a
             href={`${page.toLowerCase()}`}
             className={`font-bold ease-in-out duration-150 hover:text-gray-100   ${
                activePage === page ? 'text-teal-500 ' : 'text-gray-300 opacity-70 '
              }`}
              onClick={() => handlePageChange(page)}
            >
             <p className=" ease-out duration-75 transition-transform "> {page}</p>
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <div className="md:hidden flex flex-col cursor-pointer" onClick={toggleMenu}>
        <span className={`block w-7 sm:w-8 h-1 bg-white my-1 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-7 sm:w-8 h-1 bg-white opacity-50 my-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 sm:w-8 h-1 bg-white my-1 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden fixed inset-0 bg-white flex flex-col items-center justify-center space-y-4 sm:space-y-8 z-50">
          {['Home', 'About', 'Service', 'Team', 'Contact'].map(page => (
            <li key={page}>
              <a
                href="#"
                className={`font-bold text-xl sm:text-2xl transition-colors duration-300 ${
                  activePage === page ? 'text-black' : 'text-black opacity-70'
                }`}
                onClick={() => {
                  handlePageChange(page);
                  toggleMenu();
                }}
              >
                {page}
              </a>
            </li>
          ))}

          <div className="md:hidden flex flex-col cursor-pointer" onClick={toggleMenu}>
            <span className={`block w-8 sm:w-10 md:w-10 h-1 bg-slate-800 my-1 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2 translate-x-0' : ''}`}></span>
            <span className={`block w-6 sm:w-10 md:w-10 h-1 bg-slate-500 my-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 sm:w-10 md:w-10 h-1 bg-slate-800 my-1 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-4 translate-x-0' : ''}`}></span>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
