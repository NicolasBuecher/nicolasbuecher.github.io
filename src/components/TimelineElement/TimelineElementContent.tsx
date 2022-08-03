interface TimelineElementContentProps {
  title: string;
  subtitle: string;
  text: string;
}

function TimelineElementContent({ title, subtitle, text }: TimelineElementContentProps): JSX.Element {
  return (
    <div className="timeline-element-content">
      <h3 className="vertical-timeline-element-title">
        {title}
      </h3>
      <h4 className="vertical-timeline-element-subtitle">
        {subtitle}
      </h4>
      {text ? <p>{text}</p> : ""}
    </div>
  );
}

export default TimelineElementContent;
