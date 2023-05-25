import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerFooter: {
    paddingHorizontal: 16,
    paddingBottom: 16,

    backgroundColor: '#FFFFFF',
  },
  commentInput: {
    position: 'relative',

    fontFamily: 'Roboto-Medium',
    height: 50,
    padding: 16,
    paddingRight: 50,

    fontSize: 16,
    lineHeight: 19,

    backgroundColor: '#F6F6F6',
    color: '#212121',

    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 100,
  },
  iconWrapper: {
    position: 'absolute',
    right: 8,
    bottom: 8,

    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#FF6C00',
  },
});
