import { buildUrl } from "../js/buildUrl";

describe("Build API call URL", () => {
  const url = "https://www.google.com";
  const text = "testText";
  const key = "abcdefghijklmnopqrstuvwxyz123456"; // mock API key
  let params = {
    key: key,
    lang: "en",
    model: "general",
  };

  test("(1) API call to analyze URL input", () => {
    params.content = `&url=${url}`;
    expect(buildUrl(params)).toEqual(
      `https://api.meaningcloud.com/sentiment-2.1?key=${params.key}&lang=${params.lang}&${params.content}&model=${params.model}`
    );
  });

  test("(2) API call to analyze TEXT input", () => {
    params.content = `&txt=${text}`;
    expect(buildUrl(params)).toEqual(
      `https://api.meaningcloud.com/sentiment-2.1?key=${params.key}&lang=${params.lang}&${params.content}&model=${params.model}`
    );
  });
});
