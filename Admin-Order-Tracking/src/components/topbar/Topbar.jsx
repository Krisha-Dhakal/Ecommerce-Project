import { Navigate } from "react-router-dom";
import { useTheme } from "../../hooks/customContextHook/ThemeContext";
import Button from "../button/Button";
import ToggleButton from "../toggle/ToggleButton";
import { useContext } from "react";
import { AuthContext } from "../../hooks/customContextHook/AuthProvider";

const Topbar = () => {
  const { tokenSetter } = useContext(AuthContext);
  const themeState = useTheme();
  const bgColor = themeState
    ? {
        backgroundColor: "#262626",
        color: "#fff",
        transition: "all 0.3s ease-out",
      }
    : {
        backgroundColor: "#FFFFFF",
        color: "#0D0D0D",
        transition: "all 0.3s ease-out",
      };

  const handleLogout = () => {
    tokenSetter("");
    const removeToken = localStorage.removeItem("token");
    <Navigate to="/login" />;

    return removeToken;
  };

  return (
    <section
      style={bgColor}
      className="h-16 flex items-center justify-between px-12 shadow-lg"
    >
      <div className="uppercase text-xl font-bold cursor-default">Admin</div>
      <div className="flex gap-6 items-center">
        <ToggleButton />
        <Button title="Logout" bgColor="#763996" onClick={handleLogout} />
      </div>
    </section>
  );
};

export default Topbar;
