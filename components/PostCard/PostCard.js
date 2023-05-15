import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './PostCard.styled';
import { Feather } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { addLikeToPost } from '../../redux/posts/postsOperations';

const PostCard = ({
  id,
  title,
  location,
  locationData,
  imgUri,
  comments,
  countComments,
  countLikes,
}) => {
  const navigation = useNavigation();
  const onPressCommentsIcon = () => {
    navigation.navigate('CommentsScreen', {
      imgUri,
      comments,
      postId: id,
    });
  };
  const dispatch = useDispatch();

  return (
    <View style={styles.contentBox}>
      <Image style={styles.contentImage} source={{ uri: imgUri }} />
      <Text style={styles.contentName}>{title}</Text>
      <View style={styles.contentInfo}>
        <TouchableOpacity
          style={styles.btnComment}
          onPress={onPressCommentsIcon}
        >
          <Feather
            style={{ transform: [{ scaleX: -1 }] }}
            name="message-circle"
            size={24}
            color={countComments > 0 ? '#FF6C00' : '#BDBDBD'}
          />
          <Text
            style={[
              styles.btnCommentText,
              countComments > 0
                ? styles.btnCommentTextColorActive
                : styles.btnCommentTextColorDisable,
            ]}
          >
            {countComments}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnLike}
          onPress={() => dispatch(addLikeToPost(id))}
        >
          <Feather
            name="thumbs-up"
            size={24}
            color={countLikes > 0 ? '#FF6C00' : '#BDBDBD'}
          />
          <Text
            style={[
              styles.btnLikeText,
              countLikes > 0
                ? styles.btnCommentTextColorActive
                : styles.btnCommentTextColorDisable,
            ]}
          >
            {countLikes}
          </Text>
        </TouchableOpacity>
        <View style={styles.contentLocation}>
          <TouchableOpacity
            style={styles.btnLocation}
            onPress={() =>
              navigation.navigate('MapScreen', { location, locationData })
            }
          >
            <Feather name="map-pin" size={24} color="#BDBDBD" />
            <Text style={styles.contentLocationText}>{location}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
