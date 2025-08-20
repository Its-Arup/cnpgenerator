import { useState } from "react";
import { Link } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "/assets/logo.png"; // Assuming you have a logo image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white h-[4.625rem] fixed top-0 left-0 right-0 z-50 ">
      <div className="max-w-[1000px] h-[4.625rem] mx-auto flex items-center justify-between  ">
        {/* Logo */}
        <div className="mb-2">
          <img src={logo} alt="Logo"  />
        </div>
        <div className="hidden md:flex gap-8 items-center p-4 font-medium justify-center">
          <div className="text-[0.875rem] text-navbar">
            <Link to="/" className="hover:text-hover transition-colors">
              GENERATOR CNP
            </Link>
          </div>
          <div className="text-[0.875rem] text-navbar">
            <Link to="/" className="hover:text-hover transition-colors">
              GENERARE CNP BULK
            </Link>
          </div>
          <div className="text-[0.875rem] text-navbar">
            <Link
              to="/verificare-cnp"
              className="hover:text-hover transition-colors"
            >
              VALIDARE CNP
            </Link>
          </div>
          <div className="text-[0.875rem] text-navbar">
            <Link to="/" className="hover:text-hover transition-colors">
              VALIDARE CNP BULK
            </Link>
          </div>
          <div className="text-[0.875rem] text-navbar">
            <Link to="/" className="hover:text-hover transition-colors">
              CONTACT
            </Link>
          </div>
        </div>

        <div className="md:hidden flex items-center justify-center p-4">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="focus:outline-none"
          >
            <RxHamburgerMenu size={"2rem"} />
          </button>
          {menuOpen && (
            <div className="absolute top-[4.525rem] right-0 bg-white shadow-lg p-6 w-full flex flex-col gap-6">
              <div className="text-[0.875rem] text-black">
                <Link
                  to="/"
                  className="hover:text-hover transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  GENERATOR CNP
                </Link>
              </div>
              <div className="text-[0.875rem] text-black">
                <Link
                  to="/"
                  className="hover:text-hover transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  GENERARE CNP BULK
                </Link>
              </div>
              <div className="text-[0.875rem] text-black">
                <Link
                  to="/verificare-cnp"
                  className="hover:text-hover transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  VALIDARE CNP
                </Link>
              </div>
              <div className="text-[0.875rem] text-black">
                <Link
                  to="/"
                  className="hover:text-hover transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  VALIDARE CNP BULK
                </Link>
              </div>
              <div className="text-[0.875rem] text-black">
                <Link
                  to="/"
                  className="hover:text-hover transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
