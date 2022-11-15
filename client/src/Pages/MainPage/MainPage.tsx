import React, {FC, useEffect, useState} from 'react';
import mainPageStyles from "./mainPageStyles.module.scss";
import Article from "../../Components/Article/Article";
import {useDispatch, useSelector} from "../../utils/Types/store";
import {getArticlesFromServer} from "../../Services/actions/componentsActions";
import {v4 as uuidv4} from 'uuid';
import {TArticleElem} from "../../utils/Types/types";

const MainPage: FC = () => {
    const dispatch = useDispatch();
    const [flag, setUpdateFlag] = useState<boolean>(false)
    const {articlesArray} = useSelector((store) => ({
        articlesArray: store.component.articlesArray,
    }))

    const timer: () => void = (): void => {
        setTimeout(() => {
            setUpdateFlag(!flag);
        }, 5000)
    }

    useEffect(() => {
        if (articlesArray.length === 0) {
            dispatch(getArticlesFromServer());
        }
    }, [articlesArray])

    useEffect(() => {
        dispatch(getArticlesFromServer());
        timer();
    }, [flag])

    return (
        <div className={mainPageStyles.mainContainer}>
            <button className={mainPageStyles.reloadButton} onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                // clearInterval(timer);
                // timer= setInterval(()=>{
                //     console.log("hooray!")
                //     setUpdateFlag(!flag);
                // },5000)
                dispatch(getArticlesFromServer())
            }}>Reload
            </button>
            <div className={mainPageStyles.articlesContainer}>
                {articlesArray.length > 0 ? articlesArray.map((elem: TArticleElem) => {
                    return <Article key={uuidv4()} elem={elem}/>
                }) : <p className={mainPageStyles.warningInfo}>Пожалуйста, подождите, если данные грузятся долго,
                    обновите с помощью кнопки или перезагрузите её</p>}
            </div>
        </div>
    );
};

export default MainPage;