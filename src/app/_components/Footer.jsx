"use client";
import { Facebook, Instagram, Linkedin, MailOpen, PhoneOutgoing, Youtube } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="mt-20"> 
    <div className="flex flex-col sm:flex-row">
        {/* map */}
      <div className="relative sm:w-2/4 h-[40vh] overflow-hidden">
        {isClient && (
          <iframe
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            className="border-none mt-[-158px]"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=B/14,%20East%20of%20Greater%20Kailash,%20New%C2%A0Delhi+(HotelFabStays)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        )}
      </div>
      {/* contact us */}
      <div className=" flex flex-col items-center justify-center sm:w-1/4 bg-[#cdb97c] p-5">
        <div className="flex flex-col sm:gap-5 gap-2 items-start justify-center">
          <div className="flex gap-5 items-end">
            <PhoneOutgoing strokeWidth={1.5} className="sm:h-14 h-10 w-10 sm:w-14" />
            <p className="sm:text-4xl text-2xl font-medium">Contact Us</p>
          </div>
          <div className=" flex flex-col">
            <label className="text-lg font-medium">Reservation:</label>
            <a href="tel:+919289633432" className="text-lg">
              +91 9289633432
            </a>
          </div>
          <div className=" flex flex-col">
            <label className="text-lg font-medium">Booking:</label>
            <a href="tel:+919289633432" className="text-lg">
              +91 9289633432
            </a>
          </div>
        </div>
      </div>
      {/* mail us */}
      <div className=" flex flex-col items-center justify-center sm:w-1/4 p-5 bg-[#cdb15c]">
        <div className="flex flex-col sm:gap-5 gap-2 items-start justify-center">
          <div className="flex gap-5 items-end">
            <MailOpen strokeWidth={1.5} className="sm:h-14 h-10 w-10 sm:w-14" />
            <p className="sm:text-4xl text-2xl font-medium">Mail Us</p>
          </div>
          <div className=" flex flex-col">
            <label className="text-lg font-medium">Information:</label>
            <Link href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sales@hotelfabstays.in"}>sales@hotelfabstays.in</Link>
          </div>
          <div className=" flex flex-col">
            <label className="text-lg font-medium">Reception:</label>
            <Link href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sales@hotelfabstays.in"}>sales@hotelfabstays.in</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="sm:p-10 p-5 flex flex-col sm:flex-row justify-between items-start gap-10 sm:gap-0 bg-[#cdb97c]">
        <div className="sm:w-1/3">
            <h1 className="text-xl font-bold">Hotel Fab Stays</h1>
            <p className="text-lg">Hotel Fab Stays offers great comfort and exceptional services at your price in Delhi, ensuring a luxurious and memorable stay for all our guests.</p>
        </div>
        <div className="">
            <h1 className="text-xl font-bold leading-5">Socials</h1>
            <p className="text-lg">connect with us</p>
            <div className="flex gap-3 items-start mt-2">
                <Instagram className=" rounded-full p-1 bg-yellow-200" size={30}/>
                <Youtube className=" rounded-full p-1 bg-yellow-200" size={30}/>
                <Facebook className=" rounded-full p-1 bg-yellow-200" size={30}/>
                <Linkedin className=" rounded-full p-1 bg-yellow-200" size={30}/>
            </div>
        </div>
        <div className="">
            <h1 className="text-xl font-bold leading-5">Address</h1>
            <p className="text-lg leading-7">Address- B/14<br/>East of Greater Kailash<br/> New Delhi</p>
        </div>
        <div className="">
            <h1 className="text-xl font-bold mb-5">Book now</h1>
           <Link href={"/booknow"} className="bg-[#cdb14c] px-3 py-2">Check availability</Link>
        </div>
    </div>
    </div>
  );
};

export default Footer;
