import React, {FC} from 'react';
import Header from "../../Components/Header/Header";
import appStyles from "./appStyles.module.scss"
import ArticlePage from "../ArticlePage/ArticlePage";
import MainPage from "../MainPage/MainPage";
import {Route, Switch} from "react-router-dom";
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
        <div className={appStyles.app}>
            <Header/>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/articles/:id" component={ArticlePage}/>
            </Switch>
        </div>
    );
}

export default App;

