import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { authUpdateAvatar } from '../../redux/auth/authOperations';
import uploadPhotoToServer, {
  firebaseStore,
} from '../../api/uploadPhotoToServer';
import { styles } from './AvatarBox.styled';
import { getUser } from '../../redux/auth/authSelectors';

const AvatarBox = ({ avatarImg, setAvatarImg }) => {
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  const pickUserAvatar = async () => {
    if (avatarImg) {
      dispatch(authUpdateAvatar(''));
      setAvatarImg('');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const photoUrl = await uploadPhotoToServer(
        result.assets[0].uri,
        firebaseStore.avatar,
      );
      setAvatarImg(photoUrl);
      if (user.currentUser) {
        dispatch(authUpdateAvatar(photoUrl));
      }
    }
  };
  console.log(avatarImg);
  return (
    <>
      {avatarImg && (
        <Image style={styles.avatarImage} source={{ uri: avatarImg }} />
      )}
      <TouchableOpacity
        style={styles.addBtn}
        activeOpacity={0.8}
        onPress={pickUserAvatar}
      >
        {avatarImg ? (
          <AntDesign name="closecircleo" size={25} color="#E8E8E8" />
        ) : (
          <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
        )}
      </TouchableOpacity>
    </>
  );
};
export default AvatarBox;
