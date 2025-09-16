import { tasks_summary } from "@/mocks/users";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function UserTasksStats() {
  return (
    <Card className="bg-dark-surface border-dark-muted rounded">
      <CardHeader className="pb-3">
        <h3 className="text-lg font-medium">Task Statistics</h3>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <p className="text-4xl font-bold text-green-500">{tasks_summary.completed}</p>
          <p className="text-sm text-muted-foreground">Completed</p>
        </div>
        <div className="space-y-1">
          <p className="text-4xl font-bold text-yellow-500">{tasks_summary.pending}</p>
          <p className="text-sm text-muted-foreground">Pending</p>
        </div>
        <div className="space-y-1">
          <p className="text-4xl font-bold text-red-500">{tasks_summary.overdue}</p>
          <p className="text-sm text-muted-foreground">Overdue</p>
        </div>
        <div className="space-y-1">
          <p className="text-4xl font-bold">{tasks_summary.totalAssigned}</p>
          <p className="text-sm text-muted-foreground">Total</p>
        </div>
      </CardContent>
    </Card>
  );
}
