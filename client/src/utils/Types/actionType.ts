import {TArticleElem, TElem} from "./types";
import {
    CLEAR_SECONDARY_COMMENTS,
    GET_CURRENT_ARTICLE_ACTIVE,
    GET_CURRENT_ARTICLE_ERROR,
    GET_CURRENT_ARTICLE_SUCCESS,
    GET_SECONDARY_COMMENTS_ACTIVE,
    GET_SECONDARY_COMMENTS_ERROR,
    GET_SECONDARY_COMMENTS_SUCCESS,
    SET_ARTICLE_FETCH_ACTIVE,
    SET_ARTICLE_FETCH_ERROR,
    SET_ARTICLE_FETCH_SUCCESS,
    SET_CURRENT_ARTICLE,
    SET_ROOT_COMMENTS_ACTIVE,
    SET_ROOT_COMMENTS_ERROR,
    SET_ROOT_COMMENTS_SUCCESS
} from "../../Services/actions/componentsActions";


export interface ISetArticleFetchSuccess {
    readonly type: typeof SET_ARTICLE_FETCH_SUCCESS;
    readonly data: TArticleElem[];

}

export interface ISetArticleFetchError {
    readonly type: typeof SET_ARTICLE_FETCH_ERROR;

}

export interface ISetArticleFetchActive {
    readonly type: typeof SET_ARTICLE_FETCH_ACTIVE;
}

export interface ISetRootCommentsSuccess {
    readonly type: typeof SET_ROOT_COMMENTS_SUCCESS;
    readonly data: TElem[];

}

export interface ISetRootCommentsError {
    readonly type: typeof SET_ROOT_COMMENTS_ERROR;

}

export interface ISetRootCommentsActive {
    readonly type: typeof SET_ROOT_COMMENTS_ACTIVE;
}

export interface IGetSecondaryCommentsSuccess {
    readonly type: typeof GET_SECONDARY_COMMENTS_SUCCESS;
    readonly data: TElem[];

}

export interface IGetSecondaryCommentsError {
    readonly type: typeof GET_SECONDARY_COMMENTS_ERROR;

}

export interface IGetSecondaryCommentsActive {
    readonly type: typeof GET_SECONDARY_COMMENTS_ACTIVE;
}


export interface IGetCurrentArticleSuccess {
    readonly type: typeof GET_CURRENT_ARTICLE_SUCCESS;

}

export interface IGetCurrentArticleError {
    readonly type: typeof GET_CURRENT_ARTICLE_ERROR;

}

export interface IGetCurrentArticleActive {
    readonly type: typeof GET_CURRENT_ARTICLE_ACTIVE;
}

export interface IClearSecondaryComments {
    readonly type: typeof CLEAR_SECONDARY_COMMENTS;
}

export interface ISetCurrentArticle {
    readonly type: typeof SET_CURRENT_ARTICLE;
    readonly data: TArticleElem;
}

export type TActions =
    ISetCurrentArticle
    | IClearSecondaryComments
    | ISetArticleFetchSuccess
    | ISetArticleFetchError
    | ISetArticleFetchActive
    | ISetRootCommentsError
    | ISetRootCommentsSuccess
    | ISetRootCommentsActive
    | IGetSecondaryCommentsError
    | IGetSecondaryCommentsActive
    | IGetSecondaryCommentsSuccess
    | IGetCurrentArticleError
    | IGetCurrentArticleSuccess
    | IGetCurrentArticleActive;
