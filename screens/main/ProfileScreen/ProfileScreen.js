import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./ProfileScreen.styled";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

const ProfileScreen = ({ navigation }) => {
  const [userAvatar, setUserAvatar] = useState(null);

  const pickUserAvatar = async () => {
    if (userAvatar) return setUserAvatar(null);

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.canceled) {
      return;
    }

    if (!result.canceled) {
      setUserAvatar(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../../../assets/images/image-background-375x812.jpg")}
      >
        <ScrollView>
          <View style={styles.profileBox}>
            <View style={styles.avatarBox}>
              {userAvatar && (
                <Image
                  style={styles.avatarImage}
                  source={{ uri: userAvatar }}
                />
              )}
              <TouchableOpacity
                style={styles.addBtn}
                activeOpacity={0.8}
                onPress={pickUserAvatar}
              >
                {userAvatar ? (
                  <AntDesign name="closecircleo" size={25} color="#E8E8E8" />
                ) : (
                  <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
                )}
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.btnLogOut}
              onPress={() => navigation.navigate("Login")}
            >
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>

            <Text style={styles.title}>Natali Romanova</Text>

            <View style={styles.contentBox}>
              <Image
                style={styles.contentImage}
                source={require("../../../assets/images/image-mountain-343-240.png")}
              />
              <Text style={styles.contentName}>Лес</Text>
              <View style={styles.contentInfo}>
                <View style={styles.buttonsContent}>
                  <TouchableOpacity style={styles.btnComment}>
                    <Feather
                      style={{ transform: [{ scaleX: -1 }] }}
                      name="message-circle"
                      size={24}
                      color="#FF6C00"
                    />
                    <Text style={styles.btnCommentText}>0</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnLike}>
                    <Feather name="thumbs-up" size={24} color="#FF6C00" />
                    <Text style={styles.btnLikeText}>0</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.contentLocation}>
                  <Feather name="map-pin" size={24} color="#BDBDBD" />
                  <Text style={styles.contentLocationText}>Ukraine</Text>
                </View>
              </View>
            </View>

            <View style={styles.contentBox}>
              <Image
                style={styles.contentImage}
                source={require("../../../assets/images/image-mountain-343-240.png")}
              />
              <Text style={styles.contentName}>Лес</Text>
              <View style={styles.contentInfo}>
                <View style={styles.buttonsContent}>
                  <TouchableOpacity style={styles.btnComment}>
                    <Feather
                      style={{ transform: [{ scaleX: -1 }] }}
                      name="message-circle"
                      size={24}
                      color="#FF6C00"
                    />
                    <Text style={styles.btnCommentText}>0</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnLike}>
                    <Feather name="thumbs-up" size={24} color="#FF6C00" />
                    <Text style={styles.btnLikeText}>0</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.contentLocation}>
                  <Feather name="map-pin" size={24} color="#BDBDBD" />
                  <Text style={styles.contentLocationText}>Ukraine</Text>
                </View>
              </View>
            </View>

            <View style={styles.contentBox}>
              <Image
                style={styles.contentImage}
                source={require("../../../assets/images/image-mountain-343-240.png")}
              />
              <Text style={styles.contentName}>Лес</Text>
              <View style={styles.contentInfo}>
                <View style={styles.buttonsContent}>
                  <TouchableOpacity style={styles.btnComment}>
                    <Feather
                      style={{ transform: [{ scaleX: -1 }] }}
                      name="message-circle"
                      size={24}
                      color="#FF6C00"
                    />
                    <Text style={styles.btnCommentText}>0</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnLike}>
                    <Feather name="thumbs-up" size={24} color="#FF6C00" />
                    <Text style={styles.btnLikeText}>0</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.contentLocation}>
                  <Feather name="map-pin" size={24} color="#BDBDBD" />
                  <Text style={styles.contentLocationText}>Ukraine</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
