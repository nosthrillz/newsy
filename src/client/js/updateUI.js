/* Updates UI based on received API data */

function updateUI(data) {
  const divvy = document.querySelector("#results");
  const paras = divvy.querySelectorAll("p");

  divvy.style.display = "flex";

  paras[0].innerHTML = data.agreement;
  paras[1].innerHTML = data.subjectivity;
  paras[2].innerHTML = data.irony;
  paras[3].innerHTML = data.confidence;
}

export { updateUI };
