import React, {FC} from 'react';
import Header from "../../Components/Header/Header";
import Article from "../../Components/Article/Article";
import "./appStyles.scss"
const App: FC = () => {
    // const getArticles = (function(url: string):any{
    //     let response = fetch(url).then((res:any)=>{
    //         if (res.ok) {
    //             return res.json();
    //         } else {
    //             return Promise.reject(`Ошибка ${res.status}`);
    //         }
    //     }).then((data: any)=>{
    //         return data;
    //     })
    // })("https://hacker-news.firebaseio.com/v0/newstories")

    const articles: any = [
        {
            id: 1,
            articleRating: 13,
            author: "Peter Krotov",
            articleName: "SuperArticle",
            date: "22/05/2022"
        },
        {
            id: 2,
            articleRating: 13,
            author: "Peter Krotov",
            articleName: "SuperArticle",
            date: "22/05/2022"
        },
        {
            id: 3,
            articleRating: 13,
            author: "Peter Krotov",
            articleName: "SuperArticle",
            date: "22/05/2022"
        },
        {
            id: 4,
            articleRating: 13,
            author: "Peter Krotov",
            articleName: "SuperArticle",
            date: "22/05/2022"
        },
        {
            id: 5,
            articleRating: 13,
            author: "Peter Krotov",
            articleName: "SuperArticle",
            date: "22/05/2022"
        },
        {
            id: 6,
            articleRating: 13,
            author: "Peter Krotov",
            articleName: "SuperArticle",
            date: "22/05/2022"
        },
        {
            id: 7,
            articleRating: 13,
            author: "Peter Krotov",
            articleName: "SuperArticle",
            date: "22/05/2022"
        },
        {
            id: 8,
            articleRating: 13,
            author: "Peter Krotov",
            articleName: "SuperArticle",
            date: "22/05/2022"
        },
        {
            id: 9,
            articleRating: 13,
            author: "Peter Krotov",
            articleName: "SuperArticle",
            date: "22/05/2022"
        },
        {
            id: 10,
            articleRating: 13,
            author: "Peter Krotov",
            articleName: "SuperArticle",
            date: "22/05/2022"
        },
        {
            id: 11,
            articleRating: 13,
            author: "Peter Krotov",
            articleName: "SuperArticle",
            date: "22/05/2022"
        },
        {
            id: 12,
            articleRating: 13,
            author: "Peter Krotov",
            articleName: "SuperArticle",
            date: "22/05/2022"
        }
    ];
    return (
        <div className="app">
            <Header/>
            <div className="articlesContainer">
                {articles.map((elem:any)=>{
                    return <Article key = {elem.id} name={elem.articleName} date={elem.date}  rating={elem.articleRating} author = {elem.author}/>
                })}
            </div>

        </div>
    );
}

export default App;
