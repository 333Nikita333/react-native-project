import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerItem: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  authorAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  commentWrapper: {
    flex: 1,
    padding: 16,

    backgroundColor: ' rgba(0, 0, 0, 0.03)',
    borderRadius: 16,
  },
  commentAuthor: {
    marginBottom: 8,

    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    lineHeight: 18,

    color: '#212121',
  },
  commentDate: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    lineHeight: 12,

    color: '#BDBDBD',
  },
});
