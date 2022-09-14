import ProjectList from "./ProjectList";

// This is not a unit test but a production test
describe("ProjectList", () => {

  it("should not have the same id twice", () => {
    const uniqueIds: Array<number> = [];
    expect(ProjectList.every(({ id }) => {
      const isDuplicate = uniqueIds.includes(id);
      if (isDuplicate) {
        return false;
      }
      uniqueIds.push(id);
      return true;
    })).toBeTruthy();
  });

});
