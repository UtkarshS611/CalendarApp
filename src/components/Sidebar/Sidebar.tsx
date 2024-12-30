import { Button } from "../ui/button";

const Sidebar = () => {
  return (
    <div className="hidden lg:block fixed h-screen max-w-xs w-full shadow-lg p-4">
      <div className="space-y-[50%]">
        <div>
          <h1 className="font-semibold text-xl">Your events</h1>
          <p>See all of your events in one place</p>
        </div>
        <div className="space-y-16">
          <div className="flex items-center justify-between">
            <p>No events yet</p>
            <Button className="border-emerald-300 hover:bg-emerald-300" variant={"outline"}>
              Create
            </Button>
          </div>
          <img src="/EmptyEvent.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
