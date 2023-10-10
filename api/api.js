const newsKey = "9eb1b3319c9458b85a7dd71dfabab57a";
const quoteUrl = "https://api.quotable.io";
const baseUrlNews = "https://gnews.io/api/v4/";

//get random Quote function in sidebar
export async function getRandomQuote() {
  const data = await fetch(`${quoteUrl}/random`);
  return await data.json();
}
//get news by selecting country or category
export async function getNewsBySelect(country, category) {
  const data = await fetch(
    `${baseUrlNews}top-headlines?country=${country}&category=${category}&apikey=${newsKey}`,
  );
  return await data.json();
}
//get news by keyword
export async function getNewsBySearch(text) {
  const data = await fetch(`${baseUrlNews}everything?q=${text}`, {
    headers: { "X-Api-Key": newsKey },
  });
  return await data.json();
}
