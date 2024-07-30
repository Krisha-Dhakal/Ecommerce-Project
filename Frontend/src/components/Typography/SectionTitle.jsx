// import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./section.css";


const SectionTitle = ({ title }) => {
  // useEffect(() => {
  //   const viewContainer = document.querySelector("#view--container");
  //   const innerCircle = document.querySelector("#inner--circle");

  //   viewContainer.addEventListener("mouseover", () => {
  //     innerCircle.style.transform = "scaleX(100%)";
  //   });

  //   return () => {
  //     viewContainer.removeEventListener("mouseover");
  //   };
  // }, []);

  return (
    <>
      <div className="flex justify-between items-center max-w-[1080px] mx-4 md:mx-auto">
        <div className=" my-14 text-3xl text-zinc-800 uppercase font-semibold font-lexend-deca">
          {title}
        </div>

        <Link
          id="view--container"
          to="/product"
          className=" border border-[#62287C] px-3 py-1 relative overflow-hidden"
        >
          <p className="relative">View all</p>
          <div
            id="inner--circle"
            className="w-3 h-3 bg-[#62287C] rounded-full absolute -top-2 -left-2"
          ></div>
        </Link>
      </div>
    </>
  );
};

export default SectionTitle;
