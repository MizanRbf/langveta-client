import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  FaFacebook,
  FaLinkedin,
  FaLocationDot,
  FaXTwitter,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className=" bg-[#131b00] text-white p-10 border border-x-0 border-t-primary border-b-0">
      <div className="flex flex-col lg:flex-row *:mb-8 justify-between mb-10 max-w-[1800px] mx-auto md:px-4">
        {/* Title & Description */}
        <nav className="items-start *:space-y-2">
          <img
            className="w-40 mb-8 bg-white rounded-sm"
            src="/assets/logo2.png"
            alt="Company Logo"
          />
          {/* Contact Us */}
          <nav className="*:text-left *:text-xs *:md:text-sm">
            <p className="flex items-start gap-2">
              <FaLocationDot />
              16 sector,Cantonment,
              <br /> Uttara-1209 ,Dhaka-1214
            </p>
            <p className="flex items-center gap-2">
              <FaWhatsapp />
              +880-1319444554
            </p>
            <p className="flex items-center gap-2">
              <IoMail />
              mailus@gmail.com
            </p>
          </nav>
        </nav>
        {/* Quick Links */}

        <nav className="flex flex-col *:text-sm space-y-2 text-left">
          <h4>Quick Links</h4>
          <nav className="flex flex-col *:hover:underline">
            <Link to="/">Home</Link>
            <Link to="/findTutors">Find tutors</Link>
            <Link to="/addTutorials">Add Tutorials</Link>
            <Link to="/myTutorials">My Tutorials</Link>
            <Link to="/myBookedTutors">My booked tutors</Link>
          </nav>
        </nav>
        {/* Policies */}
        <nav className="flex flex-col *:text-sm *:space-y-2 text-left">
          <ul className="*:hover:underline">
            <h4 className="underline">Legal</h4>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">License</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">All Right Reserved</a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </nav>
        {/* Social Link */}
        <nav className="flex flex-col justify-end gap-6">
          <h4 className="underline text-left">Visit Us</h4>
          <ul className="flex text-3xl md:text-2xl w-full justify-start space-x-4">
            <li>
              <a
                className="hover:text-primary"
                href="https://www.facebook.com/"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="https://x.com/">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary"
                href="https://www.linkedin.com/"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>

          {/* form */}
          <div className="">
            <form className="w-full">
              <div className="join">
                <input
                  type="email"
                  placeholder="Email us"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">
                  Send Email
                </button>
              </div>
            </form>
          </div>
        </nav>
      </div>
      <div className="text-xs md:text-sm text-center">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Langveta
        </p>
      </div>
    </footer>
  );
};

export default Footer;
