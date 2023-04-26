import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
  profileBox: {
    marginTop: 147,
    paddingRight: 16,
    paddingLeft: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
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
  btnLogOut: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  title: {
    marginTop: -60 + 32,
    textAlign: "center",

    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.72,
  },
  /////////////////////////////////////
  contentBox: {
    width: "100%",
    borderRadius: 8,
    marginVertical: 16,
  },
  contentImage: {
    borderRadius: 8,
    width: "100%",
    resizeMode: "cover",
  },
  contentName: {
    marginVertical: 8,

    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  contentInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonsContent: {
    flexDirection: "row",
  },
  btnComment: {
    marginRight: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
  },
  btnCommentText: {
    marginLeft: 6,
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    lineHeight: 19,
    color: "#212121",
  },
  btnLike: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
  },
  btnLikeText: {
    marginLeft: 6,
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    lineHeight: 19,
    color: "#212121",
  },

  contentLocation: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentLocationText: {
    marginLeft: 6,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textDecorationLine: "underline",
  },
});
