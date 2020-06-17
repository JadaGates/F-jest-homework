import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    const mockUsername = "mocked userName";
    const mockPwd = "mocked Pwd";

    await expect(register(mockUsername, mockPwd)).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    verifyUsername.mockReturnValue(false);
    const mockPwd = "mocked Pwd";
    const mockUsername = "mocked userName";

    await expect(register(mockUsername, mockPwd)).rejects.toThrowError(
      Error("wrong username or password")
    );
  });
});
