import React, {FC, useEffect, useState} from 'react';
import articlePageStyles from "./articlePageStyles.module.scss";
import {useHistory} from "react-router-dom";
import Comment from "../../Components/Comment/Comment";
import {useDispatch, useSelector} from "../../utils/Types/store";
import {saveRootComments} from "../../Services/actions/componentsActions";
import {articleInfo} from "../../utils/Constants/articleInfo";

const ArticlePage: FC = () => {
    const [comments, setComments] = useState<any>([]);

    const history = useHistory();
    const dispatch = useDispatch();
    const {rootComments, commentsData} = useSelector((store)=>({
        rootComments: store.component.rootComments,
        commentsData: store.component.commentsData,
    }))

    useEffect(()=>{
        if( commentsData && commentsData.length===0){
            dispatch(saveRootComments())
        }
        setComments(commentsData);
    },[rootComments,commentsData])

    return (
        <div className={articlePageStyles.mainContainer}>
            <div className={articlePageStyles.navigationPanel}>
                <p className={articlePageStyles.repLink} onClick={(e:React.MouseEvent<HTMLElement>):void=>{
                    e.preventDefault();
                    history.replace("/")
                }}>
                    <span> &#8592;</span> На главную
                </p>
            </div>
            <div className={articlePageStyles.article}>
                <div className={articlePageStyles.articleContainer}>
                    <h1 className={articlePageStyles.articleName}>{articleInfo.name}</h1>
                    <div className={articlePageStyles.articleDescription}>
                        <p className={articlePageStyles.articleDate}>{articleInfo.date}</p>
                        <div className={articlePageStyles.articleCommentsAmount}>
                            <p>{articleInfo.commentsAmount}</p>
                            <div className={articlePageStyles.articlesLogo} ></div>
                        </div>
                    </div>
                    <div className={articlePageStyles.articleContent}>{articleInfo.content}</div>
                    <div className={articlePageStyles.articlePostContent}>
                        <p className={articlePageStyles.articleAuthor}>{articleInfo.author}</p>
                        <p className={articlePageStyles.articleLink}> Original: {articleInfo.url}</p>
                    </div>
                    <div className={articlePageStyles.commentsContainer}>
                        <div className = {articlePageStyles.commentsTop}>
                            <p className={articlePageStyles.commentsHeader}>Comments</p>
                            <button className={articlePageStyles.reloadButton} onClick={(e: React.MouseEvent<HTMLButtonElement>)=>{
                                e.preventDefault();
                                dispatch(saveRootComments())
                            }}>Обновить</button>
                        </div>
                        <div className={articlePageStyles.commentsPool}>
                            {
                               comments.length > 0 && comments.map((elem:any)=>{
                                    return <Comment key = {elem.id} data = {elem}/>
                            })
                            }

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ArticlePage;