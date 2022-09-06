import { render, screen } from "@testing-library/react";
import DownloadButton from "./DownloadButton";

describe("DownloadButton", () => {

  it("should pass the children prop", () => {
    render(<DownloadButton>Test</DownloadButton>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  describe("when href prop is not provided", () => {

    it("should disable the button", () => {
      render(<DownloadButton>Test</DownloadButton>);
      expect(screen.getByRole("button")).toHaveClass("Mui-disabled");
    });

  });

  // Cannot test file download event when button is clicked

});
