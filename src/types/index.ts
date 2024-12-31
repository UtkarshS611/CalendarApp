export interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
  }
  
  export interface CalendarContextType {
    events: Event[];
    addEvent: (event: Event) => void;
    updateEvent: (event: Event) => void;
    deleteEvent: (id: string) => void;
  }