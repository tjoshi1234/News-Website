const api_key="4aa3b13a5165401b98eb7051a2d2bc27";
const url="https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchnews("India"));

async function fetchnews(query){

    const res=await fetch(`${url}${query}&apiKey=${api_key}`);
    const data=await res.json();
    console.log(data)
    binddata(data.articles)
}

function binddata(articles){

    console.log(articles[0]);

    const CardsContainer=document.getElementById('cards-container');
    const NewsCardTemplate=document.getElementById('template-news-card');

    CardsContainer.innerHTML="";

    articles.forEach(element => {
        
        if(!element.urltoImage) return;

        const cardclone=NewsCardTemplate.content.cloneNode(true);
        filldata(cardclone,element);
        CardsContainer.appendchild(cardclone);
    });

}

    function filldata(cardclone,article){

        const newsImg=document.getElementById('news-img');
        const newsTitle=document.getElementById('news-title');
        const newSrc=document.getElementById('news-src');
        const newsDesc=document.getElementById('news-desc');

        const date=new Date(article.publishedAt).toLocaleString("en-US",{
            timeZone: "Asia/Jakarta"
        });

        newsImg.src=article.urltoImage;
        newsTitle.innerHTML=article.title;
        newsDesc.innerHTML=article.description;
        newSrc.innerHTML=date;

    }

