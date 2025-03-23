import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = ({ open ,setOpen}) => {
  const path = usePathname();

  return (
    <div 
      className={`absolute top-16 right-5 bg-white shadow-md flex flex-col gap-3 text-xl font-light transition-all duration-300 z-10 ${
        open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
      }`}
    >
      <Link
      onClick={()=>setOpen(false)}
        href={"/"}
        className={`hover:bg-[#cdb97c] py-1 hover:text-white px-3 ${
          path === "/" ? "bg-[#cdb97c] text-white" : ""
        }`}
      >
        Home
      </Link>
      <Link
      onClick={()=>setOpen(false)}
        href={"/aboutus"}
        className={`hover:bg-[#cdb97c] py-1 hover:text-white px-3 ${
          path === "/aboutus" ? "bg-[#cdb97c] text-white" : ""
        }`}
      >
        About
      </Link>
      <Link
      onClick={()=>setOpen(false)}
        href={"/contactus"}
        className={`hover:bg-[#cdb97c] py-1 hover:text-white px-3 ${
          path === "/contactus" ? "bg-[#cdb97c] text-white" : ""
        }`}
      >
        Contact
      </Link>
      <Link
      onClick={()=>setOpen(false)}
        href={"/booknow"}
        className={`hover:bg-[#cdb97c] py-1 hover:text-white px-3 ${
          path === "/booknow" ? "bg-[#cdb97c] text-white" : ""
        }`}
      >
        Book Now
      </Link>
    </div>
  );
};

export default Sidebar;