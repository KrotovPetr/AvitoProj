import React, {FC, useEffect, useState} from 'react';
import mainPageStyles from "./mainPageStyles.module.scss";
import {arr} from "../../../utils/Constants/articles";
import Article from "../../Components/Article/Article";
import {useSelector} from "../../../utils/Types/store";
const MainPage: FC = () => {
    const [articles, setArr] = useState<any>([]);
    const {commentsData} = useSelector((store)=>({
        commentsData: store.component.commentsData,
    }))
    return (
        <div className={mainPageStyles.mainContainer}>
            <div className={mainPageStyles.reloadButton}>Обновить</div>
            <div className={mainPageStyles.articlesContainer}>
                {arr.map((elem:any)=>{
                    return <Article key = {elem.id} elem={elem}/>
                })}

            </div>
        </div>
    );
};

export default MainPage;