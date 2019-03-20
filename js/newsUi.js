class NewsUI {
    constructor(){
        this.articles = [];
    }

    renderAllNews(arrayNews) {
        this.articles = arrayNews;
        let mainBox = document.querySelector('.contentBox');
        mainBox.innerHTML='';
        this.articles.forEach((news) => {
            let node = this.renderOneNews(news);
            mainBox.insertAdjacentHTML("afterbegin", node);
        })
    }

    renderOneNews(news){
        return `<div class="row"><div class="col s12 m7"><div class="card"><div class="card-image"><img src="${news.urlToImage}"></div><div class="card-content"><span class="card-title">${news.title || ''}</span><p>${news.description || ''}</p></div><div class="card-action"><a href="${news.url}" target='_blank'>Read me</a></div></div></div></div>`
    }
}