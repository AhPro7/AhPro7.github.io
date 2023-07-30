fetch("data/articles.json").then(response => response.json()).then(data => {
    const articles = data.articles.slice(0, 4);

    const articlesContainer = document.querySelector(".articles");

    articles.forEach(article => {
        if(document.URL.match("github.io")){
            if(article.img[0] === '/'){
                article.img = document.URL.split("/")[3] + article.img;
            }
        }

        const articleElement = document.createElement("a");
        articleElement.classList.add("article");
        articleElement.href = `articles/${article.file}`;
        articleElement.innerHTML = `
            <div class="article-info">
              <div class="thumbnail">
                <img src="${article.img}" alt="" />
              </div>
              <span class="article-title">${article.title}</span>
              <span class="article-firstpart">
                ${article.description}
              </span>
              <div class="more-info">
                <span class="date">${article.date}</span>
                ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
              </div>
            </div>
        `;
        articlesContainer.appendChild(articleElement);
    });
})