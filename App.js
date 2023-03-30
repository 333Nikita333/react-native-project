import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
  const [isActiveForm, setIsActiveForm] = useState(true);

  //? Пелеключение активной формы
  const switchActiveForm = () => {
    setIsActiveForm(!isActiveForm);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/images/image-background-375x812.jpg")}
        >
          {isActiveForm ? (
            <RegistrationScreen switchActiveForm={switchActiveForm} />
          ) : (
            <LoginScreen switchActiveForm={switchActiveForm} />
          )}
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
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
