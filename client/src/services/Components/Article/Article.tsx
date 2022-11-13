import React, {FC} from 'react';
import articleStyles from "./articleStyles.module.scss"
import {useHistory} from "react-router-dom";


const Article:FC<any> = (props) => {
    const history = useHistory();
    return (
        <div className={articleStyles.articleContainer} onClick={(e: React.MouseEvent<HTMLDivElement>):void=>{
            history.replace("/articles/"+props.elem.id)
        }}>
            <div className={articleStyles.articlePrimaryDescription}>
                <h1 className={articleStyles.articleName}>{props.elem.title}</h1>
                <div className={articleStyles.ratingContainer}>
                    <p className={articleStyles.articleRating}>{props.elem.score}</p>
                    <span className={articleStyles.star}>★</span>
                </div>

            </div>
            <div className={articleStyles.articleSecondaryDescription}>
                <p className={articleStyles.articleAuthor}>Author: {props.elem.by}</p>
                <p className={articleStyles.articleDate}>Date: {props.elem.time}</p>
            </div>

        </div>
    );
};

export default Article;