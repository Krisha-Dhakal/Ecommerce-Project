import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import "../index.css";
import { useTheme } from "../hooks/customContextHook/ThemeContext";

const Layout = () => {
  const themeState = useTheme();
  const bgColor = themeState
    ? {
        // Dark mode
        backgroundColor: "#404040",
        color: "#8C8B8C",
        transition: "all 0.3s ease-out",
      }
    : {
        // Light Mode
        backgroundColor: "#ECECEC",
        color: "#262626",
        transition: "all 0.3s ease-out",
      };

  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <main className="flex flex-grow">
        <aside className="w-max md:w-64">
          <Sidebar />
        </aside>
        <section className="flex-grow w-96 md:w-full py-6 px-8" style={bgColor}>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Layout;
