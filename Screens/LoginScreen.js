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

const LoginScreen = ({ switchActiveForm }) => {
  console.log(Platform.OS);
  //! Стейт вывода клавиатуры
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  //! Стейт пароля
  const [isShowPassword, setIsShowPassword] = useState(false);
  //! Стейт кнопок signSin и logIn
  const [isShowButtons, setIsShowButtons] = useState(true);
  //! Стейт для хранения имени текущего активного инпута
  const [activeInput, setActiveInput] = useState(null);

  //? Подключение фонтов
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  });

  //? Вешание слушателей события на клавиатуру при монтировании
  //? и снятие - перед размонтированием
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
  const handleInputFocus = (inputName) => {
    setActiveInput(inputName);
  };

  //? Переключение стейта инпута при потере фокуса
  const handleInputBlur = () => {
    setActiveInput(null);
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

  return (
    <View style={styles.logInBox} onLayout={onLayoutRootView}>
      <Text style={styles.title}>Войти</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={styles.form}>
          <View style={styles.emailBox}>
            <TextInput
              style={[
                styles.input,
                activeInput === "email" && styles.inputFocused,
              ]}
              cursorColor="#FF6C00"
              placeholder={"Адрес электронной почты"}
              placeholderTextColor={"#BDBDBD"}
              onFocus={() => handleInputFocus("email")}
              onBlur={handleInputBlur}
            />
          </View>
          <View style={styles.passwordBox}>
            <TextInput
              style={[
                styles.input,
                activeInput === "password" && styles.inputFocused,
              ]}
              cursorColor="#FF6C00"
              placeholder={"Пароль"}
              placeholderTextColor={"#BDBDBD"}
              secureTextEntry={!isShowPassword}
              onFocus={() => handleInputFocus("password")}
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
              <TouchableOpacity
                style={styles.btnSignIn}
                activeOpacity={0.8}
                onPress={switchActiveForm}
              >
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

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
  inputFocused: {
    borderColor: "#FF6C00",
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
    paddingTop: 16,
    paddingBottom: 16,
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
