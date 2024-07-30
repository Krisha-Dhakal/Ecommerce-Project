const Banner = ({ url, bgColor }) => {
  return (
    <div
      className="w-full mx-auto my-12 h-96 "
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={url}
        className={`w-full mx-auto max-w-[1280px]  h-full object-contain `}
        alt="banner"
      />
    </div>
  );
};

export default Banner;
