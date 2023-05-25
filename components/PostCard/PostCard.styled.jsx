import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contentBox: {
    width: '100%',
    borderRadius: 8,
    marginVertical: 16,
  },
  contentImage: {
    borderRadius: 8,
    width: '100%',
    height: 240,
    resizeMode: 'cover',
  },
  contentName: {
    marginVertical: 8,

    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },
  contentInfo: {
    flexDirection: 'row',
  },
  btnComment: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 24,
  },
  btnCommentText: {
    marginLeft: 6,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
  },
  btnCommentTextColorDisable: { color: '#BDBDBD' },
  btnCommentTextColorActive: { color: '#FF6C00' },
  btnLike: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  btnLikeText: {
    marginLeft: 6,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
  },
  contentLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  btnLocation: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  contentLocationText: {
    marginLeft: 6,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    textDecorationLine: 'underline',
  },
});
