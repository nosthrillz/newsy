import { handleSubmit } from "./js/formHandler";
import { validateForm } from "./js/validateForm";
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/results.scss";
import logo from "../client/images/logo.png";
import favicon from "../client/images/favicon-32x32.png";

// Load service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}

// Load image assets dynamically
document.querySelector("header").firstElementChild.src = logo;
document.querySelector("link[rel~='icon']").href = favicon;

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();

  const urlInput = document.querySelector("#url").value;
  const txtInput = document.querySelector("#txt").value;
  const formText = document.querySelector("#txt").value;
  const formURL = document.querySelector("#url").value;

  const invalid = validateForm(urlInput, txtInput);

  invalid == "" ? handleSubmit(formText, formURL) : alert(invalid);
});

// TODO: README
// TODO: Setup/Instructions
