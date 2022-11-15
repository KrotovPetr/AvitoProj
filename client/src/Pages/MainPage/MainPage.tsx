import React, {FC, useEffect, useState} from 'react';
import mainPageStyles from "./mainPageStyles.module.scss";
import Article from "../../Components/Article/Article";
import {useDispatch, useSelector} from "../../utils/Types/store";
import {getArticlesFromServer} from "../../Services/actions/componentsActions";
import {v4 as uuidv4} from 'uuid';

const MainPage: FC = () => {
    const dispatch = useDispatch();
    const [flag, setUpdateFlag] = useState<any>(false)
    const {apiURL, articlesArray, articleFetchSuccess} = useSelector((store) => ({
        apiURL: store.component.apiURL,
        articlesArray: store.component.articlesArray,
        articleFetchSuccess: store.component.articleFetchSuccess
    }))

    const timer: any = () => {
        setTimeout(() => {
            setUpdateFlag(!flag);
        }, 5000)
    }

    useEffect(() => {
        if (articlesArray.length === 0) {
            dispatch(getArticlesFromServer(apiURL));
        }
    }, [articlesArray])

    useEffect(() => {
        dispatch(getArticlesFromServer(apiURL));
        timer();
    }, [flag])

    return (
        <div className={mainPageStyles.mainContainer}>
            <button className={mainPageStyles.reloadButton} onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                clearInterval(timer);
                // timer= setInterval(()=>{
                //     console.log("hooray!")
                //     setUpdateFlag(!flag);
                // },5000)
                dispatch(getArticlesFromServer(apiURL))
            }}>Reload
            </button>
            <div className={mainPageStyles.articlesContainer}>
                {articlesArray.length > 0 ? articlesArray.map((elem: any) => {
                    return <Article key={uuidv4()} elem={elem}/>
                }) : <p className={mainPageStyles.warningInfo}>Пожалуйста, подождите, если данные грузятся долго,
                    обновите с помощью кнопки или перезагрузите её</p>}
            </div>
        </div>
    );
};

export default MainPage;