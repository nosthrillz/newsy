/* Makes request to MeaningCloud with parameters*/

import { updateUI } from "./updateUI";
import { buildUrl } from "./buildUrl";

export async function getSentiment(data) {
  const response = await fetch(buildUrl(data), {
    method: "GET",
    redirect: "follow",
  });

  try {
    const result = await response.json();
    clearResults();
    updateUI(result);
  } catch (error) {
    console.log(error);
  }
}

// clear form results
const clearResults = () => {
  const paras = document.querySelector("#results").querySelectorAll("p");
  for (let para of paras) para.innerHTML = "";
};
