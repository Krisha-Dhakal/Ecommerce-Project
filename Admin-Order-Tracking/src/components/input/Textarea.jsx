import { useTheme } from "../../hooks/customContextHook/ThemeContext";

const Textarea = (props) => {
  const themeState = useTheme();
  const bgColor = themeState
    ? {
        // Dark Mode
        backgroundColor: "#262626",
        color: "#fff",
        transition: "all 0.3s ease-out",
      }
    : {
        // Light Mode
        backgroundColor: "#FFFFFF",
        color: "#0D0D0D",
        transition: "all 0.3s ease-out",
      };
  return (
    <div className="flex-1">
      <textarea
        style={bgColor}
        className={`w-full px-4 py-4 mb-1 text-md shadow-lg border placeholder-zinc-500 text-zinc-800 bg-white rounded focus:outline-none focus:ring  ease-linear transition-all duration-150
        ${Boolean(props.error) && "border-red-500"}`}
        {...props}
      />
    </div>
  );
};

export default Textarea;
