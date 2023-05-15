import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { authSlice } from './authSlice';
import { auth } from '../../firebase/config';

export const authRegister =
  ({ email, password, nickName, photoURL }) =>
  async dispatch => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: nickName,
        photoURL,
      });
      const userSuccess = auth.currentUser;
      const data = {
        userId: userSuccess.uid,
        nickName: userSuccess.displayName,
        userEmail: userSuccess.email,
        userAvatar: userSuccess.photoURL,
      };
      dispatch(authSlice.actions.updateUserProfile(data));
      dispatch(authSlice.actions.authCurrentUser(true));
    } catch (error) {
      console.log(error.message);
    }
  };

export const authLogin =
  ({ email, password }) =>
  async dispatch => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      const data = {
        userId: user.user.uid,
        nickName: user.user.displayName,
        userEmail: user?.user?.email,
        userAvatar: user?.user?.photoURL,
      };
      dispatch(authSlice.actions.updateUserProfile(data));
      dispatch(authSlice.actions.authCurrentUser(true));
    } catch (error) {
      console.log(error.message);
    }
  };

export const authUpdateAvatar = photoURL => async dispatch => {
  try {
    await updateProfile(auth.currentUser, {
      photoURL,
    });

    const userSuccess = auth.currentUser;
    dispatch(
      authSlice.actions.updateUserAvatar({
        userAvatar: userSuccess.photoURL,
      }),
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const authLogout = () => async dispatch => {
  try {
    await signOut(auth);
    dispatch(authSlice.actions.authLogOut());
  } catch (error) {
    console.log(error.message);
  }
};

export const authCurrentUser = () => async dispatch => {
  try {
    await onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(
          authSlice.actions.updateUserProfile({
            userId: user.uid,
            nickName: user.displayName,
            userEmail: user?.email,
          }),
        );
        dispatch(authSlice.actions.authCurrentUser(true));
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};
