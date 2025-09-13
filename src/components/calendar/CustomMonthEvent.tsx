import type { CalendarEvent } from "@schedule-x/calendar";

function CustomMonthEvent({ calendarEvent }: { calendarEvent: CalendarEvent }) {
  const { title, start, end } = calendarEvent;
  const isMultiDay = start.split(" ")[0] !== end.split(" ")[0]; // Check if event spans multiple days

  return (
    <div
      style={{
        backgroundColor: "transparent",
        color: "#ffffff",
        padding: "4px",
        borderRadius: "4px",
        fontSize: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: isMultiDay ? "space-between" : "flex-start",
      }}
    >
      <span>{title}</span>
    </div>
  );
}

export default CustomMonthEvent;
