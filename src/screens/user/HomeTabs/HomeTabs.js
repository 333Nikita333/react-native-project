import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { TouchableOpacity } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { styles } from "./HomeTabs.styled";
// import { useNavigation } from "@react-navigation/native";

const HomeTabs = ({ navigation }) => {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator
    // screenOptions={{
    //   tabBarStyle: {
    //     height: 80,
    //     paddingLeft: 80,
    //     paddingRight: 80
    //   },
    // }}
    >
      <BottomTab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публикации",
          headerStyle: styles.header,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
          },
          headerRightContainerStyle: {
            paddingRight: 16,
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Feather name="grid" size={24} color="rgba(33, 33, 33, 0.8)" />
          ),
        }}
      />
      <BottomTab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          // tabBarStyle: {
          //   display: "none",
          // },
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <TouchableOpacity
              style={styles.plusBarIcon}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("CreatePostsScreen")}
            >
              <Feather name="plus" focused="false" size={24} color="#ffffff" />
            </TouchableOpacity>
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            // <TouchableOpacity
            //   activeOpacity={0.8}
            //   onPress={() => navigation.navigate("ProfileScreen")}
            // >
            //   <Feather
            //     name="user"
            //     focused="false"
            //     size={24}
            //     color="rgba(33, 33, 33, 0.8)"
            //   />
            // </TouchableOpacity>
            <Feather
                name="user"
                focused="false"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
              />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default HomeTabs;
