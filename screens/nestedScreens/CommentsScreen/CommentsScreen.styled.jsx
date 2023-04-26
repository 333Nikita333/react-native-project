import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,

    backgroundColor: "#fff",
  },
  contentBox: {
    paddingHorizontal: 16,
  },
  contentImage: {
    width: "100%",
    marginBottom: 20,
    borderRadius: 8,
  },
  // //////
  commentBox: {
    marginVertical: 12,
    flexDirection: "row",
  },
  // для каждого второго flexDirection: "row-reverse",

  // /////
  avatarComment: {
    marginRight: "auto",
    width: 40,
    height: 40,
  },
  commentTextWrapper: {
    width: 300,
    padding: 16,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,

    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
  //  для каждого второго borderTopLeftRadius: 6,

  commentText: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    lineHeight: 18,
  },
  commentData: {
    marginTop: 8,
    marginLeft: "auto",
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    lineHeight: 12,
    color: "#BDBDBD",
  },
  inputWrapper: {
    // position: "relative",
  },
  inputComment: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    paddingRight: 60,

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: "#F6F6F6",
  },
  btnComment: {
    position: "absolute",
    right: 18,
    top: 2,
    borderRadius: 45,
  },
  btnCommentIcon: {
    borderColor: "#FF6C00"
  }
});
