import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GiCarWheel } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
export default function InfoNavbar() {
  return (
    <div>
      <div className="bg-cyan-950  h-10">
        <div className="flex justify-around ">
          <div className="flex justify-evenly m-2 gap-2">
            <div className="flex gap-2">
              <IoIosMail size="1.2rem " />
              <p className="font-bold text-white">Info@webGmail.com</p>
            </div>
            <div className="flex">
              <FaLocationDot size="1.2rem" />
              <p className="font-bold text-white">15/A,Nest Tower,NYC</p>
            </div>
          </div>
          <div></div>
          <div className="flex justify-evenly m-3 gap-2">
            <div>
              <FaFacebookSquare size="1.2rem " />
            </div>
            <div>
              <FaTwitter size="1.2rem " />
            </div>
            <div>
              <FaSquareInstagram size="1.2rem " />
            </div>
            <div>
              <GiCarWheel size="1.2rem " />
            </div>
            <div>
              <button className="bg-orange-700 p-1  text-white text-sm font-bold ">
                Add Listing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
