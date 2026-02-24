
import React from "react";
import {
  BiSolidUserVoice,
  BiCodeAlt,
  BiPaint,
  BiCamera,
  BiMobileAlt,
  BiBullseye,
  BiSearchAlt2,
  BiBookAlt,
  BiBarChartAlt2,
} from "react-icons/bi";

const Service = () => {
  const services = [
      
    {
      icon: <BiSolidUserVoice size={40} />,
      name: "UI/UX Design",
      description:
        "Creating intuitive and visually appealing user interfaces.",
    },
    {
      icon: <BiCodeAlt size={40} />,
      name: "Web Development",
      description: "Building fast and responsive websites.",
    },
    {
      icon: <BiPaint size={40} />,
      name: "Graphic Design",
      description: "Designing eye-catching visuals.",
    },
    {
      icon: <BiCamera size={40} />,
      name: "Photography",
      description: "High-quality photos and videos.",
    },
    {
      icon: <BiMobileAlt size={40} />,
      name: "Mobile App Development",
      description: "Android & iOS applications.",
    },
    {
      icon: <BiBullseye size={40} />,
      name: "Digital Marketing",
      description: "Targeted marketing strategies.",
    },
    {
      icon: <BiSearchAlt2 size={40} />,
      name: "SEO Optimization",
      description: "Improve search rankings.",
    },
    {
      icon: <BiBookAlt size={40} />,
      name: "Content Writing",
      description: "SEO-friendly content.",
    },
    {
      icon: <BiBarChartAlt2 size={40} />,
      name: "Analytics",
      description: "Data-driven insights.",
    },
  ]; // ✅ ARRAY CLOSED PROPERLY

  return (
    <div className="h-full grid grid-cols-3 gap-5">
      {services.map((service) => (
        <div key={service.name} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center
        text-center hover:scale-105 transition-transform duration-300">
          <div className="text-sky-500 mb-4">{service.icon}</div>
          <div className="text-xl font-bold mb-2">{service.name}</div>
          <div className="text-gray-600">{service.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Service;
