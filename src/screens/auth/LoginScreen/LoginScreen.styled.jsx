import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  logInBox: {
    marginTop: "auto",
    paddingRight: 16,
    paddingLeft: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    backgroundColor: "#fff",
  },
  logInBoxLandscape: {
    marginHorizontal: 150,
  },
  title: {
    marginTop: 32,
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
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 111,
  },
  btnSignInIsLandscape: {
    marginBottom: 20,
  },
  btnSignInText: {
    textAlign: "center",

    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",
  },
  btnLogIn: {
    borderRadius: 100,
    padding: 16,

    backgroundColor: "#FF6C00",
  },
  btnLogInText: {
    textAlign: "center",

    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,

    color: "#ffffff",
  },
});
