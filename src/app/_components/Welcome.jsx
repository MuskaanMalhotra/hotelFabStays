import Image from "next/image";
import Link from "next/link";
import React from "react";

const Welcome = () => {
  return (
    <div>
      <h1 className="lg:text-5xl text-2xl text-center mt-7 lg:mt-10 font-light">
        Welcome to Hotel Fab Stays
      </h1>
      <hr className="w-2/3 mx-auto lg:my-10 my-3" />
      <div className="lg:px-20 px-5 py-5 flex flex-col lg:flex-row items-start bg-gray-100 justify-start gap-5 lg:gap-20">
        <div className="lg:w-2/5">
          <Image
            className="lg:h-[50vh] w-full object-cover"
            src="/img.JPG"
            alt="welcome"
            width={1000}
            height={1000}
          />
        </div>
        <div className=" flex items-start  flex-col lg:w-3/5 gap-10 h-full">
          <div>
            <p className="lg:text-xl text-sm text-center lg:text-left font-light">
              Welcome to Hotel FabStays, your new haven for luxurious comfort
              and unforgettable experiences! We're thrilled to open our doors
              and offer you a sanctuary of relaxation, impeccable service, and
              modern amenities. Come discover our beautifully designed rooms,
              savor exquisite cuisine, and create lasting memories in our
              vibrant atmosphere. We look forward to welcoming you soon!
              <br /> <br />
              Our hotel is equipped with state-of-the-art facilities, including
              high-speed Wi-Fi, comfortable beds, clean linen, and
              round-the-clock room service. We are committed to providing our
              guests with a memorable stay and aim to exceed their expectations
              at every turn.
              <Link href={"/aboutus"} className="font-bold underline lg:text-lg text-xs">
                ....View More
              </Link>
            </p>
          </div>
          <div className="flex items-center justify-between lg:w-3/4 w-full">
            <div className=" flex items-start gap-2 lg:gap-4">
              <Image
                className="lg:h-14 border border-black h-10 w-10 lg:w-14 rounded-full"
                src={"/user.png"}
                alt="feature1"
                width={1000}
                height={1000}
              />
              <div>
                <h3 className="lg:text-lg text-sm font-medium">Sourabh Tiwari</h3>
                <p className="lg:text-lg text-xs whitespace-nowrap font-medium text-gray-600">
                  Hotel Manager
                </p>
              </div>
            </div>
            <div>
              <Image
                className="lg:h-14 h-10 w-28 lg:w-48 rounded-full"
                src={"/sign.png"}
                alt="feature1"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
