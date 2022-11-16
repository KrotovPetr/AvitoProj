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
        }, 60000)
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
                dispatch(getArticlesFromServer())
            }}>Reload
            </button>
            <div className={mainPageStyles.articlesContainer}>

                {// @ts-ignore:
                    articlesArray.length > 0 ? articlesArray.map((elem: TArticleElem) => {
                        return <Article key={uuidv4()} elem={elem}/>
                    }) : <div className={mainPageStyles.spinWrapper}>
                        <p className={mainPageStyles.errorInfo}>Статьи подгружаются</p>
                        <p className={mainPageStyles.errorInfo}>Если загрузка идёт долго, обновите страницу</p>

                        <div className={mainPageStyles.spinner}></div>
                    </div>}
            </div>
        </div>
    );
};

export default MainPage;