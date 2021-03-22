/* Handles form submission */

import { buildParams } from "./buildParams";
import { getSentiment } from "./getSentiment";
import { getKey } from "./getKey";

export async function handleSubmit(formText, formURL) {
  const params = {};

  // fetch API key from backend and add to params
  const keyResponse = await getKey();
  try {
    params.key = keyResponse;
  } catch (error) {
    console.log(error);
  }

  // generate the rest of parameters for API call
  await buildParams(params, formText, formURL);
  try {
    getSentiment(params); // make request to MeaningCloud API
  } catch (error) {
    console.log(error);
  }
}
