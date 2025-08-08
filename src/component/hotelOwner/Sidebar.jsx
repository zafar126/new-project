import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarLink = [
    { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon, exact: true },
    { name: "Add Room", path: "/owner/add-room", icon: assets.addIcon },
    { name: "List Room", path: "/owner/list-room", icon: assets.listIcon },
  ];

  return (
    <div className="md:w-64 w-16 h-screen overflow-y-auto border-r border-gray-300 pt-4 flex flex-col bg-white transition-all duration-300">
      {sidebarLink.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          end={item.exact}
          className={({ isActive }) =>
            `flex items-center py-3 px-4 md:px-6 gap-3 transition-colors duration-200 ${
              isActive
                ? "border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600 font-medium"
                : "hover:bg-gray-100/90 border-white text-gray-700"
            }`
          }
        >
          <img src={item.icon} alt={item.name} className="h-6 w-6" />
          <p className="hidden md:block">{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
