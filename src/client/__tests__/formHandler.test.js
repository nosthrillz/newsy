import "regenerator-runtime/runtime";
import { handleSubmit } from "../js/formHandler";

describe("Submit form", () => {
  test("Testing form submission", () => {
    expect(handleSubmit).toBeDefined();
  });
});
