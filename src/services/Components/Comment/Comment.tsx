import React, {FC} from 'react';
import commentStyles from "./commentStyles.module.scss"
import {addComments} from "../../../service/actions/componentsActions";
import {useDispatch, useSelector} from "../../../utils/Types/store";
import {addSecondaryComments} from "../../../utils/Functions/addComments";
import {commentArr} from "../../../utils/Constants/comments";
const Comment:FC<any> = (props) => {
    const dispatch = useDispatch();
    const {rootComments, commentsData} = useSelector((store)=>({
        rootComments: store.component.rootComments,
        commentsData: store.component.commentsData
    }))
    return (
        <div className={commentStyles.commentContainer}>
            <div className={commentStyles.commentHeader}>
                <p className={commentStyles.commentAuthor}>{props.data.by}</p>
                {props.data.children.length > 0 && props.data.parent === null && <p className={commentStyles.commentChildren} onClick={(e:React.MouseEvent<HTMLElement>)=>{
                    e.preventDefault();
                    let arr = addSecondaryComments(props.data.id);
                    let newArr:any = [];
                    let index = commentsData.findIndex((elem:any)=>{return props.data.id === elem.id})
                    newArr = commentsData.slice(0,index).concat(arr).concat(commentsData.slice(index+1,commentsData.length))
                    console.log(newArr)
                    dispatch(addComments(newArr));
                }
                }> Show full <span>&#8594;</span></p>}
            </div>

            <p className={commentStyles.commentContent}>{props.data.content}</p>
            <p className={commentStyles.commentTime}>{props.data.time}</p>
        </div>
    );
};

export default Comment;