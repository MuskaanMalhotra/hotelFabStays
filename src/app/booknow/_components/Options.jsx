"use client";
import React, { useState } from "react";

const Options = () => {
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1))
    .toISOString()
    .split("T")[0];

  const [checkin, setCheckin] = useState(today);
  const [checkout, setCheckout] = useState(tomorrow);

  // Calculate number of nights
  const calculateNights = () => {
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const nights = Math.max(
      (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24),
      0
    );
    return nights;
  };

  return (
    <div className="w-1/3 ">
      <div className=" grid grid-cols-2 gap-10 p-10 bg-[#cdb97c] opacity-80">
        <div className="flex flex-col text-xl font-medium w-fit">
          <label htmlFor="checkin">Check In</label>
          <input
            type="date"
            id="checkin"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            name="checkin"
            className="w-40"
          />
        </div>
        <div className="flex flex-col text-xl font-medium  w-fit">
          <label htmlFor="checkout">Check Out</label>
          <input
            type="date"
            id="checkout"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            name="checkout"
            className="w-40"
          />
        </div>
        <div className="flex flex-col text-xl font-medium  w-fi">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            id="guests"
            defaultValue={4}
            name="guests"
            className=" w-30"
          />
        </div>
        <div className="text-xl font-medium  w-fit ">
          <p>Nights</p>
          {calculateNights()}
        </div>
      </div>
      <div className="py-5 px-10">
        <h1 className="text-xl font-medium">Services :</h1>
        <div className="grid grid-cols-2 gap-2 mt-2 text-lg font-light">
          <div>
            <input type="checkbox" name="service1" /> <label>Television</label>
          </div>
          <div>
            <input type="checkbox" name="service1" />{" "}
            <label>Private Bathroom</label>
          </div>
          <div>
            <input type="checkbox" name="service1" />{" "}
            <label>Swimming Pool</label>
          </div>
          <div>
            <input type="checkbox" name="service1" /> <label>No Smoking</label>
          </div>
          <div>
            <input type="checkbox" name="service1" /> <label>King Beds</label>
          </div>
        </div>
      </div>
      <div className="py-5 px-10">
        <h1 className="text-xl font-medium">Extra Services :</h1>
        <div className="grid grid-cols-2 gap-2 mt-2 text-lg font-light">
          <div>
            <input type="checkbox" name="service1" /> <label>Cleaning Fee</label>
          </div>
          <div>
            <input type="checkbox" name="service1" />{" "}
            <label>Laundry</label>
          </div>
          <div>
            <input type="checkbox" name="service1" />{" "}
            <label>Satellite TV</label>
          </div>
          <div>
            <input type="checkbox" name="service1" /> <label>Sea View</label>
          </div>
          <div>
            <input type="checkbox" name="service1" /> <label>Wifi</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
