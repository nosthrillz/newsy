import "regenerator-runtime/runtime";
import { buildParams } from "../js/buildParams";

describe("Build API call parameters", () => {
  const textEmpty = "";
  const text = "testText";
  const urlEmpty = "";
  const url = "https://www.google.com";
  const key = "abcdefghijklmnopqrstuvwxyz123456"; // mock API key
  let params = {};
  params = { key: key };

  test("(1) URL, Empty text", () => {
    buildParams(params, textEmpty, url);
    expect(params).toEqual({
      key: key,
      lang: "en",
      content: `&url=${url}`,
      model: "general",
    });
  });

  test("(2) Text, Empty URL", () => {
    buildParams(params, text, urlEmpty);
    expect(params).toEqual({
      key: key,
      lang: "en",
      content: `&txt=${text}`,
      model: "general",
    });
  });
});
