import { useCallback, useEffect, useState } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  Image, // импорт компонента клавиатуры
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const RegistrationScreen = () => {
  console.log(Platform.OS);
  //! Стейт вывода клавиатуры
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  //! Стейт пароля
  const [isShowPassword, setIsShowPassword] = useState(false);
  //! Стейт фокуса инпута
  const [inputFocused, setInputFocused] = useState(false);
  //! Стейт кнопок signIn и logIn
  const [isShowButtons, setIsShowButtons] = useState(true);
  //! Стейс аватарки пользователя
  const [isShowAvatar, setIsShowAvatar] = useState(false);

  //? Подключение фонтов
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  });

  //? Повесить слушателей события на клавиатуру при монтировании
  //? и снятие - при размонтировании
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsShowButtons(false);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsShowButtons(true);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  //? Переключение стейта инпута при фокусе
  const handleInputFocus = () => {
    setInputFocused(true);
  };

  //? Переключение стейта инпута при потере фокуса
  const handleInputBlur = () => {
    setInputFocused(false);
  };

  //? Закрытие клавиатуры по клику на кнопку
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  //? Загрузка фонтов
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  //? Показать или скрыть аватарку пользователя
  const onPressBtnAddAvatar = () => {
    setIsShowAvatar(!isShowAvatar);
  };

  return (
    <View style={styles.signInBox} onLayout={onLayoutRootView}>
      <View style={styles.avatarBox}>
        {isShowAvatar && (
          <Image
            style={styles.avatarImage}
            source={require("../assets/images/avatar-photo-120x120.jpg")}
          />
        )}
        <TouchableOpacity
          style={styles.addBtn}
          activeOpacity={0.8}
          onPress={onPressBtnAddAvatar}
        >
          {isShowAvatar ? (
            <AntDesign name="closecircleo" size={25} color="#E8E8E8" />
          ) : (
            <Ionicons
              style={styles.iconAddBtn}
              name="add-circle-outline"
              size={25}
              color="#FF6C00"
            />
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Регистрация</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={styles.form}>
          <View style={styles.loginBox}>
            <TextInput
              style={styles.input}
              placeholder={"Логин"}
              placeholderTextColor={"#BDBDBD"}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </View>
          <View style={styles.emailBox}>
            <TextInput
              style={styles.input}
              placeholder={"Адрес электронной почты"}
              placeholderTextColor={"#BDBDBD"}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </View>
          <View style={styles.passwordBox}>
            <TextInput
              style={{ ...styles.input, ...styles.inputPassword }}
              placeholder={"Пароль"}
              placeholderTextColor={"#BDBDBD"}
              secureTextEntry={!isShowPassword}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <TouchableOpacity
              style={styles.btnShowPassword}
              onPress={() => setIsShowPassword(!isShowPassword)}
            >
              <Text style={styles.textBtnShowPassword}>
                {isShowPassword ? "Скрыть" : "Показать"}
              </Text>
            </TouchableOpacity>
          </View>
          {isShowButtons && (
            <>
              <TouchableOpacity
                style={styles.btnSignIn}
                activeOpacity={0.8}
                onPress={keyboardHide}
              >
                <Text style={styles.btnSignInText}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnLogIn} activeOpacity={0.8}>
                <Text style={styles.btnLogInText}>Уже есть аккаунт? Войти</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  signInBox: {
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
  avatarImage: {
    borderRadius: 16,
  },
  addBtn: {
    position: "absolute",
    right: -14,
    bottom: 14,
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
  },
  form: {
    marginTop: 32,
    display: "flex",
    gap: 16,
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
    color: "#212121",
  },
  emailBox: {
    marginTop: 16,
  },
  passwordBox: {
    marginTop: 16,
    marginBottom: 43,
  },
  btnShowPassword: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  textBtnShowPassword: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  inputPassword: {
    paddingRight: 85,
  },
  btnSignIn: {
    borderRadius: 100,
    padding: 16,

    backgroundColor: "#FF6C00",
  },
  btnSignInText: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    color: "#ffffff",
  },
  btnLogIn: {
    marginTop: 16,
    marginBottom: 45,
  },
  btnLogInText: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});

export default RegistrationScreen;
