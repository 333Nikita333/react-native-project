import {
  Image,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";

const PostsScreen = ({ route, navigation }) => {
  //! Стейт хранения постов
  const [posts, setPosts] = useState([]);
  console.log("route.params", route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts);

  return (
    <View style={styles.container}>
      <View style={styles.userBox}>
        <Image
          style={styles.imageUser}
          source={require("../../../assets/images/avatar-photo-60x60.jpg")}
        />
        <View style={styles.textBox}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>


      <View>
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.contentBox}>
              <Image style={styles.contentImage} source={{ uri: item.photo }} />
              <Text style={styles.contentName}>{item.name}</Text>
              <View style={styles.contentInfo}>
                <TouchableOpacity
                  style={styles.btnComment}
                  onPress={() => navigation.navigate("CommentsScreen")}
                >
                  <Feather
                    style={{ transform: [{ scaleX: -1 }] }}
                    name="message-circle"
                    size={24}
                    color="#BDBDBD"
                  />
                  <Text style={styles.btnCommentText}>0</Text>
                </TouchableOpacity>
                <View style={styles.contentLocation}>
                  <TouchableOpacity
                    style={styles.btnLocation}
                    onPress={() => navigation.navigate("MapScreen")}
                  >
                    <Feather name="map-pin" size={24} color="#BDBDBD" />
                    <Text style={styles.contentLocationText}>
                      {item.location}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>

    </View>
  );
};

export default PostsScreen;