const heroBanner = ({ bgColor }) => {
  return (
    <>
      <div className=" w-full h-96 max-w-[1280px] mx-auto ">
        <img
          src="/public/assets/heroBanner.jpg"
          alt="heroSectionImage"
          className="h-full w-full object-contain "
          style={{ backgroundColor: bgColor }}
        />
      </div>
    </>
  );
};

export default heroBanner;
