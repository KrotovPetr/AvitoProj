import React, {FC, useEffect} from 'react';
import commentStyles from "./commentStyles.module.scss"
import {useDispatch, useSelector,} from "../../utils/Types/store";
import {TComment} from "../../utils/Types/types";
import {getSecondaryComments} from "../../Services/actions/componentsActions";
import {getParentName} from "../../utils/Functions/getParentName";

//компонент комментария на странице статьи
const Comment: FC<TComment> = (props) => {
    const dispatch = useDispatch();
    const {commentsData} = useSelector((store) => ({
        commentsData: store.component.commentsData,
    }))
    useEffect(() => {
    }, [commentsData])
    return (
        <div className={commentStyles.commentContainer}>
            <div className={commentStyles.commentHeader}>{
                props.data.parent === null ? <p className={commentStyles.commentAuthor}>{props.data.by}</p> :
                    <p className={commentStyles.commentAuthor}>{props.data.by} &#8594; {props.data.parent && commentsData.length > 0 && getParentName(props.data.parent, commentsData)}</p>
            }
                {props.data.children.length > 0 && !props.data.hasShown && props.data.parent === null &&
                    <p className={commentStyles.commentChildren} onClick={(e: React.MouseEvent<HTMLElement>) => {
                        e.preventDefault();
                        dispatch(getSecondaryComments(props.data.id, commentsData))
                    }
                    }> Show full <span>&#8594;</span></p>}
            </div>
            <p className={commentStyles.commentContent}>{props.data.content}</p>
            <p className={commentStyles.commentTime}>{props.data.time}</p>
        </div>
    );
};

export default Comment;