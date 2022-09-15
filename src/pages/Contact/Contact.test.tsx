import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { act, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Contact from "./Contact";


const successResponseStatus: EmailJSResponseStatus = {
  text : "test",
  status : 200
};

const errorResponseStatus: EmailJSResponseStatus = {
  text : "test",
  status : 400
};

describe("Contact", () => {

  describe("when submit form button is clicked", () => {

    it("should send an email", async () => {
      const promise = Promise.resolve(successResponseStatus);
      const sendFormMock = jest.spyOn(emailjs, "sendForm").mockImplementation(jest.fn(() => promise));

      render(<Contact />);
      user.click(screen.getByRole("button", { name: "Send" }));

      expect(sendFormMock).toHaveBeenCalled();

      // This prevents awful act warning
      // act warning happens because setState is called when sendForm has resolved but we don't wait for it
      await act(async () => {
        await promise;
      });
    });

    describe("when email has been successfully sent", () => {

      it("should display a success alert", async () => {
        const promise = Promise.resolve(successResponseStatus);
        jest.spyOn(emailjs, "sendForm").mockImplementation(jest.fn(() => promise));

        render(<Contact />);
        user.click(screen.getByRole("button", { name: "Send" }));

        await act(async () => {
          await promise;
        });

        expect(screen.getByTestId("success-alert")).toBeInTheDocument();
      });

    });

    describe("when email has not been sent", () => {

      it("should display an error alert", async () => {
        const promise = Promise.resolve(errorResponseStatus);
        jest.spyOn(emailjs, "sendForm").mockImplementation(jest.fn(() => promise));

        render(<Contact />);
        user.click(screen.getByRole("button", { name: "Send" }));

        await act(async () => {
          await promise;
        });

        expect(screen.getByTestId("error-alert")).toBeInTheDocument();
      });

    });

  });

});
