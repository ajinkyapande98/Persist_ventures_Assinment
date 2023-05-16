import React from "react";

// import components
import TestimonialSlider from "../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <section className="relative">
      <div className="container mx-auto">
        <div
          className="bg-accent-primary min-h-[800px] rounded-[50px]"
          data-aos="fade-up"
          data-aos-offset="300"
        >
          <div className="flex flex-col justify-center px-2 xl:px-0 h-[800px]">
            <h2 className=" text-white text-center mb-[80px]">
              I ACTUALLY GOT TIRED OF THE FACT THAT OUR ENTIRE WORLD IS BEING
              RAN BY ENGAGEMENT ALGORITHMS WHICH ARE NO BETTER THAN SOUL SUCKING
              DEMONS AND MADE THIS APP THAT RANKS VIDEOS BASED ON WHAT INSPIRES
              PEOPLE THE MOST:
            </h2>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
