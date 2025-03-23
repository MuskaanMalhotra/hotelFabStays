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
            className="h-[50vh] w-full object-cover"
            src="/img.JPG"
            alt="welcome"
            width={1000}
            height={1000}
          />
        </div>
        <div className=" flex items-start  flex-col w-3/5 gap-10 h-full">
          <div>
            <p className="text-xl font-light">
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
              <Link href={"/aboutus"} className="font-bold underline text-lg">
                ....View More
              </Link>
            </p>
          </div>
          <div className="flex items-center justify-between w-3/4">
            <div className=" flex items-start gap-4">
              <Image
                className="h-14 w-14 rounded-full"
                src={"/img.JPG"}
                alt="feature1"
                width={1000}
                height={1000}
              />
              <div>
                <h3 className="text-lg font-medium">jonh alsdl</h3>
                <p className="text-md font-medium text-gray-600">
                  Hotel Manager
                </p>
              </div>
            </div>
            <div>
              <Image
                className="h-14 w-48 rounded-full"
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
