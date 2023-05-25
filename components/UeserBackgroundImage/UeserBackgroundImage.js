import {
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  View,
} from 'react-native';

const UserBackgroundImage = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/images/image-background-375x812.jpg')}
        />
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'relative',
    top: 0,
    width: '100%',
    zIndex: -50,
  },
});

export default UserBackgroundImage;
