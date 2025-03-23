import Link from "next/link";
import React from "react";

const BookNow = () => {
  return (
    <div className="flex absolute bottom-0 left-0 right-0 items-center justify-center gap-5 sm:gap-36 p-3 sm:p-5 opacity-80 bg-[#cdb99c]">
      <div className=" flex flex-col sm:gap-3 font-medium text-sm sm:text-xl">
        <label htmlFor="checkin">Check In</label>
        <input
          type="date"
          id="checkin"
          defaultValue={new Date().toISOString().split("T")[0]}
          name="checkin"
          className="sm:w-fit w-[100px]"
        />
      </div>
      <div className=" flex flex-col sm:gap-3 font-medium text-sm sm:text-xl"> 
        <label htmlFor="checkout">Check Out</label>
        <input
          type="date"
          id="checkout"
          defaultValue={
            new Date(new Date().setDate(new Date().getDate() + 1))
              .toISOString()
              .split("T")[0]
          }
          name="checkout"
          className="sm:w-fit w-[100px]"
        />
      </div>
      <Link href={'/booknow'}  className="sm:text-xl text-sm bg-[#cdb16c] sm:px-10 px-2 py-1 sm:py-2 hover:text-white">Book Now</Link>
    </div>
  );
};

export default BookNow;
