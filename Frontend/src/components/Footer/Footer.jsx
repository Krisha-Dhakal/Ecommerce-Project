import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full bg-gradient-to-tr from-secondary via-secondary  to-primary text-white rounded-tr-3xl cursor-default mt-8 shadow-2xl overflow-hidden">
        <div className="max-w-[1280px] mx-auto flex flex-col px-2">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start py-20 gap-6 ">
            {/* Company-logo */}
            <div className="text-left px-20 ">
              <h1
                className="font-extrabold text-4xl uppercase text-primary cursor-pointer"
                onClick={() => {
                  navigate("/product");
                }}
              >
                GadgetGalaxy
              </h1>
              <p className="font-semibold text-lg uppercase">XYZ-XXX Company</p>
            </div>
            {/* Footer-nav */}
            <div className=" w-full flex-1 flex items-start justify-evenly font-semibold  ">
              <ul className="cursor-pointer">
                <li>Themes Tweeks</li>
                <li>Weekly Themes</li>
                <li>Raise a ticket</li>
                <li>Showcase</li>
              </ul>
              <ul className="cursor-pointer">
                <li>Services</li>
                <li>Pre-Sale FAQS</li>
                <li>Showcase</li>
              </ul>
              <ul className="cursor-pointer">
                <li>Weekly Themes</li>
                <li>Webkit-tools</li>
                <li>Support</li>
                <li>Showcase</li>
              </ul>
              <ul className="cursor-pointer">
                <li>About us</li>
                <li>Contact us</li>
                <li>Pre-Sale FAQS</li>
                <li>Affiliations</li>
                <li>Resources</li>
              </ul>
            </div>
          </div>
          {/* Division line */}
          <div className="w-full h-[2px] bg-zinc-200 "></div>
          {/* Socials-copywrite */}
          <div className="mx-auto flex flex-col items-center py-12 gap-5">
            <div className="flex gap-8 text-xl ">
              <div className="border rounded-full hover:scale-125 hover:cursor-pointer transition-all p-2 ">
                <FaInstagram className=""></FaInstagram>
              </div>
              <div className="border rounded-full hover:scale-125 hover:cursor-pointer transition-all p-2 ">
                <FaFacebook className=""></FaFacebook>
              </div>
              <div className="border rounded-full hover:scale-125 hover:cursor-pointer transition-all p-2 ">
                <FaTwitter className=""></FaTwitter>
              </div>
              <div className="border rounded-full hover:scale-125 hover:cursor-pointer transition-all p-2 ">
                <FaGoogle className=""></FaGoogle>
              </div>
              <div className="border rounded-full hover:scale-125 hover:cursor-pointer transition-all p-2 ">
                <FaLinkedin className=""></FaLinkedin>
              </div>
            </div>
            {/* Copywrite text */}
            <div className="text-primary font-semibold">
              {new Date().getFullYear()} &copy; Copyright. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
