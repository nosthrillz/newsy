/* Fetches API key stored on server */

export async function getKey() {
  const response = await fetch("http://localhost:8081/key", {
    method: "GET",
    redirect: "follow",
  });
  try {
    const key = await response.text();
    return key;
  } catch (error) {
    console.log(error);
  }
}
