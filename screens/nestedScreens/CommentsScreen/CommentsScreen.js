import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {
  TouchableOpacity,
  Text,
  TextInput,
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

const CommentsScreen = () => {
  const [comment, setComment] = useState('');

  const comments = useSelector(getComments);
  const dispatch = useDispatch();
  const route = useRoute();
  const flatListRef = useRef();

  const { postId, imgUri } = route.params;

  const sortedComments = [...comments].sort(
    (a, b) => a.dateForSort - b.dateForSort,
  );

  const { userId } = useSelector(getUser);

  useEffect(() => {
    dispatch(getAllCommentsByPostId(postId));

    return () => {
      dispatch(getAllPosts());
      dispatch(getOwnPosts());
    };
  }, [dispatch, postId]);

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
              <View
                style={[
                  styles.containerItem,
                  { flexDirection: isOwner ? 'row-reverse' : 'row' },
                ]}
              >
                <Image
                  style={[
                    styles.authorAvatar,
                    { [isOwner ? 'marginLeft' : 'marginRight']: 16 },
                  ]}
                  source={{ uri: item.userAvatar }}
                />
                <View
                  style={[
                    styles.commentWrapper,
                    {
                      [isOwner
                        ? 'borderTopRightRadius'
                        : 'borderTopLeftRadius']: 0,
                    },
                  ]}
                >
                  <Text style={styles.commentAuthor}>{item.comment}</Text>
                  <Text
                    style={[
                      styles.commentDate,
                      { textAlign: isOwner ? 'left' : 'right' },
                    ]}
                  >
                    {item.date}
                  </Text>
                </View>
              </View>
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
        <View style={styles.containerFooter}>
          <View>
            <TextInput
              type="text"
              value={comment}
              onChangeText={setComment}
              style={styles.commentInput}
              placeholder="Комментировать..."
              placeholderTextColor="#BDBDBD"
            />
            <TouchableOpacity
              style={styles.iconWrapper}
              activeOpacity={0.7}
              onPress={createComment}
            >
              <Feather name="arrow-up" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CommentsScreen;
