import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import BookNow from "./_components/BookNow";
import Welcome from "./_components/Welcome";
import Footer from "./_components/Footer";
import OurRooms from "./_components/OurRooms";
import TestimonialSlider from "./_components/Testimonials";
import GetInTouch from "./_components/GetInTouch";
import Facilities from "./aboutus/_components/Facilities";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Welcome/>
      <OurRooms/>
      <Facilities/>
      <TestimonialSlider/>
      <GetInTouch/>
    </div>
  );
}
