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
    <div className="flex">
        {/* map */}
      <div className="relative w-2/4 h-[40vh] overflow-hidden">
        {isClient && (
          <iframe
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            className="border-none mt-[-158px]"
            src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=39,%20Paddana%20Reddy%20Layout%20Rd,%20Nanjappa%20Garden,%20Horamavu,%20Bengaluru,%20Karnataka%20560043+(Marketecture)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        )}
      </div>
      {/* contact us */}
      <div className=" flex flex-col items-center justify-center w-1/4 bg-[#cdb97c]">
        <div className="flex flex-col gap-5 items-start justify-center">
          <div className="flex gap-5 items-end">
            <PhoneOutgoing strokeWidth={1.5} size={60} />
            <p className="text-4xl font-medium">Contact Us</p>
          </div>
          <div className=" flex flex-col">
            <label className="text-lg font-medium">Reservation:</label>
            <a href="tel:+919999999999" className="text-lg">
              +91 9999999999
            </a>
          </div>
          <div className=" flex flex-col">
            <label className="text-lg font-medium">Booking:</label>
            <a href="tel:+919999999999" className="text-lg">
              +91 9999999999
            </a>
          </div>
        </div>
      </div>
      {/* mail us */}
      <div className=" flex flex-col items-center justify-center w-1/4 bg-[#cdb15c]">
        <div className="flex flex-col gap-5 items-start justify-center">
          <div className="flex gap-5 items-end">
            <MailOpen strokeWidth={1.5} size={60} />
            <p className="text-4xl font-medium">Mail Us</p>
          </div>
          <div className=" flex flex-col">
            <label className="text-lg font-medium">Information:</label>
            <Link href={""}>info@hotel.com</Link>
          </div>
          <div className=" flex flex-col">
            <label className="text-lg font-medium">Reception:</label>
            <Link href={""}>info@hotel.com</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="p-10 flex justify-between items-start bg-[#cdb97c]">
        <div className="w-1/3">
            <h1 className="text-xl font-bold">Hotel Fab Stays</h1>
            <p className="text-lg">The Orion Group of Hotels offered with a great comfort and services at your price in Delhi, Mumbai, Goa, Udaipur, Thailand…</p>
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
            <h1 className="text-xl font-bold leading-5">Phone Support</h1>
            <p className="text-lg">24 hours a day</p>
            <a href="tel:+919999999999" className="text-lg mt-2">
              +91 9999999999
            </a>
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
