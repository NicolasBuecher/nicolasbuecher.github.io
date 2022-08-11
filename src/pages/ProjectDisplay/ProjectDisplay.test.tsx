import { render, screen } from "@testing-library/react";
import Router from "react-router-dom";
import ProjectDisplay from "./ProjectDisplay";

// Mock useParams function
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams : jest.fn()
}));

// Mock ProjectList array
jest.mock("../../pages/Projects/ProjectList.tsx", () => ([{
  id : 0,
  name : "someName",
  image : "someImage",
  skill : "someSkill"
}]));

const renderProjectDisplay = (): void => {
  render(<ProjectDisplay />);
};

// Prevent of logging expected thrown errors
const expectToThrowSilently = (snapshot: string): void => {
  // Remove error logs
  // See https://github.com/facebook/react/issues/11098#issuecomment-523977830
  const spy = jest.spyOn(console, "error");
  spy.mockImplementation(undefined);

  expect(renderProjectDisplay).toThrowErrorMatchingInlineSnapshot(snapshot);

  // Restore error logs
  spy.mockRestore();
};

describe("ProjectDisplay", () => {

  it("should throw if id param is `undefined`", () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: undefined });
    expectToThrowSilently("\"No project id.\"");
  });

  it("should throw if id param is empty", () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "" });
    expectToThrowSilently("\"No project id.\"");
  });

  it("should throw if id param is invalid", () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "001" });
    expectToThrowSilently("\"Invalid project id.\"");
  });

  it("should throw if id param does not match any project", () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "2" });
    expectToThrowSilently("\"Project ID does not match any project.\"");
  });

  it("should display project name matching id param", () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "0" });
    renderProjectDisplay();
    expect(screen.getByText("someName")).toBeInTheDocument();
  });

  it("should display project image matching id param", () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "0" });
    renderProjectDisplay();
    expect(screen.getByAltText("someName")).toBeInTheDocument();
  });

  it("should display project skill matching id param", () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "0" });
    renderProjectDisplay();
    expect(screen.getByText("someSkill")).toBeInTheDocument();
  });

});
