import Image from "next/image";
import React from "react";

const OurHotel = () => {
  return (
    <div>
      <h1 className="lg:text-5xl text-3xl text-center mt-7 lg:mt-10 font-light">
        Our Hotel
      </h1>
      <hr className="w-2/4 mx-auto lg:my-10 my-3" />
      <div className="flex lg:flex-row flex-col-reverse lg:gap-10 gap-5  lg:mx-20 mx-5 lg:my-10 my-5">
        <div className="lg:w-1/2">
          <p className="lg:text-lg text-center lg:text-left text-gray-600">
            Hotel Fab Stays is a distinguished premium hotel renowned for its
            exceptional hospitality services in India. Dedicated to delivering
            unparalleled amenities and unforgettable experiences, we ensure a
            luxurious and comfortable stay for our esteemed guests.
            Strategically situated in a prime location, our hotel offers
            convenient access to public transportation and key attractions,
            ensuring a seamless and enriching stay for every visitor. At Hotel
            Fab Stays, we take pride in setting the standard for luxury
            accommodation and personalized service, ensuring that each guest’s
            journey is marked by comfort, convenience, and unparalleled
            satisfaction.<br></br>
            <br></br>
            Our hotel is equipped with state-of-the-art facilities, including
            high-speed Wi-Fi, comfortable beds, clean linen, and round-the-clock
            room service. We are committed to providing our guests with a
            memorable stay and aim to exceed their expectations at every turn.
          </p>
        </div>
        <div className="lg:w-1/2 w-full">
          <Image
            className="lg:h-[60vh]"
            alt="hotel img"
            src={"/img.JPG"}
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <hr className="w-2/3 mx-auto my-5" />
      <div className="flex lg:flex-row flex-col lg:gap-10 gap-5  lg:mx-20 mx-5 lg:my-10 my-5">
        <div className="lg:w-1/2">
          <Image
            className="lg:h-[60vh] w-full"
            alt="hotel img"
            src={"/img4.JPG"}
            width={1000}
            height={1000}
          />
        </div>
        <div className="lg:w-1/2">
          <p className="lg:text-lg text-center lg:text-left text-gray-600">
            Hotel Fab Stays boasts excellent meeting spaces and conference halls
            equipped with the latest technology, making them ideal for business
            meetings, conferences, and events. We also provide venues for small
            parties and weddings, making us a one-stop solution for all your
            event needs.<br></br>
            <br></br>
            Located in the heart of Delhi, Hotel Fab Stays offers a perfect
            blend of luxury, comfort, and convenience. Our commitment to
            exceptional service ensures a memorable experience for every guest.
            <br></br>
            <br></br>
            At Hotel Fab Stays, we strive to create an unforgettable experience
            for our guests and deliver exceptional value to our stakeholders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurHotel;
