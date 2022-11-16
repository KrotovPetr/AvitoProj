import React, {FC, useEffect, useState} from 'react';
import articlePageStyles from "./articlePageStyles.module.scss"
import {useHistory, useLocation} from "react-router-dom";
import {
    clearAllComments,
    getCurrentArticleFromServer,
    saveRootComments
} from "../../Services/actions/componentsActions";
import {useDispatch, useSelector} from "../../utils/Types/store";
import {TElem} from "../../utils/Types/types";
import Comment from "../../Components/Comment/Comment";
import {v4 as uuidv4} from 'uuid';
import logo from '../../utils/Pictures/bubble-chat.png';

const ArticlePage: FC = () => {
    const location = useLocation();
    const [comments, setComments] = useState<[] | TElem[]>([]);
    const history = useHistory();
    const dispatch = useDispatch();
    const {currentArticle, rootComments, commentsData} = useSelector((store) => ({
        currentArticle: store.component.currentArticle,
        rootComments: store.component.rootComments,
        commentsData: store.component.commentsData,
    }))
    useEffect(() => {
        if (commentsData && commentsData.length === 0) {
            dispatch(saveRootComments())
        }
        setComments(commentsData);
    }, [commentsData])

    useEffect(() => {
        if (currentArticle === null) {
            let id: string = location.pathname.split("/")[2];

            dispatch(getCurrentArticleFromServer(id))
        }
    }, [currentArticle, rootComments])

    return (
        <div className={articlePageStyles.mainContainer}>
            {currentArticle && <div className={articlePageStyles.contentContainer}>
                <div className={articlePageStyles.navigationPanel}>
                    <p className={articlePageStyles.repLink} onClick={(e: React.MouseEvent<HTMLElement>): void => {
                        e.preventDefault();
                        dispatch(clearAllComments());
                        history.replace("/")
                    }}>
                        <span> &#8592;</span> Back
                    </p>
                </div>
                <div className={articlePageStyles.article}>
                    <div className={articlePageStyles.articleContainer}>
                        <h1 className={articlePageStyles.articleName}>{currentArticle.title}</h1>
                        <div className={articlePageStyles.articleDescription}>
                            <p className={articlePageStyles.articleDate}>{currentArticle.time}</p>
                            <div className={articlePageStyles.articleCommentsAmount}>
                                <p>{currentArticle.descendants}</p>
                                <img className={articlePageStyles.articlesLogo}
                                     src={logo}/>
                            </div>
                        </div>
                        {/*{currentArticle.text ?*/}
                        {/*    <div className={articlePageStyles.articleContent}>{currentArticle.text}</div> :*/}
                        {/*    null*/}
                        {/*}*/}
                        <div className={articlePageStyles.articlePostContent}>
                            <p className={articlePageStyles.articleAuthor}>{currentArticle.by}</p>
                            {
                                currentArticle.url.length !== 0 ?
                                    <p className={articlePageStyles.articleLink}> Original: <a
                                        href={currentArticle.url}
                                        className={articlePageStyles.link}>{currentArticle.url}</a></p> :
                                    <p className={articlePageStyles.articleLink}>Sorry, the author did not specify the
                                        link</p>
                            }
                        </div>
                        <div className={articlePageStyles.commentsContainer}>
                            <div className={articlePageStyles.commentsTop}>
                                <p className={articlePageStyles.commentsHeader}>Comments</p>
                                <button className={articlePageStyles.reloadButton}
                                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                            e.preventDefault();
                                            dispatch(clearAllComments());
                                        }}>Reload
                                </button>
                            </div>
                            <div className={articlePageStyles.commentsPool}>
                                {
                                    //@ts-ignore:
                                    comments.length > 0 ? comments.map((elem: TElem) => {
                                            return <Comment data={elem} key={uuidv4()}/>
                                        }) :
                                        <p className={articlePageStyles.errorInfo}>Комментариев пока нет</p>
                                }

                            </div>
                        </div>
                    </div>

                </div>
            </div>}
        </div>
    );
};

export default ArticlePage;