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

// load image assets dynamically
document.querySelector("header").firstElementChild.src = logo;
document.querySelector("link[rel~='icon']").href = favicon;

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();

  let invalid = validateForm();

  invalid.length > 0 ? alert(invalid) : handleSubmit();
});

// TODO: Service workers
// TODO: Jest tests for each js file
// TODO: README
// TODO: Udacity instructions: env file contents
