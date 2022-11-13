import React, {FC} from 'react';
import Header from "../../Components/Header/Header";
import appStyles from "./appStyles.module.scss"
import ArticlePage from "../ArticlePage/ArticlePage";
import MainPage from "../MainPage/MainPage";
import {Route, Switch} from "react-router-dom";
const App: FC = () => {
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

