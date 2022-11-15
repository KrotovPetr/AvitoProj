//Типизация статьи
export type TArticle = {
    elem: {
        by: string,
        descendants: number,
        id: number,
        kids?: number[],
        score: number,
        time: string,
        title: string,
        type: string,
        url: string
    }
    id?: number
}

//Типизация комментария
export type TComment = {
    data: TElem
    id?: number
}

//типизация объекта, передающегося в комментарией
export type TElem = {
    by: string,
    children: number[],
    content: string,
    id: number,
    parent: null | number,
    time: string
}

export type TArticleElem = {
    by: string,
    descendants: number,
    id: number,
    kids?: number[],
    score: number,
    time: string,
    title: string,
    type: string,
    url: string
}
