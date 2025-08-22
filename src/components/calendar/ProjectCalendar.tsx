import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import { createViewWeek } from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { useEffect, useState } from "react";
import "@schedule-x/theme-default/dist/index.css";
import { MOCK_EVENTS } from "@/mocks/projects";
import CustomDateGridEvent from "./CustomDateGridEvent";

const customComponents = {
  dateGridEvent: CustomDateGridEvent,
};

export default function ProjectCalendar() {
  const eventsService = useState(() => createEventsServicePlugin())[0];

  const calendar = useCalendarApp({
    views: [createViewWeek()],
    events: MOCK_EVENTS,
    plugins: [eventsService],
  });

  useEffect(() => {
    eventsService.getAll();
  }, [eventsService]);

  return (
    <div>
      <ScheduleXCalendar
        calendarApp={calendar}
        customComponents={customComponents}
      />
    </div>
  );
}
