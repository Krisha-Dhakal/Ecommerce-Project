const Button = ({ title, onClick, ...remainingProps }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="px-6 py-2 h-max text-white bg-primary font-semibold uppercase transition-all duration-100 hover:bg-secondary shadow-xl active:translate-y-1 rounded-md disabled:bg-slate-500"
        {...remainingProps}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
