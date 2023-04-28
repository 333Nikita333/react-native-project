import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: 'center',
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingRight: 16,
  },
  imgContent: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginTop: 32,
    marginBottom: 23,
  },
  avatarUser: {
    width: 28,
    height: 28,
    borderRadius: 50,
    backgroundColor: "grey",
    marginRight: 16,
  },
  commentBox: {
    width: Dimensions.get("window").width - 76,
    backgroundColor: "#00000008",
    padding: 16,
    borderRadius: 6,
    borderTopLeftRadius: 0,
  },
  commentText: {
    fontFamily: "Roboto-Medium",
    color: "#212121",
    fontSize: 13,
    lineHeight: 18,
  },
  commentDate: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Medium",
    fontSize: 10,
    lineHeight: 12,
    textAlign: "right",
  },
  inputBox: {
    position: "relative",
    width: "100%",
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
  },
  inputComment: {
    width: "100%",
    height: 50,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    padding: 16,
    paddingRight: 50,
  },
  btnSend: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 32,

//     backgroundColor: "#fff",
//   },
//   contentBox: {
//     paddingHorizontal: 16,
//   },
//   contentImage: {
//     width: "100%",
//     marginBottom: 20,
//     borderRadius: 8,
//   },
//   // //////
//   commentBox: {
//     marginVertical: 12,
//     flexDirection: "row",
//   },
//   // для каждого второго flexDirection: "row-reverse",

//   // /////
//   avatarComment: {
//     marginRight: "auto",
//     width: 40,
//     height: 40,
//   },
//   commentTextWrapper: {
//     width: 300,
//     padding: 16,
//     borderTopRightRadius: 6,
//     borderBottomRightRadius: 6,
//     borderBottomLeftRadius: 6,

//     backgroundColor: "rgba(0, 0, 0, 0.03)",
//   },
//   //  для каждого второго borderTopLeftRadius: 6,

//   commentText: {
//     fontFamily: "Roboto-Regular",
//     fontSize: 13,
//     lineHeight: 18,
//   },
//   commentData: {
//     marginTop: 8,
//     marginLeft: "auto",
//     fontFamily: "Roboto-Regular",
//     fontSize: 10,
//     lineHeight: 12,
//     color: "#BDBDBD",
//   },
//   inputWrapper: {
//     // position: "relative",
//   },
//   inputComment: {
//     marginHorizontal: 16,
//     marginBottom: 16,
//     padding: 16,
//     paddingRight: 60,

//     borderWidth: 1,
//     borderColor: "#E8E8E8",
//     borderRadius: 100,
//     fontFamily: "Roboto-Medium",
//     fontSize: 16,
//     lineHeight: 19,
//     backgroundColor: "#F6F6F6",
//   },
//   btnComment: {
//     position: "absolute",
//     right: 18,
//     top: 2,
//     borderRadius: 45,
//   },
//   btnCommentIcon: {
//     borderColor: "#FF6C00"
//   }
// });
