import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    padding: 16,
    backgroundColor: "#fff",
  },
  contentBlock: {},
  contentPick: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 343,
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  contentImage: {
    position: "absolute",
    borderRadius: 8,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  btnContentPic: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 45,
    backgroundColor: "#fff",
  },
  btnContentPicActive: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  contentText: {
    marginTop: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  formContent: {
    marginTop: 32,
    width: "100%",
  },
  contentNameBox: {
    height: 50,
  },
  input: {
    paddingTop: 16,
    paddingBottom: 16,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "##BDBDBD",
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  inputName: {
    fontFamily: "Roboto-Medium",
    fontWeight: "400"
  },
  placeholder: {
    fontFamily: "Roboto-Regular",
  },
  inputLocation: {
    paddingLeft: 28,
  },
  btnPublish: {
    width: "100%",
    marginTop: 32,
    padding: 16,
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },
  btnPublishActive: {
    backgroundColor: "#FF6C00",
  },
  btnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  btnTextActive: {
    color: "#fff",
  },
  btnTrash: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 155,
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
  },
  btnTrashIsLandscape:{
    marginTop: 30,
  }
});
