const HomeCard = (props) => {
  return (
    <>
      <main
        style={{ backgroundColor: props.bgColor }}
        className="px-2 py-6 z-30 w-full rounded-md flex flex-col items-center shadow-md text-white"
      >
        <div className="text-6xl">{props.icon}</div>
        <div className="text-2xl pt-4">{props.count}</div>
        <h1 className="text-3xl uppercase font-semibold font-sans">
          {props.title}
        </h1>
      </main>
    </>
  );
};

export default HomeCard;
