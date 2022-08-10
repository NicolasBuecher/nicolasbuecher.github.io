import { render } from "@testing-library/react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import TimelineElement from "./TimelineElement";

jest.mock("react-vertical-timeline-component");

const renderTimeLineElement = (type: "school" | "work"): void => {
  render(
    <TimelineElement
      type={type}
      date="someDate"
      title="someTitle"
      subtitle="someSubtitle"
      text="someText"
    />
  );
};

describe("TimelineElement", () => {

  it("should display the date", () => {
    renderTimeLineElement("school");
    expect(VerticalTimelineElement).toBeCalledWith(
      expect.objectContaining({ date: "someDate" }),
      {}
    );
  });

  describe("when prop `type` is `school`", () => {

    it("should render VerticalTimelineElement component with school style", () => {
      renderTimeLineElement("school");
      expect(VerticalTimelineElement).toBeCalledWith(
        expect.objectContaining({
          className : "vertical-timeline-element--education",
          iconStyle : { background: "#3e497a", color: "#fff" }
        }),
        {}
      );
    });

  });

  describe("when prop `type` is `work`", () => {

    it("should render VerticalTimelineElement component with work style", () => {
      renderTimeLineElement("work");
      expect(VerticalTimelineElement).toBeCalledWith(
        expect.objectContaining({
          className : "vertical-timeline-element--work",
          iconStyle : { background: "#e9d35b", color: "#fff" }
        }),
        {}
      );
    });

  });

});
