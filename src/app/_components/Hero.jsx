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
      text: "Explore the ",
      text1: "Magic Of Delhi",
      text2:
        "Mediteraneum Magic Awaits : Magic Awaits Your Oasis of sun, sea and Serenity",
    },
    {
      src: "/img1.JPG",
      alt: "hero image 1",
      text: "Explore the ",
      text1: "Magic Of Delhi",

      text2:
        "Mediteraneum Magic Awaits : Magic Awaits Your Oasis of sun, sea and Serenity",
    },
    {
      src: "/img2.JPG",
      alt: "hero image 2",
      text: "Explore the ",
      text1: "Magic Of Goa",

      text2:
        "Mediteraneum Magic Awaits : Magic Awaits Your Oasis of sun, sea and Serenity",
    },
    {
      src: "/img3.JPG",
      alt: "hero image 2",
      text: "Explore the ",
      text1: "Magic Of Goa",

      text2:
        "Mediteraneum Magic Awaits : Magic Awaits Your Oasis of sun, sea and Serenity",
    },
    {
      src: "/img4.JPG",
      alt: "hero image 2",
      text: "Explore the ",
      text1: "Magic Of Goa",

      text2:
        "Mediteraneum Magic Awaits : Magic Awaits Your Oasis of sun, sea and Serenity",
    },
    {
      src: "/img5.JPG",
      alt: "hero image 2",
      text: "Explore the ",
      text1: "Magic Of Pune",

      text2:
        "Mediteraneum Magic Awaits : Magic Awaits Your Oasis of sun, sea and Serenity",
    },
    {
      src: "/img6.JPG",
      alt: "hero image 2",
      text: "Explore the ",
      text1: "Magic Of Pune",

      text2:
        "Mediteraneum Magic Awaits : Magic Awaits Your Oasis of sun, sea and Serenity",
    },
    {
      src: "/img7.JPG",
      alt: "hero image 2",
      text: "Explore the ",
      text1: "Magic Of Pune",

      text2:
        "Mediteraneum Magic Awaits : Magic Awaits Your Oasis of sun, sea and Serenity",
    },
    // Add more slides as needed
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
          <div className="absolute p-5 flex gap-10 flex-col h-full items-start w-2/3 justify-start ">
            <div className="">
              <h1 className="text-9xl font-extralight  text-white">
                {slide.text}
              </h1>
              <h1 className="text-9xl font-indie-flower relative font-extrabold text-[#cdb16c]">
                {slide.text1}
              </h1>
            </div>
            <h1 className="text-4xl font-extralight text-white">
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
