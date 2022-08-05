import { render, screen } from "@testing-library/react";
import TimelineElementContent from "./TimelineElementContent";

describe("TimelineElementContent", () => {

  beforeEach(() => {
    render(
      <TimelineElementContent title="someTitle" subtitle="someSubtitle" text="someText" />
    );
  });

  it("should display title prop", () => {
    expect(screen.getByText("someTitle")).toBeInTheDocument();
  });

  it("should display subtitle prop", () => {
    expect(screen.getByText("someSubtitle")).toBeInTheDocument();
  });

  it("should display text prop", () => {
    expect(screen.getByText("someText")).toBeInTheDocument();
  });

});
