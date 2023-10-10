//creating a template for news ul
export function createNewsList(news, newsList) {
  for (const item of news.articles) {
    const { title, image, description, url, author, publishedAt } = item;
    const markUp = `
      <li class="newsItem">
      <h3>${title}</h3>
      <div class = "articleBlock">
      <img class="articleImg" src="${image}" onerror="this.onerror=null; this.src='assets/img/newsDefault.jpg';"> 
      
      <p class = "articleText">${
        description ? description : "No description"
      } <a href="${url}">Show more</a> </p>
      </div>
      <div class ="articleFooter"></div>
      <p>${author ? author : "Author Unknown"}, ${new Date(
      publishedAt,
    ).toLocaleString()}</p>
      </li>
      `;

    newsList.insertAdjacentHTML("afterbegin", markUp);
  }
}
