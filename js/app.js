const selectCountry = document.querySelector('.country');
const selectCategory = document.querySelector('.category');
const selectBtns = document.querySelectorAll('select');

const input = document.querySelector('.search');

const service = new NewsService();
const ui = new NewsUI();

selectBtns.forEach((select) => select.addEventListener('change', getNews));
input.addEventListener('select', getNews)

function getNews() {
    if(selectCountry.value&&selectCategory.value){
        let country = selectCountry.value;
        let category = selectCategory.value;
        let search = input.value;

        service.getData(country, category, search)
            .then((res) => {
                ui.renderAllNews(res.articles)
                console.log(res)
            });
    }
}

