import React, {FC, useEffect, useState} from 'react';
import commentStyles from "./commentStyles.module.scss"
import {useDispatch, useSelector,} from "../../utils/Types/store";
import {getSecondaryComments} from "../../Services/actions/componentsActions";
const Comment:FC<any> = (props) => {
    const [hasShown, setShows] = useState<any>(false);
    const dispatch = useDispatch();
    const {commentsData, updateDetector} = useSelector((store)=>({
        commentsData: store.component.commentsData,
        updateDetector: store.component.updateDetector,
    }))
    useEffect(()=>{
        setShows(false);
    },[updateDetector])
    return (
        <div className={commentStyles.commentContainer}>
            <div className={commentStyles.commentHeader}>
                <p className={commentStyles.commentAuthor}>{props.data.by}</p>
                {props.data.children.length > 0 && !hasShown && props.data.parent === null && <p className={commentStyles.commentChildren} onClick={(e:React.MouseEvent<HTMLElement>)=>{
                    e.preventDefault();
                    dispatch(getSecondaryComments(props.data.id, commentsData))
                    setShows(true);
                }
                }> Show full <span>&#8594;</span></p>}
            </div>
            <p className={commentStyles.commentContent}>{props.data.content}</p>
            <p className={commentStyles.commentTime}>{props.data.time}</p>
        </div>
    );
};

export default Comment;