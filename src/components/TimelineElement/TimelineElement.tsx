import { School, Work } from "@mui/icons-material";
import { ReactElement } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import TimelineElementContent from "./TimelineElementContent";

interface TimelineElementProps {
  type: "school" | "work";
  date: string;
  title: string;
  subtitle: string;
  text?: string;
}

function TimelineElement({ type, date, title, subtitle, text = "" }: TimelineElementProps): ReactElement {

  if (type === "school") {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date={date}
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<School />}
      >
        <TimelineElementContent title={title} subtitle={subtitle} text={text} />
      </VerticalTimelineElement>
    );
  }

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      iconStyle={{ background: "#e9d35b", color: "#fff" }}
      icon={<Work />}
    >
      <TimelineElementContent title={title} subtitle={subtitle} text={text} />
    </VerticalTimelineElement>
  );
}

export default TimelineElement;
