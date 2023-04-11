import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";

const Home = () => {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Posts" component={PostsScreen}></BottomTab.Screen>
      <BottomTab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
      ></BottomTab.Screen>
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
      ></BottomTab.Screen>
    </BottomTab.Navigator>
  );
};

export default Home;