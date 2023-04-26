import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";

import LoginScreen from "./screens/auth/LoginScreen/LoginScreen";
import RegistrationScreen from "./screens/auth/RegistrationScreen/RegistrationScreen";
import Home from "./screens/main/Home/Home";
import CreatePostsScreen from "./screens/main/CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "./screens/main/ProfileScreen/ProfileScreen";

const Auth = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function useRoute(isAuth) {
  if (!isAuth) {
    return (
      <Auth.Navigator initialRouteName="Registration">
        <Auth.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Auth.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
      </Auth.Navigator>
    );
  }
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarShowIcon: true,
        tabBarItemStyle: {
          height: 40,
          maxWidth: 70,
          borderRadius: 20,
          marginTop: 9,
          marginRight: 15,
          marginLeft: 15,
        },
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveBackgroundColor: "#FFFFFF",

        tabBarStyle: {
          paddingHorizontal: 15,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Публикации",
          headerStyle: styles.header,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
            paddingBottom: 16,
          },
          headerRightContainerStyle: {
            paddingRight: 16,
            paddingBottom: 16,
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          headerStyle: {
            borderBottomColor: "#E5E5E5",
            borderBottomWidth: 1,
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Feather
                name="grid"
                size={24}
                color={focused ? "#FFFFFF" : "#BDBDBD"}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name="add"
                size={30}
                color={focused ? "#FFFFFF" : "#BDBDBD"}
              />
            );
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

          headerStyle: {
            borderBottomColor: "#E5E5E5",
            borderBottomWidth: 1,
          },
          headerLeftContainerStyle: {
            paddingLeft: 15,
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: false,
          headerRightContainerStyle: {
            paddingRight: 15,
          },

          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Feather
                name="user"
                size={24}
                color={!focused ? "#BDBDBD" : color}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
  },
  plusBarIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
  },
});
