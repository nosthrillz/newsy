import { validateForm } from "../js/validateForm";

describe("Validate form inputs", () => {
  const urlEmpty = "";
  const urlCorrect = "https://www.google.com";
  const urlWrong = "// a";
  const urlWrong2 = "https://www.google-abc.123";
  const textEmpty = "";
  const text = "This is a text";

  test("Both fields empty", () => {
    expect(validateForm(urlEmpty, textEmpty)).toMatch(
      "Paste a URL or text to assess."
    );
  });

  test("URL empty, text present", () => {
    expect(validateForm(urlEmpty, text).length).toEqual(0);
  });

  test("Correct url, empty text", () => {
    expect(validateForm(urlCorrect, textEmpty).length).toEqual(0);
  });

  test("(1) Incorrect url, empty text", () => {
    expect(validateForm(urlWrong, textEmpty)).toMatch(/valid URL/);
  });

  test("(2) Incorrect url, empty text", () => {
    expect(validateForm(urlWrong2, textEmpty)).toMatch(/valid URL/);
  });
});
