const Button = ({ title, onClick, bgColor, ...remainingProps }) => {
  return (
    <>
      <button
        style={{ backgroundColor: bgColor }}
        onClick={onClick}
        className="px-4 py-1 h-max text-white font-semibold uppercase transition-all duration-100 hover:opacity-85 shadow-xl active:translate-y-[1px] rounded-md disabled:bg-slate-500"
        {...remainingProps}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
