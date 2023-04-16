import { Image, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./PostsScreen.styled";
import { Feather } from "@expo/vector-icons";

const PostsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userBox}>
        <Image
          style={styles.imageUser}
          source={require("../../../../assets/images/avatar-photo-60x60.jpg")}
        />
        <View style={styles.textBox}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.contentBox}>
          <Image
            style={styles.contentImage}
            source={require("../../../../assets/images/image-mountain-343-240.png")}
          />
          <Text style={styles.contentName}>Лес</Text>
          <View style={styles.contentInfo}>
            <TouchableOpacity style={styles.btnComment} onPress={() => navigation.navigate("CommentsScreen")}>
              <Feather
                style={{ transform: [{ scaleX: -1 }] }}
                name="message-circle"
                size={24}
                color="#BDBDBD"
              />
              <Text style={styles.btnCommentText}>0</Text>
            </TouchableOpacity>
            <View style={styles.contentLocation}>
              <Feather name="map-pin" size={24} color="#BDBDBD" />
              <Text style={styles.contentLocationText}>
                Ivano-Frankivs'k Region, Ukraine
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.contentBox}>
          <Image
            style={styles.contentImage}
            source={require("../../../../assets/images/image-mountain-343-240.png")}
          />
          <Text style={styles.contentName}>Лес</Text>
          <View style={styles.contentInfo}>
            <TouchableOpacity style={styles.btnComment} onPress={() => navigation.navigate("CommentsScreen")}>
              <Feather
                style={{ transform: [{ scaleX: -1 }] }}
                name="message-circle"
                size={24}
                color="#BDBDBD"
              />
              <Text style={styles.btnCommentText}>0</Text>
            </TouchableOpacity>
            <View style={styles.contentLocation}>
              <Feather name="map-pin" size={24} color="#BDBDBD" />
              <Text style={styles.contentLocationText}>
                Ivano-Frankivs'k Region, Ukraine
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.contentBox}>
          <Image
            style={styles.contentImage}
            source={require("../../../../assets/images/image-mountain-343-240.png")}
          />
          <Text style={styles.contentName}>Лес</Text>
          <View style={styles.contentInfo}>
            <TouchableOpacity style={styles.btnComment} onPress={() => navigation.navigate("CommentsScreen")}>
              <Feather
                style={{ transform: [{ scaleX: -1 }] }}
                name="message-circle"
                size={24}
                color="#BDBDBD"
              />
              <Text style={styles.btnCommentText}>0</Text>
            </TouchableOpacity>
            <View style={styles.contentLocation}>
              <Feather name="map-pin" size={24} color="#BDBDBD" />
              <Text style={styles.contentLocationText}>
                Ivano-Frankivs'k Region, Ukraine
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PostsScreen;
