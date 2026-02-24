import { NavLink } from "react-router-dom";
import img1 from "../assets/images/smiling-businessman.jpg";
const linkClasses = ({ isActive }) => `
flex item-center gap-4 px-6 py-3 rounded-lg transition-all duration-300 ${
  isActive
    ? "bg-white/30 shadow-lg scale-105"
    : "hover:bg-white/20  hover:scale-105"
}`;
const SideBar = () => {
  return (
    <div className="w-80 h-screen text-white flex flex-col justify-between px-6 py-10 shadow-2xl bg-linear-to-b from-sky-500 to-blue-700">
      <div className="text-center">
        <h2 className="font-extrabold text-2xl">Kul Shingh Rana Magar</h2>
        <p className="font-semibold py-3">BACKEND DEVELOPER</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src={img1}
          alt="myimg"
          className="w-35 h-35 rounded-[100%] shadow-2xl"
        />
      </div>
      <div className="flex flex-col justify-center gap-5 mb-3">
        <NavLink to="/" className={linkClasses}>
          <p className="font-medium text-lg ">Home</p>
        </NavLink>
        <NavLink to="/about" className={linkClasses}>
          <p className="font-medium text-lg">About</p>
        </NavLink>
        <NavLink to="/service" className={linkClasses}>
          <p className="font-medium text-lg">Service</p>
        </NavLink>
        <NavLink to="/portfolio" className={linkClasses}>
          <p className="font-medium text-lg">Portfolio</p>
        </NavLink>
          <NavLink to="/loginPage" className={linkClasses}>
          <p className="font-medium text-lg">Login page</p>
        </NavLink>
        
      </div>
      <a
        href="#"
        className="bg-white py-3 rounded-md text-center shadow-2xl text-gray-600 font-bold w-full"
      >
        DOWNLOAD CV
      </a>
    </div>
  );
};

export default SideBar;
