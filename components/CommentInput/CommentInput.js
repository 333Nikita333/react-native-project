import { TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './CommentInput.styled';

const CommentInput = ({ comment, setComment, createComment }) => {
  return (
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
  );
};

export default CommentInput;
