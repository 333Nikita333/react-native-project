import "react-native-gesture-handler";

import { TouchableOpacity } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import CreatePostsScreen from "./CreatePostsScreen/CreatePostsScreen";
import CommentsScreen from "./CommentsScreen/CommentsScreen";
import { useNavigation } from "@react-navigation/native";
import HomeTabs from "./HomeTabs/HomeTabs";
import ProfileScreen from "./ProfileScreen/ProfileScreen";

const General = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName="HomeTabs">
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: "Создать публикацию",
          headerTitleAlign: "center",
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
          },
          headerLeftContainerStyle: {
            paddingLeft: 16,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("PostsScreen")}
            >
              <AntDesign
                name="arrowleft"
                focused="false"
                size={24}
                color="#212121"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          title: "Комментарии",
          headerStyle: {
            height: 88,
            borderBottomColor: "#BDBDBD",
            borderBottomWidth: 1,
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("PostsScreen")}
            >
              <AntDesign
                name="arrowleft"
                focused="false"
                size={24}
                color="#212121"
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default General;
