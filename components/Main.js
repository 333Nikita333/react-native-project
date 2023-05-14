import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { authCurrentUser } from '../redux/auth/authOperations';
import useRoute from '../router';

const Main = () => {
  const { currentUser } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCurrentUser());
  }, []);

  const routing = useRoute(currentUser);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
