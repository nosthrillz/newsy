/* Makes request to MeaningCloud with parameters*/

import { updateUI } from "./updateUI";

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

// create URI based on data
const buildUrl = (data) => {
  return `https://api.meaningcloud.com/sentiment-2.1?key=${data.key}&lang=${data.lang}&${data.content}&model=${data.model}`;
};

// clear form results
const clearResults = () => {
  const paras = document.querySelector("#results").querySelectorAll("p");
  for (let para of paras) para.innerHTML = "";
};
