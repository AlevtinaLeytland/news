import { getNewsBySearch, getNewsBySelect } from "../api/api.js";
import { errorHandler } from "../components/errorHandler.js";
import {
  createCategoryOptions,
  createCountryOptions,
} from "../components/optionsComponent.js";
import { createNewsList } from "../components/template.js";
import { countriesValue, countriesLabel, categories } from "../lib/data.js";

//Function for news search by keyword
export function searchByKey(newsList) {
  const searchNews = document.querySelector(".searchNews");
  searchNews.addEventListener("submit", submitHandler);

  function submitHandler(event) {
    event.preventDefault();
    const searchInputValue = event.target.elements.search.value;
    renderNewsBySearch(searchInputValue, newsList);
  }
}

async function renderNewsBySearch(searchInputValue, newsList) {
  try {
    const news = await getNewsBySearch(searchInputValue); //server error
    console.log(news);
    if (news.status === "error") {
      return errorHandler(news, newsList);
    }
    newsList.innerHTML = "";
    createNewsList(news, newsList);
  } catch (error) {
    console.log(error);
    errorHandler(error, newsList);
  }
}

export async function renderNewsBySelect(newsList) {
  const selectElem = document.querySelector(".country");
  const selectCategoryItem = document.querySelector(".categories");
  selectCategoryItem.append(...createCategoryOptions(categories));
  selectElem.append(...createCountryOptions(countriesValue, countriesLabel));
  selectElem.addEventListener("change", async (event) => {
    try {
      const news = await getNewsBySelect(
        event.target.value,
        selectCategoryItem.value,
      );
      if (news.status === "error") {
        return errorHandler(news, newsList);
      }
      newsList.innerHTML = "";
      createNewsList(news, newsList);
    } catch (error) {
      console.log(error);
      errorHandler(error, newsList);
    }
  });

  selectCategoryItem.addEventListener("change", async (event) => {
    const news = await getNewsBySelect(selectElem.value, event.target.value);
    newsList.innerHTML = "";
    createNewsList(news, newsList);
  });
}
export async function showDefaultNews(newsList) {
  const selectElem = document.querySelector(".country");
  const selectCategoryItem = document.querySelector(".categories");
  try {
    const news = await getNewsBySelect(
      selectElem.value, //забираємо те що на даний момент обрано
      selectCategoryItem.value,
    );
    newsList.innerHTML = "";
    createNewsList(news, newsList);
  } catch (error) {
    console.log(error);
    errorHandler(error, newsList);
  }
}
