import { NavLink, useLocation } from "react-router-dom";
import { FiHome, FiUser, FiFolder, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import profile from "../assets/myimage.png";

const tabs = [
  { to: "/", label: "Home", icon: FiHome },
  { to: "/project", label: "Projects", icon: FiFolder },
  { to: "/contact", label: "Contact", icon: FiMail },
  { to: "/about", label: "About", icon: FiUser },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <>
      {/* Desktop Navbar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
        className="hidden md:flex fixed top-0 left-0 right-0 h-20 px-8 bg-blue-500 items-center justify-between text-white z-50 shadow-md"
      >
        <div className="flex items-center gap-4">
          <img
            src={profile}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
            draggable={false}
          />
          <h1 className="font-bold text-2xl tracking-tight select-none">
            S<span className="text-lg font-normal">olanki</span> B
            <span className="text-lg font-normal">havesh</span>
          </h1>
        </div>

        <nav className="flex space-x-8 text-base">
          {tabs.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <NavLink
                key={label}
                to={to}
                className={`relative font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-blue-100 hover:text-white"
                }`}
              >
                {label}
              </NavLink>
            );
          })}
        </nav>
      </motion.header>

      {/* Mobile Bottom Tab Bar */}
      <motion.nav
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
        className="md:hidden fixed bottom-0 left-0 right-0 bg-blue-500  text-white z-50"
      >
        <div className="flex justify-around items-center h-16 px-2 relative">
          {tabs.map(({ to, label, icon: Icon }) => {
            const isActive = location.pathname === to;
            return (
              <NavLink
                to={to}
                key={label}
                className="relative flex flex-col items-center justify-center text-xs"
              >
                <motion.div
                  animate={{
                    color: isActive ? "#fff" : "#bfdbfe"
                  }}
                  className={`flex flex-col items-center justify-center px-3 py-2 rounded-full transition-all duration-300 
                  `}
                >
                  <Icon size={22} className="mb-0.5" />
                  <span>{label}</span>
                </motion.div>
              </NavLink>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
};
