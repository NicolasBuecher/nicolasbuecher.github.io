import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./NotFound";


// Mock navigate
const mockNavigate = jest.fn();

// Mock useNavigate
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate : () => mockNavigate
}));

const renderNotFound = (): void => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
};

describe("NotFound", () => {

  it("should pass the children prop", () => {
    render(
      <BrowserRouter>
        <NotFound>Test</NotFound>
      </BrowserRouter>
    );
    expect(screen.getByRole("alert")).toHaveTextContent("Test");
  });

  it("should redirect to home page", async () => {
    render(
      <BrowserRouter>
        <NotFound timer={100}>Test</NotFound>
      </BrowserRouter>
    );
    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith("/"));
  });

  describe("when children prop is empty", () => {

    it("should not display an alert", () => {
      renderNotFound();
      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });

  });

  describe("when button is clicked", () => {

    it("should redirect to home page", () => {
      renderNotFound();
      user.click(screen.getByRole("link", { name: "Go back Home!" }));
      expect(global.window.location.href).toBe("http://localhost/");
    });

  });


});
