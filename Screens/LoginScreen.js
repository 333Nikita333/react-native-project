import { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard, // импорт компонента клавиатуры
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const LoginScreen = () => {
  console.log(Platform.OS);
  //! Стейт вывода клавиатуры
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  //! Стейт пароля
  const [isShowPassword, setIsShowPassword] = useState(false);
  //! Стейт фокуса инпута
  const [inputFocused, setInputFocused] = useState(false);
  //! Стейт кнопок signSin и logIn
  const [isShowButtons, setIsShowButtons] = useState(true);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  });

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

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  //? Закрытие клавиатуры по клику на кнопку
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  //? Подключение фонтов
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.logInBox} onLayout={onLayoutRootView}>
      <Text style={styles.title}>Войти</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={styles.form}>
          <View style={styles.emailBox}>
            <TextInput
              style={styles.input}
              placeholder={"Адрес электронной почты"}
              placeholderTextColor={"#BDBDBD"}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </View>
          <View>
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
                style={styles.btnLogIn}
                activeOpacity={0.8}
                onPress={keyboardHide}
              >
                <Text style={styles.btnLogInText}>Войти</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnSignIn} activeOpacity={0.8}>
                <Text style={styles.btnSignInText}>
                  Нет аккаунта? Зарегистрироваться
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  logInBox: {
    paddingRight: 16,
    paddingLeft: 16,

    backgroundColor: "#fff",
  },
  title: {
    marginTop: 32,

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
  emailBox: {
    marginTop: 16,
  },
  passwordBox: {
    marginTop: 16,
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
  inputPassword: {
    paddingRight: 85,
    marginBottom: 43,
  },
  btnSignIn: {
    marginTop: 16,
    marginBottom: 111,
  },
  btnSignInText: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  btnLogIn: {
    borderRadius: 100,
    padding: 16,

    backgroundColor: "#FF6C00",
  },
  btnLogInText: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    color: "#ffffff",
  },
});

export default LoginScreen;
