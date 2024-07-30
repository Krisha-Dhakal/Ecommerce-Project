import { FaInstagram, FaFacebook, FaTwitter, FaPhoneAlt } from "react-icons/fa";
const UpperNav = () => {
  return (
    <>
      <div className="w-full bg-zinc-200 border border-b-primary ">
        <div className="flex items-center justify-between max-w-[1280px] mx-auto px-5">
          <div className="flex items-center gap-2">
            <FaPhoneAlt></FaPhoneAlt>
            <p>+977 9876543210</p>
          </div>
          <div className="flex items-center gap-4">
            <FaInstagram></FaInstagram>
            <FaFacebook></FaFacebook>
            <FaTwitter></FaTwitter>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpperNav;
