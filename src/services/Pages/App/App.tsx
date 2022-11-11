import React, {FC} from 'react';
import Header from "../../Components/Header/Header";
import Article from "../../Components/Article/Article";
import "./appStyles.scss"
import ArticlePage from "../ArticlePage/ArticlePage";
import MainPage from "../MainPage/MainPage";
import {Route, Router, Switch, useHistory} from "react-router-dom";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
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

    return (
        <div className="app">
                <Header/>
                <Switch>
                    <Route exact path="/:id" >
                        <ArticlePage />
                    </Route>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
        </div>
    );
}

export default App;
