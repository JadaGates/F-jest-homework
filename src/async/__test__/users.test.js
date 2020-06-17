import mockAxios from "axios";
import getUsers from "../users";

jest.mock("axios");
describe("users", () => {
  test("should get users data with mock axios get", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {},
      })
    );
    await expect(getUsers()).resolves.toEqual({});
  });
});
