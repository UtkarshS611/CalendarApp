import Calendar from './components/Calender';
import Sidebar from './components/Sidebar';
import { CalendarProvider } from './context/CalendarContext';

function App() {
  return (
    <CalendarProvider>
      <div className="h-screen bg-gray-100">
        <div className="w-full h-full mx-auto flex lg:flex-row flex-col gap-10">
          <div>
            <Sidebar />
          </div>
          <div className="w-full flex items-center justify-center">
            <Calendar />
          </div>
        </div>
      </div>
    </CalendarProvider>
  );
}

export default App;