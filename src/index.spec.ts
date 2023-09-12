import isGuid from "./index";

describe("isGuid", () => {
  it("should return true if the value is a valid GUID", () => {
    expect(isGuid("00000000-0000-0000-0000-000000000000")).toBe(true);
  });
  it("should return false if the value is not a valid GUID", () => {
    expect(isGuid("00000000-0000-0000-0000")).toBe(false);
  });
});
