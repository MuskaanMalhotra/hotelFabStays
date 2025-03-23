"use client"
import React, { useState, useRef } from 'react';

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      text: "They really provide good room services and good atmosphere to stay I recommend everyone to take visit here for staying when you are in vacations I also liked there hospitality of the food provided and decor of the rooms.",
      author: "Just Awesome Place",
      room: "Standard Room",
      image: "/user.png"
    },
    {
      id: 2,
      text: "The resort exceeded my expectations. Beautiful views, attentive staff, and delicious cuisine. The spa treatments were incredibly relaxing. Perfect for a weekend getaway.",
      author: "Amazing Retreat",
      room: "Deluxe Suite",
      image: "/user.png"
    },
    {
      id: 3,
      text: "We celebrated our anniversary here and couldn't be happier. The romantic dinner setup was magical. Staff remembered all our preferences from our previous stay.",
      author: "Memorable Stay",
      room: "Balcony room",
      image: "/user.png"
    },
    {
      id: 4,
      text: "Traveling with kids can be challenging, but this place made it easy. The kids' club activities kept our children entertained while we enjoyed some quiet time. We'll definitely return.",
      author: "Family Friendly",
      room: "Family Suite",
      image: "/user.png"
    }
  ];

  // Function to handle dot click
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  // Touch handling variables
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;
  
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && activeIndex < testimonials.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
    if (isRightSwipe && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="w-full mx-auto py-5 px-4">
        <h1 className="lg:text-5xl text-2xl text-center mt-7 lg:mt-10 font-light">
        Testimonials
      </h1>
      <hr className="w-2/4 mx-auto lg:my-10 my-3" />
      <div 
        className="relative overflow-hidden lg:w-4/5 py-5 mx-auto bg-gray-100"
        ref={containerRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="transition-transform duration-300 ease-in-out flex" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="w-full flex-shrink-0 flex flex-col items-center p-2 lg:p-6"
            >
              <div className="relative mb-8">
                <span className="text-[#cdb97c] text-8xl font-serif absolute -top-5 -left-0">"</span>
                <p className="text-center text-gray-700 text-md lg:text-xl max-w-3xl mx-auto relative z-10 px-8">
                  {testimonial.text}
                </p>
                <span className="text-[#cdb97c] text-8xl font-serif absolute -bottom-16 right-0">"</span>
              </div>
              
              <div className="mt-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-20 h-20 border rounded-full object-cover mx-auto"
                />
              </div>
              
              <div className="mt-2 text-center">
                <h3 className="font-bold text-lg">{testimonial.author}</h3>
                <p className="text-gray-500">- {testimonial.room}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="flex justify-center mt-10 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex 
                ? 'bg-[#cdb97c] w-4 h-4' 
                : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;