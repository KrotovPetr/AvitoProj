import React, {FC} from 'react';
import "./articleStyles.scss"
interface IArticle  {
    name:string,
    date: string,
    author: string,
    rating: number
}

const Article:FC<IArticle> = (props) => {
    return (
        <div className="articleContainer">
            <h1 className="articleName">{props.name}</h1>
            <div className="articleDescription">
                <p className="articleRating">{props.rating}</p>
                <p className="articleAuthor">{props.author}</p>
                <p className="articleDate">{props.date}</p>
            </div>

        </div>
    );
};

export default Article;