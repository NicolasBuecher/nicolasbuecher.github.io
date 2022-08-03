import { School, Work } from "@mui/icons-material";
import { ReactElement } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface TimelineElementProps {
  type: "school" | "work";
  date: string;
  title: string;
  subtitle: string;
  text?: string;
}

function TimelineElement({ type, date, title, subtitle, text }: TimelineElementProps): ReactElement {
  if (type === "school") {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date={date}
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<School />}
      >
        <h3 className="vertical-timeline-element-title">
          {title}
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          {subtitle}
        </h4>
        {text ? <p>{text}</p> : ""}
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
      <h3 className="vertical-timeline-element-title">
        {title}
      </h3>
      <h4 className="vertical-timeline-element-subtitle">
        {subtitle}
      </h4>
      {text ? <p>{text}</p> : ""}
    </VerticalTimelineElement>
  );
}

TimelineElement.defaultProps = {
  text : ""
};

export default TimelineElement;
