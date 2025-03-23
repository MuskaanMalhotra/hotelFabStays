import Link from "next/link";
import React from "react";

const BookNow = () => {
  return (
    <div className="flex absolute bottom-0 left-0 right-0 items-center justify-center gap-36 p-5 opacity-90 bg-[#cdb99c]">
      <div className=" flex flex-col gap-3 font-medium text-xl">
        <label htmlFor="checkin">Check In</label>
        <input
          type="date"
          id="checkin"
          defaultValue={new Date().toISOString().split("T")[0]}
          name="checkin"
        />
      </div>
      <div className=" flex flex-col gap-3 font-medium text-xl"> 
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
        />
      </div>
      <Link href={'/booknow'}  className="text-xl bg-[#cdb16c] px-10 py-2 hover:text-white">Book Now</Link>
    </div>
  );
};

export default BookNow;
