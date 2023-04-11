import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  Image,
  useWindowDimensions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import UserBackgroundImage from "../../../components/UeserBackgroundImage/UeserBackgroundImage";

const initialFormData = {
  login: "",
  email: "",
  password: "",
};
const RegistrationScreen = ({ navigation }) => {
  //! Стейт отображения клавиатуры
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  //! Стейт отображения пароля
  const [isShowPassword, setIsShowPassword] = useState(false);
  //! Стейт для хранения имени текущего активного инпута
  const [activeInput, setActiveInput] = useState(null);
  //! Стейт хранения данных с формы
  const [formData, setFormData] = useState(initialFormData);
  //! Стейт хранения аватарки пользователя
  const [userAvatar, setUserAvatar] = useState(null);
  //! Стейт отображения кнопок signSin и logIn
  const [isShowButtons, setIsShowButtons] = useState(true);

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

  //? Хук, который отображает текущую ширину и высоту экрана
  const { width, height } = useWindowDimensions();

  //? Определение ориентации экрана
  const isPortrait = height > width;
  const isLandscape = height < width;

  //? Зарузка аватарки пользователя
  const pickUserAvatar = async () => {
    if (userAvatar) return setUserAvatar(null);

    // Для запуска библиотеки изображений не требуется никаких разрешений
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.canceled) {
      return;
    }

    if (!result.canceled) {
      setUserAvatar(result.assets[0].uri);
    }
  };

  //? Переключение стейта инпута при фокусе
  const handleInputFocus = (inputName) => {
    setActiveInput(inputName);
  };

  //? Переключение стейта инпута при потере фокуса
  const handleInputBlur = () => {
    setActiveInput(null);
  };

  //? Регистрация и Закрытие клавиатуры по клику на кнопку
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    setFormData(initialFormData);
    console.log(formData);
    navigation.navigate("Home");
    Keyboard.dismiss();
  };

  return (
    <UserBackgroundImage>
      <View
        style={[styles.signInBox, isLandscape && styles.signInBoxLandscape]}
      >
        <View style={styles.avatarBox}>
          {userAvatar && (
            <Image style={styles.avatarImage} source={{ uri: userAvatar }} />
          )}
          <TouchableOpacity
            style={styles.addBtn}
            activeOpacity={0.8}
            onPress={pickUserAvatar}
          >
            {userAvatar ? (
              <AntDesign name="closecircleo" size={25} color="#E8E8E8" />
            ) : (
              <AntDesign
                style={styles.iconAddBtn}
                name="pluscircleo"
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
                style={[
                  styles.input,
                  activeInput === "login" && styles.inputFocused,
                ]}
                cursorColor="#FF6C00"
                placeholder={"Логин"}
                placeholderTextColor={"#BDBDBD"}
                onFocus={() => handleInputFocus("login")}
                onBlur={handleInputBlur}
                value={formData.login}
                onChangeText={(value) =>
                  setFormData((prevState) => ({ ...prevState, login: value }))
                }
              />
            </View>
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
                value={formData.email}
                onChangeText={(value) =>
                  setFormData((prevState) => ({ ...prevState, email: value }))
                }
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
                value={formData.password}
                onChangeText={(value) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    password: value,
                  }))
                }
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
                <TouchableOpacity
                  style={styles.btnLogIn}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.btnLogInText}>
                    Уже есть аккаунт? Войти
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </KeyboardAvoidingView>
      </View>
    </UserBackgroundImage>
  );
};

const styles = StyleSheet.create({
  signInBox: {
    marginTop: "auto",
    paddingRight: 16,
    paddingLeft: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    backgroundColor: "#fff",
  },
  signInBoxLandscape: {
    marginHorizontal: 150,
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
    width: 120,
    height: 120,
    resizeMode: "cover",
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
    textAlign: "center",

    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
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
    paddingTop: 16,
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
