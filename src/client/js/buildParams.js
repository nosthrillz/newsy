/* Creates object with parameters necessary for API call */

import { getKey } from "./getKey";

export async function buildParams(params) {
  let formText = document.querySelector("#txt").value;
  let formURL = document.querySelector("#url").value;

  // populate params
  params.lang = "en";
  formText == ""
    ? (params.content = `&url=${formURL}`)
    : (params.content = `&txt=${encodeURIComponent(formText)}`);
  params.model = "general";

  const keyResponse = await getKey(); // fetch API key from backend
  try {
    params.key = keyResponse;
  } catch (error) {
    console.log(error);
  }
}
