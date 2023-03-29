import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground} from "react-native";
// import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
  
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/image-background-375x812.jpg")}
      >
        <RegistrationScreen />
        {/* <LoginScreen /> */}
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 20,
    fontFamily: "Roboto-Regular",
  },
});
