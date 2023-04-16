import {
  Image,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { styles } from "./CommentsScreen.styled";
import { Ionicons } from "@expo/vector-icons";

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentBox}>
          <Image
            style={styles.contentImage}
            source={require("../../../../assets/images/image-mountain-343-240.png")}
          />

          <View style={styles.commentBox}>
            <Image
              style={styles.avatarComment}
              source={require("../../../../assets/images/avatar2-28x28.jpg")}
            />
            <View style={styles.commentTextWrapper}>
              <Text style={styles.commentText}>
                Really love your most recent photo. I’ve been trying to capture
                the same thing for a few months and would love some tips!
              </Text>
              <Text style={styles.commentData}>09 июня, 2020 | 08:40</Text>
            </View>
          </View>

          <View style={styles.commentBox}>
            <Image
              style={styles.avatarComment}
              source={require("../../../../assets/images/avatar-28x28.jpg")}
            />
            <View style={styles.commentTextWrapper}>
              <Text style={styles.commentText}>
                A fast 50mm like f1.8 would help with the bokeh. I’ve been using
                primes as they tend to get a bit sharper images.
              </Text>
              <Text style={styles.commentData}>09 июня, 2020 | 08:40</Text>
            </View>
          </View>

          <View style={styles.commentBox}>
            <Image
              style={styles.avatarComment}
              source={require("../../../../assets/images/avatar2-28x28.jpg")}
            />
            <View style={styles.commentTextWrapper}>
              <Text style={styles.commentText}>
                Thank you! That was very helpful!
              </Text>
              <Text style={styles.commentData}>09 июня, 2020 | 08:40</Text>
            </View>
          </View>

          <View style={styles.commentBox}>
            <Image
              style={styles.avatarComment}
              source={require("../../../../assets/images/avatar2-28x28.jpg")}
            />
            <View style={styles.commentTextWrapper}>
              <Text style={styles.commentText}>
                Thank you! That was very helpful!
              </Text>
              <Text style={styles.commentData}>09 июня, 2020 | 08:40</Text>
            </View>
          </View>
          <View style={styles.commentBox}>
            <Image
              style={styles.avatarComment}
              source={require("../../../../assets/images/avatar2-28x28.jpg")}
            />
            <View style={styles.commentTextWrapper}>
              <Text style={styles.commentText}>
                Thank you! That was very helpful!
              </Text>
              <Text style={styles.commentData}>09 июня, 2020 | 08:40</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputComment}
          cursorColor="#FF6C00"
          placeholder={"Комментировать..."}
          placeholderTextColor={"#BDBDBD"}
          // onFocus={() => handleInputFocus("login")}
          // value={formData.login}
          // onChangeText={(value) =>
          //   setFormData((prevState) => ({ ...prevState, login: value }))
          // }
        />
        <TouchableOpacity style={styles.btnComment}>
        <Ionicons name="arrow-up-circle" size={54} color="#FF6C00" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentsScreen;
