import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import {
  Text,
  Image,
  FlatList,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { getComments } from '../../../redux/posts/postsSelectors';
import { getUser } from '../../../redux/auth/authSelectors';
import {
  addCommentByPostID,
  getAllCommentsByPostId,
  getAllPosts,
  getOwnPosts,
} from '../../../redux/posts/postsOperations';
import { styles } from './CommentsScreen.styled';
import CommentItem from '../../../components/CommentItem/CommentItem';
import CommentInput from '../../../components/CommentInput/CommentInput';

const CommentsScreen = () => {
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();
  const route = useRoute();
  const flatListRef = useRef();

  const comments = useSelector(getComments);
  const { userId } = useSelector(getUser);

  const { postId, imgUri } = route.params;

  useEffect(() => {
    dispatch(getAllCommentsByPostId(postId));

    return () => {
      dispatch(getAllPosts());
      dispatch(getOwnPosts());
    };
  }, [dispatch, postId]);

  const sortedComments = [...comments].sort(
    (a, b) => a.dateForSort - b.dateForSort,
  );

  const createComment = () => {
    if (comment === '') return alert('Поле не должно быть пустым');

    dispatch(addCommentByPostID(postId, comment));
    setComment('');
    Keyboard.dismiss();
    flatListRef.current.scrollToEnd({ animated: true });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <FlatList
          style={{ paddingHorizontal: 16 }}
          data={sortedComments}
          ref={flatListRef}
          keyExtractor={(item, indx) => indx.toString()}
          ListHeaderComponent={
            <View style={{ paddingVertical: 32 }}>
              <Image style={styles.image} source={{ uri: imgUri }} />
            </View>
          }
          renderItem={({ item }) => {
            const isOwner = item.authorId === userId;
            return (
              <CommentItem
                isOwner={isOwner}
                userAvatar={item.userAvatar}
                comment={item.comment}
                date={item.date}
              />
            );
          }}
          ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
          ListEmptyComponent={
            <View
              style={{
                height: 50,
                backgroundColor: '#ffffff',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>У вас пока нет комментариев</Text>
            </View>
          }
          ListFooterComponent={() => <View style={{ height: 30 }} />}
        />
        <CommentInput
          comment={comment}
          setComment={setComment}
          createComment={createComment}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CommentsScreen;
