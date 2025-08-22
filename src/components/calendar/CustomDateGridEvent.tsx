type props = {
  calendarEvent: {
    id: string | number;
    title: string;
    start: string;
    end: string;
  };
};

export default function CustomDateGridEvent({ calendarEvent }: props) {
  const colors = ["#ACBF40", "#78862D", "#C5D279", "#EEF2D9"];
  const style = {
    height: "50x",
    width: "100%",
    position: "absolute",
    top: 0,
    background: colors[Math.floor(Math.random() * 3)],
    color: "black",
    padding: "5px",
    borderRadius: 5,
    border: "1px solid white",
    fontSize: "20px",
    fontFamily: "monospace",
  };
  return <div style={style}>{calendarEvent.title}</div>;
}
