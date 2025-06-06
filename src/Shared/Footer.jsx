import React from "react";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-secondary text-white py-10">
      <div className="max-w-[1800px] mx-auto px-4 flex justify-between">
        {/* Company Logo */}
        <div>
          <img
            className="w-50 bg-white rounded-sm"
            src="/assets/logo2.png"
            alt=""
          />
        </div>
        {/* Quick Links */}
        <div>
          <h4>Quick Links</h4>
          <nav className="flex flex-col *:hover:underline">
            <Link to="/">Home</Link>
            <Link to="/findTutors">Find tutors</Link>
            <Link to="/addTutorials">Add Tutorials</Link>
            <Link to="/myTutorials">My Tutorials</Link>
            <Link to="/myBookedTutors">My booked tutors</Link>
          </nav>
        </div>
        {/* Policies */}
        <div>
          <h4>Legal</h4>
          <nav className="flex flex-col *:hover:underline">
            <a href="">Terms & Conditions</a>
            <a href="">License</a>
            <a href="">Privacy Policy</a>
            <a href="">All Right Reserved</a>
            <a href=""></a>
          </nav>
        </div>
        {/* Social Link */}
        <div className="flex items-end">
          <div className="">
            <h4>Social Links</h4>
            <nav className="flex gap-2">
              <a href="https://www.facebook.com/">
                <FaFacebook size={20} />
              </a>
              <a href="https://x.com/">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.linkedin.com/">
                <FaXTwitter size={20} />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
