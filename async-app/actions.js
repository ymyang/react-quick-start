/**
 * Created by yang on 2016/6/5.
 */
'use strict';

import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

export function selectSubreddit(subreddit) {
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    };
}

export function invalidateSubreddit(subreddit) {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    };
}

function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit
    };
}

function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receiveAt: Date.now()
    };
}

function fetchPosts(subreddit) {
    return dispatch => {
        dispatch(requestPosts(subreddit));
        const url = 'http://www.subreddit.com/r/' + subreddit + '.json';
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(subreddit, json)));
    }
}

function shouldFecthPosts(state, subreddit) {
    const posts = state.postsBySubreddit[subreddit];
    if (!posts) {
        return true;
    } else if (posts.isFetching) {
        return false;
    } else {
        return posts.didInvalidate;
    }
}

export function fetchPostsIfNeeded(subreddit) {
    return (dispatch, getState) => {
        if (shouldFecthPosts(getState(), subreddit)) {
            return dispatch(fetchPosts(subreddit));
        }
    };
}