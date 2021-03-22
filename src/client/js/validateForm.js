export function validateForm(urlInput, txtInput) {
  let err = "";

  if (urlInput == "" && txtInput == "") err = "Paste a URL or text to assess.";
  else if (txtInput == "")
    if (!validateUrl(urlInput)) err = "Paste a valid URL.";

  return err;
}

function validateUrl(value) {
  // Regular Expression for URL validation https://gist.github.com/dperini/729294
  //
  // Author: Diego Perini
  // Created: 2010/12/05
  // Updated: 2018/09/12
  // License: MIT
  // Copyright (c) 2010-2018 Diego Perini (http://www.iport.it)

  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
}
