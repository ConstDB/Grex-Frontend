import { CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { formatDateToLong } from "@/utils";
import { recent_activity } from "@/mocks/users";

export default function UserRecentActivities() {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
      <Card className="bg-dark-surface border-dark-muted rounded">
        <ScrollArea className="h-[400px]">
          <CardContent className="pt-6">
            {recent_activity.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-4 mb-6">
                <div className="mt-1">
                  {activity.type === "task_completed" ? (
                    <CheckCircle2 className="size-5 text-green-500" />
                  ) : (
                    <Clock className="size-5 text-blue-500" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm">{activity.description}</p>
                  <p className="text-xs text-muted-foreground">{formatDateToLong(activity.timestamp)}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </ScrollArea>
      </Card>
    </div>
  );
}
