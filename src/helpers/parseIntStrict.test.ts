import parseIntStrict from "./parseIntStrict";

describe("parseIntStrict", () => {

  it("should return `undefined` if `value` is empty", () => {
    expect(parseIntStrict("")).toBeUndefined();
  });

  it("should return `undefined` if `value` is not a number", () => {
    expect(parseIntStrict("a")).toBeUndefined();
  });

  it("should return `undefined` if `value` begins with zeros", () => {
    expect(parseIntStrict("001")).toBeUndefined();
  });

  it("should return `undefined` if `value` is not an integer", () => {
    expect(parseIntStrict("1.25")).toBeUndefined();
  });

  it("should return the number if `value` is a valid negative integer", () => {
    /* eslint-disable-next-line no-magic-numbers */
    expect(parseIntStrict("-5")).toBe(-5);
  });

  it("should return the number if `value` is a valid positive integer", () => {
    expect(parseIntStrict("+5")).toBe(5);
  });

  it("should return the number if `value` is a valid integer", () => {
    expect(parseIntStrict("10")).toBe(10);
  });

});
