import { useFetchTaskAssigneesQuery } from "@/features/tasks/hooks/queries/useFetchTaskAssigneesQuery";
import type { CalendarEvent } from "@schedule-x/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getInitials } from "@/utils";

function CustomMonthEvent({ calendarEvent }: { calendarEvent: CalendarEvent }) {
  const { title, start, end, id } = calendarEvent;
  const { data: assignees } = useFetchTaskAssigneesQuery(Number(id));
  const isMultiDay = start.split(" ")[0] !== end.split(" ")[0];

  return (
    <div
      className={`bg-transparent text-white p-4 rounded-sm flex items-center space-x-4 ${
        isMultiDay ? "justify-between" : "justify-start"
      }`}
    >
      <span>{title}</span>
      {assignees?.map((assignee) => (
        <div key={assignee.user_id} className="size-4 rounded-full ">
          <Avatar className="size-5">
            <AvatarImage src={assignee.avatar} />
            <AvatarFallback className="bg-brand-primary text-light-text">{getInitials(assignee.name)}</AvatarFallback>
          </Avatar>
        </div>
      ))}
    </div>
  );
}

export default CustomMonthEvent;
