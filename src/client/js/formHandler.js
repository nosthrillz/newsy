/* Handles form submission */

import { buildParams } from "./buildParams";
import { getSentiment } from "./getSentiment";

export async function handleSubmit() {
  const params = {};

  await buildParams(params);
  try {
    getSentiment(params); // make request to MeaningCloud
  } catch (error) {
    console.log(error);
  }
}
