import React, {FC} from 'react';
import commentStyles from "./commentStyles.module.scss"
const Comment:FC<any> = (props) => {
    return (
        <div className={commentStyles.commentContainer}>
            <div className={commentStyles.commentHeader}>
                <p className={commentStyles.commentAuthor}>{props.data.by}</p>
                {props.data.children.length > 0 && <p className={commentStyles.commentChildren}> Show full <span>&#8594;</span></p>}
            </div>

            <p className={commentStyles.commentContent}>{props.data.content}</p>
            <p className={commentStyles.commentTime}>{props.data.time}</p>
        </div>
    );
};

export default Comment;