import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import PostsScreen from "../PostsScreen/PostsScreen";
import MapScreen from "../../nestedScreens/MapScreen/MapScreen";
import CommentsScreen from "../../nestedScreens/CommentsScreen/CommentsScreen";

const NestedScreen = createStackNavigator();

const Home = ({ navigation }) => {
  return (
    <NestedScreen.Navigator initialRouteName="PostsScreen">
      <NestedScreen.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публикации",
          headerStyle: {
            borderBottomColor: "#E5E5E5",
            borderBottomWidth: 1,
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
            // paddingBottom: 16,
          },
          headerRightContainerStyle: {
            paddingRight: 16,
            // paddingBottom: 16,
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />
      <NestedScreen.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: "Карта",
          headerStyle: {
            borderBottomColor: "#E5E5E5",
            borderBottomWidth: 1,
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
            // paddingBottom: 16,
          },
        }}
      />
      <NestedScreen.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          title: "Комментарии",
          headerStyle: {
            height: 100,
            borderBottomColor: "#BDBDBD",
            borderBottomWidth: 1,
          },
          headerTitleAlign: "center",
          // headerTitleContainerStyle: { paddingVertical: 11 },
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
            // paddingBottom: 16,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Feather
                name="arrow-left"
                size={24}
                color="#212121"
                style={{ marginLeft: 16 }}
              />
            </TouchableOpacity>
          ),
          tabBarStyle: { display: "none" },
          tabBarLabelStyle: { display: "none" },
          // tabBarHideOnKeyboard: true
        }}
      />
    </NestedScreen.Navigator>
  );
};

export default Home;
