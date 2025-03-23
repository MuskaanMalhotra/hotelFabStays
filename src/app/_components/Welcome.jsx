import Image from "next/image";
import Link from "next/link";
import React from "react";

const Welcome = () => {
  return (
    <div>
      <h1 className="text-5xl text-center mt-10 font-light">
        Welcome to Hotel Fab Stays
      </h1>
      <hr className="w-2/3 mx-auto my-10" />
      <div className="px-20 py-5 flex items-start bg-gray-100 justify-start gap-20">
        <div className="w-2/5">
          <Image
            className="h-[70vh] w-full object-cover"
            src="/img.JPG"
            alt="welcome"
            width={1000}
            height={1000}
          />
        </div>
        <div className=" flex items-start  flex-col w-3/5 gap-10 h-full">
          <div>
            <p className="text-xl font-light">
              The Orion Group of Hotels is a premium hotel chain that offers
              exceptional hospitality services in India and abroad. With 19
              hotels currently under our banner, we pride ourselves on providing
              top-notch amenities and experiences to our guests. Our hotels are
              located in prime locations, ensuring easy access to public
              transport and major attractions. <br /> <br />
              Our hotels are equipped with state-of-the-art facilities,
              including high-speed Wi-Fi, comfortable beds, clean linen, and
              round-the-clock room service. We are committed to providing our
              guests with a memorable stay and aim to exceed their expectations
              at every turn
              <Link href={"/aboutus"} className="font-bold underline text-lg">....View More</Link>
            </p>
          </div>
          <div className="flex items-center justify-between w-3/4">
            <div className=" flex items-start gap-4">
                <Image className="h-14 w-14 rounded-full" src={'/img.JPG'} alt="feature1" width={1000} height={1000}/>
                <div>
                    <h3 className="text-lg font-medium">jonh alsdl</h3>
                    <p className="text-md font-medium text-gray-600">Hotel Manager</p>
                </div>
            </div>
            <div>
            <Image className="h-14 w-48 rounded-full" src={'/sign.png'} alt="feature1" width={1000} height={1000}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
