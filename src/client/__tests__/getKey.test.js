import "regenerator-runtime/runtime";
import { getKey } from "../js/getKey";

describe("Get API Key", () => {
  test("Testing the getKey() function", () => {
    expect(getKey).toBeDefined();
  });
});
