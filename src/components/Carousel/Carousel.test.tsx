import { render, screen } from "@testing-library/react";
import Carousel from "./Carousel";


describe("Carousel", () => {

  it("should display a fullscreen button", () => {
    const content = [{
      img : "",
      alt : ""
    }];
    render(<Carousel content={content} />);
    expect(screen.getByRole("button", { name: "Open Fullscreen" })).toBeInTheDocument();
  });

  describe("when content prop is empty", () => {

    it("should hide the fullscreen button", () => {
      render(<Carousel content={[]} />);
      expect(screen.queryByRole("button", { name: "Open Fullscreen" })).not.toBeInTheDocument();
    });

  });

  describe("when content contains an image", () => {

    it("should display an image and a thumbnail image", () => {
      const content = [{
        img : "Test",
        alt : "Test"
      }];
      render(<Carousel content={content} />);
      expect(screen.getAllByAltText("Test").length).toEqual(2);
    });

  });

  describe("when content prop contains a video", () => {

    it("should display a video and a thumbnail image", () => {
      const content = [{
        img : "Test",
        alt : "Test",
        clip : "Test"
      }];
      render(<Carousel content={content} />);
      expect(screen.getByAltText("Test")).toBeInTheDocument();
    });

  });

});
