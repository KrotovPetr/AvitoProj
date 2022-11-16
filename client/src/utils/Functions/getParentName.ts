import {TElem} from "../Types/types";

export function getParentName(id: number, commentsArr: TElem[]): string {
    return commentsArr.filter((elem: TElem) =>
        id === elem.id
    )[0]["by"];

}