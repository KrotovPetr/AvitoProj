import React, {FC, useEffect, useState} from 'react';
import mainPageStyles from "./mainPageStyles.module.scss";
import Article from "../../Components/Article/Article";
import {arr} from "../../utils/Constants/articles";
import {useDispatch, useSelector} from "../../utils/Types/store";
import {getArticlesFromServer} from "../../Services/actions/componentsActions";

const MainPage: FC = () => {
    const dispatch = useDispatch();
    const [articles, setArticles] = useState<any>([])
    const {apiURL, articlesArray, articleFetchSuccess} = useSelector((store)=>({
        apiURL: store.component.apiURL,
        articlesArray: store.component.articlesArray,
        articleFetchSuccess: store.component.articleFetchSuccess
    }))

    useEffect(()=>{
        if(articlesArray.length === 0){
            dispatch(getArticlesFromServer(apiURL));
            setArticles(articlesArray)
        }
        setArticles(articlesArray)
    }, [articlesArray])


    return (
        <div className={mainPageStyles.mainContainer}>
            <button className={mainPageStyles.reloadButton} onClick={(e: React.MouseEvent<HTMLButtonElement>)=>{
                e.preventDefault();
                dispatch(getArticlesFromServer(apiURL))
            }}>Обновить</button>
            <div className={mainPageStyles.articlesContainer}>
                {articlesArray.length>0 ? articlesArray.map((elem:any)=>{
                    return <Article key = {elem.id} elem={elem}/>
                }) : <p className={mainPageStyles.warningInfo}>Пожалуйста, подождите, если данные грузятся долго, обновите с помощью кнопки или перезагрузите её</p>}
            </div>
        </div>
    );
};

export default MainPage;