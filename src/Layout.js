import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-gray-100 min-h-[100vh] px-3 *:max-w-[70rem] *:mx-auto ">
      <Toaster position="top-right" />
      <p className="text-2xl text-green-400 font-bold py-5 w-full">
        Olamide's Games
      </p>
      <Outlet />
    </div>
  );
}

export default Layout;
