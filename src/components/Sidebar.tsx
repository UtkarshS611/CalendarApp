import React from "react";
import { useCalendar } from "../context/CalendarContext";
import { Trash2, Edit } from "lucide-react";

const Sidebar: React.FC = () => {
  const { events, deleteEvent } = useCalendar();
  const [selectedEvent, setSelectedEvent] = React.useState<string | null>(null);

  const sortedEvents = [...events].sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`);
    const dateB = new Date(`${b.date}T${b.time}`);
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <div className="bg-white w-full lg:w-[25rem] rounded-lg shadow p-6 h-full">
      <h2 className="text-2xl text-center font-semibold text-gray-800 mb-6">
        Upcoming Events
      </h2>
      <div className="space-y-4">
        {sortedEvents.map((event) => (
          <div
            key={event.id}
            className={`p-4 rounded-lg border transition-colors ${
              selectedEvent === event.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:bg-gray-50"
            }`}
            onClick={() => setSelectedEvent(event.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{event.title}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(event.date).toLocaleDateString()} at {event.time}
                </p>
                {event.description && (
                  <p className="text-sm text-gray-600 mt-2">
                    {event.description}
                  </p>
                )}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle edit - you can implement this functionality
                  }}
                  className="p-1 text-gray-500 hover:text-blue-500"
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteEvent(event.id);
                  }}
                  className="p-1 text-gray-500 hover:text-red-500"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
        {events.length === 0 && (
          <div className="flex flex-col items-center gap-10">
            <p className="text-gray-500 text-center">No events scheduled</p>
            <img src="/EmptyEvent.svg" className="w-[30%] lg:w-[50%]" alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
