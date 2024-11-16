import React from "react";
import Logo from "../assets/icons/Logo.png";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaPhoneAlt,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer w-full bg-white ">
      <div className="container flex items-center justify-between ">
        <div className="left ">
          <img src={Logo} alt="" className="w-10 mb-8" />
          <span className="flex items-center gap-2 mb-3">
            <span>
              <FaMailBulk />
            </span>{" "}
            hello@skillbridge.com
          </span>
          <span className="flex items-center gap-2 mb-3">
            <span>
              <FaPhoneAlt />
            </span>
            +9223444999000
          </span>
          <span className="flex items-center gap- mb-3">
            <span>
              <FaLocationPin />
            </span>
            Somewhere in the world
          </span>
        </div>
        <div className="flex justify-around gap-10">
          <ul className="flex flex-col gap-2">
            <Link className="font-bold">Home</Link>
            <Link>Benefits</Link>
            <Link>Our Courses</Link>
            <Link>Our Testimonials</Link>
            <Link>Our FAQ</Link>
          </ul>
          <ul className="flex flex-col gap-2">
            <Link className="font-bold">About</Link>
            <Link>Company</Link>
            <Link>Achievements</Link>
            <Link>Our Testimonials</Link>
            <Link>Our Gaols</Link>
          </ul>
          <ul className="flex flex-col gap-2">
            <Link className="font-bold">Social Profile</Link>
            <div className="flex gap-5">
            <Link className="text-lg">
              <FaFacebook />
            </Link>
            <Link className="text-lg">
              <FaTwitter />
            </Link>
            <Link className="text-lg">
              <FaLinkedin />
            </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
