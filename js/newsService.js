class NewsService {
    constructor(){
        this.apiUrl = 'http://newsapi.org/v2/top-headlines?';
        this.apiKey = '9c27b0f722b84da5a08312d2b125351b';
        this.country = 'ua';
        this.category = 'general';
        this.q = '';
    }

    getData(country=this.country, category=this.category, q=this.q){
        let url = this.apiUrl + 'country=' + country + '&apiKey=' + this.apiKey +'&category=' + category +'&q=' + q;
        return fetch(url)
        .then((response) => response.json())
        .catch((eror) => console.eror(eror))
    }
}