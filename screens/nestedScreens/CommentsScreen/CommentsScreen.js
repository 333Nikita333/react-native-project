import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { styles } from "./CommentsScreen.styled";
import {
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  FlatList,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const CommentsScreen = ({ route }) => {
  const photo = route.params[0].photo;
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const getCurrentTime = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ][date.getMonth()];
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day} ${month}, ${year} | ${hours}:${minutes}`;
  };

  const currentTime = getCurrentTime();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image style={styles.imgContent} source={{ uri: photo }} />
        <FlatList
          data={comments}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  width: Dimensions.get("window").width - 32,
                  flexDirection: "row",
                  marginBottom: 24,
                }}
              >
                <Image style={styles.avatarUser} />
                <View style={styles.commentBox}>
                  <Text style={styles.commentText}>{item}</Text>
                  <Text style={styles.commentDate}>{currentTime}</Text>
                </View>
              </View>
            );
          }}
        />
        <View style={styles.inputBox}>
          <TextInput
            type="text"
            value={commentText}
            onChangeText={setCommentText}
            style={styles.inputComment}
            placeholder="Комментировать..."
            placeholderTextColor="#BDBDBD"
          />
          <TouchableOpacity
            style={styles.btnSend}
            onPress={() => {
              if (commentText === "")
                return alert("Поле не должно быть пустым");
              setComments((prev) => [...prev, commentText]);
              setCommentText("");
              Keyboard.dismiss();
            }}
          >
            <Feather name="arrow-up" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CommentsScreen;
