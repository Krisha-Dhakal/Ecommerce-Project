const SidebarButton = ({ title, icon }) => {
  return (
    <main className="flex items-center gap-4 w-full h-full py-5 px-12 md:px-5 cursor-pointer  text-lg hover:bg-[#8d8d8d]">
      <div className="hidden md:block">{icon}</div>
      <div>{title}</div>
    </main>
  );
};

export default SidebarButton;
