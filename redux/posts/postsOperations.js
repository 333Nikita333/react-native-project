import {
  addDoc,
  collection,
  getDocs,
  query,
  getCountFromServer,
  where,
  doc,
  deleteDoc,
} from 'firebase/firestore';

import { db } from '../../firebase/config';
import { postsAction } from './postsSlice';
import useCurrentData from '../../hooks/useCurrentData';

export const getAllPosts = () => async (dispatch, getState) => {
  try {
    const { userId } = getState().auth;

    const posts = await getDocs(collection(db, 'posts'));

    const newPosts = posts.docs.map(async doc => {
      const snapshotComments = await getCountFromServer(
        collection(doc.ref, 'comments'),
      );

      const countComments = snapshotComments.data().count;

      const snapshotLikes = await getCountFromServer(
        collection(doc.ref, 'likes'),
      );

      const countLikes = snapshotLikes.data().count;

      const q = query(
        collection(doc.ref, 'likes'),
        where('authorId', '==', userId),
      );

      const likes = await getDocs(q);

      return {
        ...doc.data(),
        id: doc.id,
        countComments,
        countLikes,
        isLiked: !likes.empty,
      };
    });

    const payload = await Promise.all(newPosts);

    dispatch(postsAction.updatePosts(payload));
  } catch (error) {
    console.log(error.message);
  }
};

export const getOwnPosts = () => async (dispatch, getState) => {
  try {
    const { userId } = getState().auth;
    const q = query(collection(db, 'posts'), where('userId', '==', userId));
    const posts = await getDocs(q);

    const newPosts = posts.docs.map(async doc => {
      const snapshotComments = await getCountFromServer(
        collection(doc.ref, 'comments'),
      );
      const countComments = snapshotComments.data().count;

      const snapshotLikes = await getCountFromServer(
        collection(doc.ref, 'likes'),
      );
      const countLikes = snapshotLikes.data().count;

      const q = query(
        collection(doc.ref, 'likes'),
        where('authorId', '==', userId),
      );
      const likes = await getDocs(q);

      return {
        ...doc.data(),
        id: doc.id,
        countComments,
        countLikes,
        isLiked: !likes.empty,
      };
    });

    const payload = await Promise.all(newPosts);

    dispatch(postsAction.updateOwnPosts(payload));
  } catch (error) {
    console.log(error.message);
  }
};

export const uploadPostToServer = post => async (dispatch, getState) => {
  try {
    const { userId } = getState().auth;

    await addDoc(collection(db, 'posts'), {
      post,
      userId,
    });
    dispatch(getAllPosts());
    dispatch(getOwnPosts());
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllComments = postId => async dispatch => {
  try {
    const docRef = doc(db, 'posts', postId);
    const comments = await getDocs(collection(docRef, 'comments'));
    const payload = comments.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
      date: useCurrentData(doc.data().date),
      dateForSort: doc.data().date,
    }));

    dispatch(postsAction.updateCommentsToPosts(payload));
  } catch (error) {
    console.log(error.message);
  }
};

export const addCommentToPost =
  (postId, commentData) => async (dispatch, getState) => {
    try {
      const { nickName, userId, userAvatar } = getState().auth;
      const comment = {
        comment: commentData,
        authorName: nickName,
        authorId: userId,
        date: Date.now(),
        postId: postId,
        userAvatar: userAvatar,
      };

      const docRef = doc(db, 'posts', postId);

      await addDoc(collection(docRef, 'comments'), { ...comment });
      dispatch(getAllComments(postId));
    } catch (error) {
      console.log(error.message);
    }
  };

export const addLikeToPost = postId => async (dispatch, getState) => {
  try {
    const { userId } = getState().auth;
    const postRef = doc(db, 'posts', postId);
    const likesRef = collection(postRef, 'likes');

    const q = query(likesRef, where('authorId', '==', userId));
    const likes = await getDocs(q);

    if (!likes.empty) {
      const like = likes.docs[0];
      await deleteDoc(doc(likesRef, like.id));
      dispatch(getAllPosts());
      dispatch(getOwnPosts());
    } else {
      await addDoc(likesRef, {
        authorId: userId,
      });
      dispatch(getAllPosts());
      dispatch(getOwnPosts());
    }

    const snapshotLikes = await getCountFromServer(likesRef);
    const countLikes = snapshotLikes.data().count;
    const isLiked = !likes.empty;
    dispatch(
      postsAction.updateLike({
        isLiked,
        likeCount: countLikes,
      }),
    );
  } catch (error) {
    console.log(error.message);
  }
};
