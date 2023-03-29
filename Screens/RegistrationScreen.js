import { useCallback } from "react";
import { Ionicons } from '@expo/vector-icons'; 
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const RegistrationScreen = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.signInBox} onLayout={onLayoutRootView}>
      <View style={styles.avatarBox}>
        {/* <Image source={require("../assets/images/avatar-photo-120x120.jpg")} /> */}
        <TouchableOpacity style={styles.addBtn} activeOpacity={0.6}>
          <Ionicons name="add-circle-outline" size={28} color="#FF6C00" />
          {/* <AntDesign name="closecircleo" size={25} color="#E8E8E8" /> */}
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Регистрация</Text>
      <View style={styles.form}>
        <View style={styles.loginBox}>
          <TextInput
            style={styles.input}
            placeholder={"Логин"}
            placeholderTextColor={"#BDBDBD"}
          />
        </View>
        <View style={styles.emailBox}>
          <TextInput
            style={styles.input}
            placeholder={"Адрес электронной почты"}
            placeholderTextColor={"#BDBDBD"}
          />
        </View>
        <View style={styles.passwordBox}>
          <TextInput
            style={styles.input}
            placeholder={"Пароль"}
            placeholderTextColor={"#BDBDBD"}
            secureTextEntry={true}
          />
          <Text>Показать</Text>
        </View>
        <TouchableOpacity style={styles.btnSignIn} activeOpacity={0.8}>
          <Text style={styles.btnSignInText}>Зарегистрироваться</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLogIn} activeOpacity={0.8}>
          <Text style={styles.btnLogInText}>Уже есть аккаунт? Войти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signInBox: {
    // justifyContent: "center",
    // alignItems: "center",
    // textAlign: "center",
    paddingRight: 16,
    paddingLeft: 16,

    backgroundColor: "#fff",
  },

  avatarBox: {
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },

  addBtn: {
    position: "absolute",
    right: -14,
    bottom: 14,
    borderColor: "#F6F6F6",
    borderRadius: 45,
    backgroundColor: "#ffffff",
  },

  title: {
    marginTop: -60 + 32,

    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.72,

    color: "#212121",
  },

  form: {
    marginTop: 32,
    display: "flex",
    gap: 16,
  },

  emailBox: {
    marginTop: 16,
  },
  passwordBox: {
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    padding: 16,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    color: "#f0f8ff",
  },
});

export default RegistrationScreen;
