import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';

import { getUser } from '../../../redux/auth/authSelectors';
import { getOwnPosts } from '../../../redux/posts/postsSelectors';
import { authLogout } from '../../../redux/auth/authOperations';
import PostCard from '../../../components/PostCard/PostCard';
import AvatarBox from '../../../components/AvatarBox/AvatarBox';
import { styles } from './ProfileScreen.styled';

const Empty = ({ height, ...another }) => (
  <View style={{ backgroundColor: '#ffffff', height }} {...another} />
);

const ProfileScreen = () => {
  const user = useSelector(getUser);
  const [avatarImg, setAvatarImg] = useState(user.userAvatar);
  const dispatch = useDispatch();

  const posts = useSelector(getOwnPosts)
    .slice()
    .sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require('../../../assets/images/image-background-375x812.jpg')}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <FlatList
            data={posts}
            ListHeaderComponent={
              <View style={styles.profileBox}>
                <View style={styles.avatarBox}>
                  <AvatarBox
                    avatarImg={avatarImg}
                    setAvatarImg={setAvatarImg}
                  />
                </View>

                <TouchableOpacity
                  style={styles.btnLogOut}
                  onPress={() => dispatch(authLogout())}
                >
                  <Feather name="log-out" size={24} color="#BDBDBD" />
                </TouchableOpacity>

                <Text style={styles.title}>{user.nickName}</Text>
              </View>
            }
            ItemSeparatorComponent={() => <Empty height={32} />}
            renderItem={({ item }) => (
              <View
                style={{ paddingHorizontal: 16, backgroundColor: '#ffffff' }}
              >
                <PostCard
                  id={item.id}
                  title={item.post.title}
                  location={item.post.location}
                  locationData={item.post.locationData}
                  imgUri={item.post.imgUri}
                  comments={item.post.comments}
                  countComments={item.countComments}
                  countLikes={item.countLikes}
                />
              </View>
            )}
            ListEmptyComponent={
              <View
                style={{
                  height: 100,
                  backgroundColor: '#ffffff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text>Список постов пуст</Text>
              </View>
            }
            ListFooterComponent={<Empty height={43} />}
          />

          <View
            style={{
              marginTop: -1,
              flexGrow: 10 ** 10,
              width: '100%',
              backgroundColor: '#ffffff',
            }}
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
