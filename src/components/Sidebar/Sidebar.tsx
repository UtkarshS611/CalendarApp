import React, { useState } from "react";
import { Button } from "../ui/button";

const Sidebar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div
        className={`${
          menuOpen ? "h-screen" : "h-[4rem]"
        } bg-white overflow-hidden duration-200 fixed w-full md:hidden block shadow-lg p-3`}
      >
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold">Events</div>
          <Button
            className="border-emerald-300 hover:bg-emerald-300"
            onClick={toggleMenu}
            variant={"outline"}
          >
            {menuOpen ? "Close" : "Open"}
          </Button>
        </div>
        <div className="mt-4 py-10 rounded-lg flex flex-col items-center">
          <div className="flex items-center justify-between w-full">
            <p>No events yet</p>
            <Button
              className="border-emerald-300 hover:bg-emerald-300"
              variant={"outline"}
            >
              Create
            </Button>
          </div>
          <img className="w-48" src="/EmptyEvent.svg" alt="Empty" />
        </div>
      </div>
      <div className="hidden md:block fixed h-screen max-w-xs w-full shadow-lg p-4">
        <div className="space-y-[50%]">
          <div>
            <h1 className="font-semibold text-xl">Your events</h1>
            <p>See all of your events in one place</p>
          </div>
          <div className="space-y-16">
            <div className="flex items-center justify-between">
              <p>No events yet</p>
              <Button
                className="border-emerald-300 hover:bg-emerald-300"
                variant={"outline"}
              >
                Create
              </Button>
            </div>
            <img src="/EmptyEvent.svg" alt="Empty" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
