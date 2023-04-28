import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { styles } from "./PostsScreen.styled";
import { Image, Text, View, TouchableOpacity, FlatList } from "react-native";

const PostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  // console.log("route.params", route.params);

  useEffect(() => {
    if (!route.params) return;
    setPosts((prevState) => [route.params, ...prevState]);
  }, [route.params]);

  // console.log("posts", posts);

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

      <View style={styles.contentList}>
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            if (!item) return;
            return (
              <View style={styles.contentBox}>
                <Image
                  style={styles.contentImage}
                  source={{ uri: item.photo }}
                />
                <Text style={styles.contentName}>{item.namePost}</Text>
                <View style={styles.contentInfo}>
                  <TouchableOpacity
                    style={styles.btnComment}
                    onPress={() =>
                      navigation.navigate("CommentsScreen", {
                        ...posts.filter((e, i) => i === index),
                      })
                    }
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
                      onPress={() =>
                        navigation.navigate("MapScreen", {
                          ...posts.filter((e, i) => i === index),
                        })
                      }
                    >
                      <Feather name="map-pin" size={24} color="#BDBDBD" />
                      <Text style={styles.contentLocationText}>
                        {item.locationPost}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default PostsScreen;
