import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
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
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Image
            style={styles.image}
            source={require("./assets/images/image-background-375x812.jpg")}
          />
          {isActiveForm ? (
            <RegistrationScreen
              style={styles.reg}
              switchActiveForm={switchActiveForm}
            />
          ) : (
            <LoginScreen
              style={styles.loge}
              switchActiveForm={switchActiveForm}
            />
          )}
        </ScrollView>
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
  contentContainer: {
    flexGrow: 1,
    keyboardShouldPersistTaps: "handled",
  },
  image: {
    position: "absolute",
    top: 0,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontFamily: "Roboto-Regular",
  },
});
