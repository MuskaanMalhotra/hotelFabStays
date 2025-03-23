import Link from "next/link";
import React from "react";

const BookNow = () => {
  return (
    <div className="flex absolute bottom-0 left-0 right-0 items-center justify-center gap-5 lg:gap-36 p-3 lg:p-5 opacity-80 bg-[#cdb99c]">
      <div className=" flex flex-col lg:gap-3 font-medium text-sm lg:text-xl">
        <label htmlFor="checkin">Check In</label>
        <input
          type="date"
          id="checkin"
          defaultValue={new Date().toISOString().split("T")[0]}
          name="checkin"
          className="lg:w-fit w-[100px]"
        />
      </div>
      <div className=" flex flex-col lg:gap-3 font-medium text-sm lg:text-xl"> 
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
          className="lg:w-fit w-[100px]"
        />
      </div>
      <Link href={'/booknow'}  className="lg:text-xl text-sm bg-[#cdb16c] lg:px-10 px-2 py-1 lg:py-2 hover:text-white">Book Now</Link>
    </div>
  );
};

export default BookNow;
