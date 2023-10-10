import { getRandomQuote } from "../api/api.js";
export async function showRandomQuote() {
  const data = await getRandomQuote();
  const pElem = document.querySelector(".textQuote");
  const spanElem = document.querySelector(".quoteAuthor");
  pElem.textContent = data.content;
  spanElem.textContent = data.author;
}
