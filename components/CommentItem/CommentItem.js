import { Image, Text, View } from 'react-native';
import { styles } from './CommentItem.styled';

const CommentItem = ({ isOwner, userAvatar, comment, date }) => {
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
        source={{ uri: userAvatar }}
      />
      <View
        style={[
          styles.commentWrapper,
          {
            [isOwner ? 'borderTopRightRadius' : 'borderTopLeftRadius']: 0,
          },
        ]}
      >
        <Text style={styles.commentAuthor}>{comment}</Text>
        <Text
          style={[
            styles.commentDate,
            { textAlign: isOwner ? 'left' : 'right' },
          ]}
        >
          {date}
        </Text>
      </View>
    </View>
  );
};

export default CommentItem;
