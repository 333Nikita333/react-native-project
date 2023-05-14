import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  profileBox: {
    position: 'relative',
    marginTop: 147,
    paddingRight: 16,
    paddingLeft: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },
  avatarBox: {
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,

    backgroundColor: '#F6F6F6',
  },
  avatarImage: {
    borderRadius: 16,
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  addBtn: {
    position: 'absolute',
    right: -14,
    bottom: 14,
    borderRadius: 45,

    backgroundColor: '#ffffff',
  },
  btnLogOut: {
    position: 'absolute',
    top: 22,
    right: 16,
  },
  title: {
    marginTop: -60 + 32,
    textAlign: 'center',

    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.72,
  },
});
