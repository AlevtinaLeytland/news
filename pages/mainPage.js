import {
  renderNewsBySelect,
  searchByKey,
  showDefaultNews,
} from "./newsPage.js";
import { showRandomQuote } from "./quotePage.js";

const newsList = document.querySelector(".newsList");
window.addEventListener("load", () => {
  showRandomQuote();
  searchByKey(newsList);
  renderNewsBySelect(newsList);
  showDefaultNews(newsList);
});
