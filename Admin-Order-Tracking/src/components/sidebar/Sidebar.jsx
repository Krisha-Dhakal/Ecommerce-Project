import { NavLink } from "react-router-dom";
import SidebarButton from "../sidebarButton/SidebarButton";
import { sidebarList } from "./sidebarData";
import { useTheme } from "../../hooks/customContextHook/ThemeContext";

const Sidebar = () => {
  return (
    <main className="h-full">
      <section className="flex flex-col h-full items-center text-white bg-primary">
        {sidebarList.map((item) => {
          return (
            <NavLink
              key={item.id}
              className="w-full mx-auto border-b-2 text-inherit border-zinc-500"
              to={item.path}
            >
              <SidebarButton title={item.title} icon={item.icon} />
            </NavLink>
          );
        })}
      </section>
    </main>
  );
};

export default Sidebar;
