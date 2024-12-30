import { useState } from "react";
import { Button } from "../ui/button";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Form from "../Form/Form";

const Calendar: React.FC = () => {
  const months = ["January", "February", "March"];
  const dates = Array.from({ length: 31 }, (_, index) => index + 1);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  // Fuction to toggle next month
  const nextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % months.length);
  };

  // Function to toggle to the previous month
  const previousMonth = () => {
    setCurrentMonthIndex(
      (prevIndex) => (prevIndex - 1 + months.length) % months.length
    );
  };

  const [eventFormOpen, setEventFormOpen] = useState<boolean | null>(false);

  const handleEventForm = () => {
    setEventFormOpen((prev) => !prev);
  };

  return (
    <section className="text-center h-full flex flex-col justify-center items-center relative">
      <h1 className="font-semibold text-3xl">Calendar</h1>
      <div className="shadow-md rounded-lg space-y-2 w-fit p-6">
        <div className="flex items-center justify-between w-full">
          <Button onClick={previousMonth} variant={"outline"}>
            <ChevronLeft />
          </Button>
          <p>{months[currentMonthIndex]} 2024</p>
          <Button onClick={nextMonth} variant={"outline"}>
            <ChevronRight />
          </Button>
        </div>
        <div className="grid grid-cols-7 grid-row-5 gap-2">
          {days.map((day, index) => {
            return <div key={index}>{day}</div>;
          })}
          {dates.map((date, index) => {
            return (
              <div
                key={index}
                className="bg-gray-100 text-center w-10 py-2 rounded-[5px] cursor-pointer"
                onClick={handleEventForm}
              >
                {date}
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${eventFormOpen? "block" : "hidden"} absolute`}>
        {/* @ts-ignore */}
        <Form setEventFormOpen={handleEventForm}/>
      </div>
    </section>
  );
};

export default Calendar;
