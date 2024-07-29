import React from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
export default function CarouselBasicExample() {
  return (
    <div
      id="carouselExampleCaptions"
      className="relative my-[2%] w-full"
      data-te-carousel-init
      data-te-carousel-slide
    >
      <div className="absolute inset-0 z-[2]   my-[20%] hidden w-full flex-wrap justify-between md:flex">
        <button
          className="mx-4 h-12 w-12  text-white"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="prev"
        >
         <GrPrevious size="2rem" />
        </button>
        <button
          className=" h-12 w-12 mr-5  text-white"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="next"
        >
          <GrNext size="2rem" />
        </button>
      </div>

      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div className="relative float-left w-full transition-transform duration-[600ms] ease-in-out">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
            className="block w-full"
            alt="First slide"
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 className="text-xl">First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="relative float-left w-full transition-transform duration-[600ms] ease-in-out">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
            className="block w-full"
            alt="Second slide"
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 className="text-xl">Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="relative float-left w-full transition-transform duration-[600ms] ease-in-out">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
            className="block w-[100%]"
            alt="Third slide"
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 className="text-xl">Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


