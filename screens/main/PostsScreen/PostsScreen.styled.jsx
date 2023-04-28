import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
  },
  userBox: {
    // display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 16,
  },
  imageUser: {
    borderRadius: 16,
    width: 60,
    height: 60,
    marginRight: 8,
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
  },
  userName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto-Medium",
    fontSize: 11,
    lineHeight: 13,
    color: "#4d4d4d",
  },
  // ////////////////////////////
  contentList: { paddingBottom: 76 },
  contentBox: {
    width: "100%",
    borderRadius: 8,
    marginVertical: 16,
  },
  contentImage: {
    borderRadius: 8,
    width: "100%",
    height: 240,
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
  btnComment: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnCommentText: {
    marginLeft: 6,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  contentLocation: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnLocation: {
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
