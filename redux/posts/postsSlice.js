import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  ownPosts: [],
  comments: [],
  isLiked: false,
  likeCount: 0,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    updatePosts: (state, { payload }) => ({
      ...state,
      posts: payload,
    }),
    updateOwnPosts: (state, { payload }) => ({
      ...state,
      ownPosts: payload,
    }),
    updateCommentsToPosts: (state, { payload }) => ({
      ...state,
      comments: payload,
    }),
    reset: () => ({ ...initialState }),
    updateLike: (state, { payload }) => ({
      ...state,
      isLiked: payload.isLiked,
      likeCount: payload.likeCount,
    }),
    reset: () => ({ ...initialState }),
  },
});

export const postsAction = postsSlice.actions;
