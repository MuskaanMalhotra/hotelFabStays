import Image from "next/image";
import React from "react";

const OurHotel = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mt-10 font-light">Our Hotel</h1>
      <hr className="w-1/4 mx-auto my-5" />
      <div className="flex gap-10 mx-20 my-10">
        <div className="w-1/2">
          <p className="text-lg text-gray-600">
            Orion Group of Hotels is a distinguished premium hotel chain
            renowned for its exceptional hospitality services both in India and
            abroad. Boasting a portfolio of 19 exquisite properties, we are
            dedicated to delivering unparalleled amenities and unforgettable
            experiences to our esteemed guests. Strategically situated in prime
            locations, our hotels offer convenient access to public
            transportation networks and key attractions, ensuring a seamless and
            enriching stay for every visitor. At Orion Hotels, we take pride in
            setting the standard for luxury accommodation and personalized
            service, ensuring that each guest’s journey is marked by comfort,
            convenience, and unparalleled satisfaction.<br></br>
            <br></br>
            Our hotels are equipped with state-of-the-art facilities, including
            high-speed Wi-Fi, comfortable beds, clean linen, and round-the-clock
            room service. We are committed to providing our guests with a
            memorable stay and aim to exceed their expectations at every turn.
          </p>
        </div>
        <div className="w-1/2">
          <Image
            className="h-[60vh] w-full"
            alt="hotel img"
            src={"/img.JPG"}
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <hr className="w-2/3 mx-auto my-5" />
      <div className="flex gap-10 mx-20 my-10">
        <div className="w-1/2">
          <Image
            className="h-[60vh] w-full"
            alt="hotel img"
            src={"/img4.JPG"}
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-1/2">
          <p className="text-lg text-gray-600">
            Orion Group of Hotels is a distinguished premium hotel chain
            renowned for its exceptional hospitality services both in India and
            abroad. Boasting a portfolio of 19 exquisite properties, we are
            dedicated to delivering unparalleled amenities and unforgettable
            experiences to our esteemed guests. Strategically situated in prime
            locations, our hotels offer convenient access to public
            transportation networks and key attractions, ensuring a seamless and
            enriching stay for every visitor. At Orion Hotels, we take pride in
            setting the standard for luxury accommodation and personalized
            service, ensuring that each guest’s journey is marked by comfort,
            convenience, and unparalleled satisfaction.<br></br>
            <br></br>
            Our hotels are equipped with state-of-the-art facilities, including
            high-speed Wi-Fi, comfortable beds, clean linen, and round-the-clock
            room service. We are committed to providing our guests with a
            memorable stay and aim to exceed their expectations at every turn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurHotel;
