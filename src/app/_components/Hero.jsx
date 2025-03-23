"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import BookNow from "./BookNow";

const Hero = () => {
  // Array of images and their corresponding text
  const slides = [
    {
      src: "/img.JPG",
      alt: "hero image ",
      text: "Enjoy the comfort",
      text3: "of",
      text1: " FabStays",
      text2:
        "Luxury & Comfort Await Your perfect retreat in the heart of Delhi, where elegance meets exceptional hospitality.",
    },
    {
      src: "/img1.JPG",
      alt: "hero image 1",
      text: "Enjoy the comfort",
      text3: "of",
      text1: " FabStays",

      text2:
        "Luxury & Comfort Await Your perfect retreat in the heart of Delhi, where elegance meets exceptional hospitality.",
    },
    {
      src: "/img2.JPG",
      alt: "hero image 2",
      text: "Enjoy the comfort",
      text3: "of",
      text1: " FabStays",

      text2:
        "Luxury & Comfort Await Your perfect retreat in the heart of Delhi, where elegance meets exceptional hospitality.",
    },
    {
      src: "/img3.JPG",
      alt: "hero image 2",
      text: "Enjoy the comfort",
      text3: "of",
      text1: " FabStays",

      text2:
        "Luxury & Comfort Await Your perfect retreat in the heart of Delhi, where elegance meets exceptional hospitality.",
    },
    {
      src: "/img4.JPG",
      alt: "hero image 2",
      text: "Enjoy the comfort",
      text3: "of",
      text1: " FabStays",

      text2:
        "Luxury & Comfort Await Your perfect retreat in the heart of Delhi, where elegance meets exceptional hospitality.",
    },
    {
      src: "/img5.JPG",
      alt: "hero image 2",
      text: "Enjoy the comfort",
      text3: "of",
      text1: " FabStays",

      text2:
        "Luxury & Comfort Await Your perfect retreat in the heart of Delhi, where elegance meets exceptional hospitality.",
    },
    {
      src: "/img6.JPG",
      alt: "hero image 2",
      text: "Enjoy the comfort",
      text3: "of",
      text1: " FabStays",

      text2:
        "Luxury & Comfort Await Your perfect retreat in the heart of Delhi, where elegance meets exceptional hospitality.",
    },
    {
      src: "/img7.JPG",
      alt: "hero image 2",
      text: "Enjoy the comfort",
      text3: "of",
      text1: " FabStays",

      text2:
        "Luxury & Comfort Await Your perfect retreat in the heart of Delhi, where elegance meets exceptional hospitality.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to cycle through slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
          />

          {/* Text overlay */}
          <div className="absolute p-5 flex lg:gap-10 flex-col h-full items-start lg:w-2/3 justify-start ">
            <div className="">
              <h1 className="lg:text-9xl text-4xl whitespace-nowrap font-light  text-white">
                {slide.text}
              </h1>
              <div className="flex items-center justify-start gap-5 lg:gap-16">
                <h1 className="lg:text-9xl text-4xl  font-extralight  text-white">
                  {slide.text3}
                </h1>
                <h1 className="lg:text-9xl text-5xl font-indie-flower relative font-extrabold text-[#cdb15c] pt-2 lg:pt-5">
                  {slide.text1}
                </h1>
              </div>
            </div>
            <h1 className="lg:text-4xl text-lg font-extralight text-white">
              {slide.text2}
            </h1>
          </div>
        </div>
      ))}
      <BookNow />
    </div>
  );
};

export default Hero;
