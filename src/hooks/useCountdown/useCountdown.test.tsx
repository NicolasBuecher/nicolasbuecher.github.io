import { renderHook, waitFor } from "@testing-library/react";
import useCountdown from "./useCountdown";

describe("useCountdown", () => {

  describe("when countdown starts", () => {

    it("should return initial time values", () => {
      const { result } = renderHook(() => useCountdown(100));
      expect(result.current[0]).toBe("00");
      expect(result.current[1]).toBe("10");
    });

  });

  describe("when countdown is running", () => {

    it("should return intermediate time values", async () => {
      const { result } = renderHook(useCountdown, { initialProps: 2000 });
      await waitFor(() => expect(result.current[0]).toBe("01"));
    });

  });

  describe("when countdown is done", () => {

    it("should return 0 time values", async () => {
      const { result } = renderHook(() => useCountdown(100));
      await waitFor(() => expect(result.current[1]).toBe("00"));
    });

  });

});
