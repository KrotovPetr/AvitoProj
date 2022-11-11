import React, {FC} from 'react';
import "./articleStyles.scss"
import {useHistory} from "react-router-dom";


const Article:FC<any> = (props) => {
    const history = useHistory();
    return (
        <div className="articleContainer" onClick={(e: React.MouseEvent<HTMLDivElement>):void=>{
            history.replace("/"+props.elem.id)
        }}>
            <h1 className="articleName">{props.elem.title}</h1>
            <div className="articleDescription">
                <p className="articleRating">{props.elem.score}</p>
                <p className="articleAuthor">{props.elem.by}</p>
                <p className="articleDate">{props.elem.time}</p>
            </div>

        </div>
    );
};

export default Article;