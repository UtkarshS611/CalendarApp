import { useState } from "react";
import { Button } from "../ui/button";

const Calendar = () => {
  const months = [
    "January",
    "February",
    "March",
  ];

  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const nextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % months.length);
  };

  // Function to toggle to the previous month
  const previousMonth = () => {
    setCurrentMonthIndex((prevIndex) =>
      (prevIndex - 1 + months.length) % months.length
    );
  };

  const dates = Array.from({ length: 31 }, (_, index) => index + 1);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


  return (
    <section className="text-center h-full relative">
      <h1 className="font-semibold text-3xl">Calendar</h1>
      <div className="shadow-md rounded-lg space-y-2 w-fit p-6">
        <div className="flex items-center justify-between w-full">
          <p>{months[currentMonthIndex]} 2024</p>
          <div className="space-x-1">
            <Button onClick={nextMonth} variant={"outline"}>Next</Button>
            <Button onClick={previousMonth} variant={"outline"}>Prev</Button>
          </div>
        </div>
        <div className="grid grid-cols-7 grid-row-5 gap-2">
          {days.map((day, index) => {
            return <div key={index}>{day}</div>;
          })}
          {dates.map((date, index) => {
            return (
              <div
                key={index}
                className="bg-gray-100 text-center w-10 rounded-[5px] cursor-pointer"
              >
                {date}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Calendar;
