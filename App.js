import "react-native-gesture-handler";
import { useCallback } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Authorization from "./src/screens/auth/Authorization/Authorization";
// import Home from "./src/screens/user/Home/HomeTabs";
// import CommentsScreen from "./src/screens/user/CommentsScreen/CommentsScreen";
// import { AntDesign } from "@expo/vector-icons";
import General from "./src/screens/user/General";

export default function App() {
  const Stack = createNativeStackNavigator();

  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  onLayoutRootView();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Authorization">
        <Stack.Screen
          name="Authorization"
          component={Authorization}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="General"
          component={General}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",

    flex: 1,
    fontFamily: "Roboto-Regular",
    backgroundColor: "#fff",
  },
});
