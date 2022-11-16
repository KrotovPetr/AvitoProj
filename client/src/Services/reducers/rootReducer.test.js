import {componentReducer} from "./rootReducer";
import * as types from '../actions/componentsActions';

describe('root reducer', () => {
    it('should return the initial state', () => {
        expect(componentReducer(undefined, {})).toEqual({
            commentsData: [],
            rootComments: [],
            articlesArray: [],
            apiURL: 'http://localhost:5000/api',
            updateDetector: false,
            articleFetchActive: false,
            articleFetchSuccess: false,
            articleFetchError: false,
            rootsCommentFetchActive: false,
            rootsCommentFetchSuccess: false,
            rootsCommentFetchError: false,
            secondaryCommentFetchActive: false,
            secondaryCommentFetchSuccess: false,
            secondaryCommentFetchError: false,
            currentArticle: null,
            currentArticleFetchActive: false,
            currentArticleFetchSuccess: false,
            currentArticleFetchError: false,
        });
    });

    it('should return articles success', () => {
        expect(
            componentReducer({
                    articleFetchActive: true,
                    articleFetchError: false,
                    articleFetchSuccess: false,
                    articlesArray: [],
                },
                {
                    type: types.SET_ARTICLE_FETCH_SUCCESS,
                    data: {
                        "by": "mrdpzk",
                        "descendants": 5,
                        "id": 33586693,
                        "kids": [
                            33587354,
                            33587373
                        ],
                        "score": 7,
                        "text": "Hi folks,<p>Let me know about your experience!<p>Some of the features are:\n+ Free SSL\n+ Free Subdomain\n+ Connecting Domain\n+ Collaboration\n+ Code IDE with Auto-completion\n+ Visual Editor\n+ ...",
                        "time": 1668369367,
                        "title": "Show HN: WebApp/Site Builder with IDE and Visual Editor",
                        "type": "story",
                        "url": "https://getlivewebsite.com"
                    },
                }
            )
        ).toEqual({
            articleFetchError: false,
            articleFetchActive: false,
            articleFetchSuccess: true,
            articlesArray: {
                "by": "mrdpzk",
                "descendants": 5,
                "id": 33586693,
                "kids": [
                    33587354,
                    33587373
                ],
                "score": 7,
                "text": "Hi folks,<p>Let me know about your experience!<p>Some of the features are:\n+ Free SSL\n+ Free Subdomain\n+ Connecting Domain\n+ Collaboration\n+ Code IDE with Auto-completion\n+ Visual Editor\n+ ...",
                "time": 1668369367,
                "title": "Show HN: WebApp/Site Builder with IDE and Visual Editor",
                "type": "story",
                "url": "https://getlivewebsite.com"
            }
        });
    });

    it('should set fetch articles error', () => {
        expect(
            componentReducer(
                {
                    articleFetchError: false,
                    articleFetchActive: true,
                    articleFetchSuccess: false
                },
                {
                    type: types.SET_ARTICLE_FETCH_ERROR,

                }
            )
        ).toEqual({
            articleFetchError: true,
            articleFetchActive: false,
            articleFetchSuccess: false
        });
    });

    it('should set fetch articles active', () => {
        expect(
            componentReducer(
                {
                    articleFetchError: false,
                    articleFetchActive: false,
                    articleFetchSuccess: false
                },
                {
                    type: types.SET_ARTICLE_FETCH_ACTIVE,
                }
            )
        ).toEqual({
            articleFetchError: false,
            articleFetchActive: true,
            articleFetchSuccess: false
        });
    });


    it('should set root comments success', () => {
        expect(
            componentReducer({
                    rootsCommentFetchActive: true,
                    rootsCommentFetchSuccess: false,
                    rootsCommentFetchError: false,
                    rootComments: [],
                    commentsData: [],
                    updateDetector: false
                },
                {
                    type: types.SET_ROOT_COMMENTS_SUCCESS,
                    data: [{data: "Some object"}],
                }
            )
        ).toEqual({
            rootsCommentFetchActive: false,
            rootsCommentFetchSuccess: true,
            rootsCommentFetchError: false,
            rootComments: [{data: "Some object"}],
            commentsData: [{data: "Some object"}],
            updateDetector: true
        });
    });

    it('should set roots comments error', () => {
        expect(
            componentReducer(
                {
                    rootsCommentFetchActive: true,
                    rootsCommentFetchSuccess: false,
                    rootsCommentFetchError: false,
                },
                {
                    type: types.SET_ROOT_COMMENTS_ERROR,

                }
            )
        ).toEqual({
            rootsCommentFetchActive: false,
            rootsCommentFetchSuccess: false,
            rootsCommentFetchError: true,
        });
    });

    it('should set roots comments active', () => {
        expect(
            componentReducer(
                {
                    rootsCommentFetchActive: false,
                    rootsCommentFetchSuccess: false,
                    rootsCommentFetchError: false,
                },
                {
                    type: types.SET_ROOT_COMMENTS_ACTIVE,
                }
            )
        ).toEqual({
            rootsCommentFetchActive: true,
            rootsCommentFetchSuccess: false,
            rootsCommentFetchError: false,
        });
    });

    it('should set current article', () => {
        expect(
            componentReducer(
                {
                    currentArticle: null
                },
                {
                    type: types.SET_CURRENT_ARTICLE,
                    data: {data: "Some object"}
                }
            )
        ).toEqual({
            currentArticle: {data: "Some object"}
        });
    });

    it('should return current article success', () => {
        expect(
            componentReducer({
                    currentArticleFetchActive: true,
                    currentArticleFetchSuccess: false,
                    currentArticleFetchError: false,
                },
                {
                    type: types.GET_CURRENT_ARTICLE_SUCCESS
                }
            )
        ).toEqual({
            currentArticleFetchActive: false,
            currentArticleFetchSuccess: true,
            currentArticleFetchError: false,
        });
    });

    it('should set current articles error', () => {
        expect(
            componentReducer(
                {
                    currentArticleFetchActive: true,
                    currentArticleFetchSuccess: false,
                    currentArticleFetchError: false,
                },
                {
                    type: types.GET_CURRENT_ARTICLE_ERROR,

                }
            )
        ).toEqual({
            currentArticleFetchActive: false,
            currentArticleFetchSuccess: false,
            currentArticleFetchError: true,
        });
    });

    it('should set fetch articles active', () => {
        expect(
            componentReducer(
                {
                    currentArticleFetchActive: false,
                    currentArticleFetchSuccess: false,
                    currentArticleFetchError: false,
                },
                {
                    type: types.GET_CURRENT_ARTICLE_ACTIVE,
                }
            )
        ).toEqual({
            currentArticleFetchActive: true,
            currentArticleFetchSuccess: false,
            currentArticleFetchError: false,
        });
    });

    it('should set clear secondary comments', () => {
        expect(
            componentReducer(
                {
                    commentsData: [{data: "some info"}]
                },
                {
                    type: types.CLEAR_SECONDARY_COMMENTS,
                }
            )
        ).toEqual({
            commentsData: []
        });
    });

    it('should return secondary comments success', () => {
        expect(
            componentReducer({
                    secondaryCommentFetchActive: false,
                    secondaryCommentFetchSuccess: false,
                    secondaryCommentFetchError: false,
                    commentsData: []
                },
                {
                    type: types.GET_SECONDARY_COMMENTS_SUCCESS,
                    data: [{data: "someInfo"}]
                }
            )
        ).toEqual({
            secondaryCommentFetchActive: false,
            secondaryCommentFetchSuccess: true,
            secondaryCommentFetchError: false,
            commentsData: [{data: "someInfo"}]
        });
    });

    it('should set secondary comments error', () => {
        expect(
            componentReducer(
                {
                    secondaryCommentFetchActive: true,
                    secondaryCommentFetchSuccess: false,
                    secondaryCommentFetchError: false,
                },
                {
                    type: types.GET_SECONDARY_COMMENTS_ERROR,

                }
            )
        ).toEqual({
            secondaryCommentFetchActive: false,
            secondaryCommentFetchSuccess: false,
            secondaryCommentFetchError: true,
        });
    });

    it('should set fetch secondary comments active', () => {
        expect(
            componentReducer(
                {
                    secondaryCommentFetchActive: false,
                    secondaryCommentFetchSuccess: false,
                    secondaryCommentFetchError: false,
                },
                {
                    type: types.GET_SECONDARY_COMMENTS_ACTIVE,
                }
            )
        ).toEqual({
            secondaryCommentFetchActive: true,
            secondaryCommentFetchSuccess: false,
            secondaryCommentFetchError: false,
        });
    });

})