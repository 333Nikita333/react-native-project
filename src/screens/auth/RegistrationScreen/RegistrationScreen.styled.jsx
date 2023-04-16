import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  signInBox: {
    marginTop: "auto",
    paddingRight: 16,
    paddingLeft: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    backgroundColor: "#fff",
  },
  signInBoxLandscape: {
    marginHorizontal: 150,
  },
  avatarBox: {
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,

    backgroundColor: "#F6F6F6",
  },
  avatarImage: {
    borderRadius: 16,
    width: 120,
    height: 120,
    resizeMode: "cover",
  },
  addBtn: {
    position: "absolute",
    right: -14,
    bottom: 14,
    borderRadius: 45,

    backgroundColor: "#ffffff",
  },
  title: {
    marginTop: -60 + 32,
    textAlign: "center",

    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.72,
  },
  form: {
    marginTop: 32,
  },
  input: {
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    padding: 16,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    color: "#212121",
  },
  inputFocused: {
    borderColor: "#FF6C00",
  },
  emailBox: {
    marginTop: 16,
  },
  passwordBox: {
    marginTop: 16,
    marginBottom: 43,
  },
  btnShowPassword: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  textBtnShowPassword: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",
  },
  inputPassword: {
    paddingRight: 85,
  },
  btnSignIn: {
    borderRadius: 100,
    padding: 16,

    backgroundColor: "#FF6C00",
  },
  btnSignInText: {
    textAlign: "center",

    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,

    color: "#ffffff",
  },
  btnLogIn: {
    paddingTop: 16,
    marginBottom: 45,
  },
  btnLogInText: {
    textAlign: "center",

    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",
  },
});
