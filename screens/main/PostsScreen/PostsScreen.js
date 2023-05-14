import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './PostsScreen.styled';
import { Image, Text, View, FlatList } from 'react-native';
import { getPosts } from '../../../redux/posts/postsSelectors';
import { getUser } from '../../../redux/auth/authSelectors';
import { getAllPosts, getOwnPosts } from '../../../redux/posts/postsOperations';
import PostCard from '../../../components/PostCard/PostCard';

const PostsScreen = () => {
  const posts = useSelector(getPosts);
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getOwnPosts());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.userBox}>
        <Image style={styles.imageUser} source={{ uri: user.userAvatar }} />
        <View style={styles.textBox}>
          <Text style={styles.userName}>{user.nickName}</Text>
          <Text style={styles.userEmail}>{user.userEmail}</Text>
        </View>
      </View>

      <View style={styles.contentList}>
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            if (!item) return;
            return (
              <PostCard
                id={item.id}
                title={item.post.title}
                location={item.post.location}
                locationData={item.post.locationData}
                imgUri={item.post.imgUri}
                comments={item.post.comments}
                countComments={item.countComments}
                countLikes={item.countLikes}
                isLiked={item.isLiked}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default PostsScreen;
