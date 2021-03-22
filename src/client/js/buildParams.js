/* Creates object with parameters necessary for API call */

export async function buildParams(params, formText, formURL) {
  // populate params
  params.lang = "en";
  formText == ""
    ? (params.content = `&url=${formURL}`)
    : (params.content = `&txt=${encodeURIComponent(formText)}`);
  params.model = "general";
}
