// create URI based on data
export function buildUrl(data) {
  return `https://api.meaningcloud.com/sentiment-2.1?key=${data.key}&lang=${data.lang}&${data.content}&model=${data.model}`;
}
