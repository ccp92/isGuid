import checkIsGuid from "./index";

describe("isGuid", () => {
  it("should return true if the value is a valid GUID", () => {
    expect(checkIsGuid("f4090a94-1774-46d7-b469-109ddec68cd2")).toBe(true);
  });

  it("should return false if the value is not a valid GUID", () => {
    expect(checkIsGuid("f4090a94-1774-46d7-b469-109ddec68cd")).toBe(false);
  });

  describe("when taking an optional version parameter", () => {
    it("can return true or false for version 1", () => {
      expect(
        checkIsGuid("f4090a94-1774-16d7-b469-109ddec68cd2", { version: 1 }),
      ).toBe(true);
      expect(
        checkIsGuid("f4090a94-1774-46d7-b469-109ddec68cd2", { version: 1 }),
      ).toBe(false);
    });

    it("can return true or false for version 2", () => {
      expect(
        checkIsGuid("f4090a94-1774-26d7-b469-109ddec68cd2", { version: 2 }),
      ).toBe(true);
      expect(
        checkIsGuid("f4090a94-1774-46d7-b469-109ddec68cd2", { version: 2 }),
      ).toBe(false);
    });

    it("can return true or false for version 3", () => {
      expect(
        checkIsGuid("f4090a94-1774-36d7-b469-109ddec68cd2", { version: 3 }),
      ).toBe(true);
      expect(
        checkIsGuid("f4090a94-1774-46d7-b469-109ddec68cd2", { version: 3 }),
      ).toBe(false);
    });

    it("can return true or false for version 4", () => {
      expect(
        checkIsGuid("f4090a94-1774-46d7-b469-109ddec68cd2", { version: 4 }),
      ).toBe(true);
      expect(
        checkIsGuid("f4090a94-1774-56d7-b469-109ddec68cd2", { version: 4 }),
      ).toBe(false);
    });

    it("can return true or false for version 5", () => {
      expect(
        checkIsGuid("f4090a94-1774-56d7-b469-109ddec68cd2", { version: 5 }),
      ).toBe(true);
      expect(
        checkIsGuid("f4090a94-1774-46d7-b469-109ddec68cd2", { version: 5 }),
      ).toBe(false);
    });
  });
});
