import { useEffect, useState } from "react";
import UserBackgroundImage from "../../../components/UeserBackgroundImage/UeserBackgroundImage";
import { styles } from "./LoginScreen.styled";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  useWindowDimensions,
} from "react-native";

const initialFormData = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [formData, setFormData] = useState(initialFormData);
  const [isShowButtons, setIsShowButtons] = useState(true);

  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;
  const isLandscape = height < width;

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

  const handleInputFocus = (inputName) => {
    setActiveInput(inputName);
  };

  const handleInputBlur = () => {
    setActiveInput(null);
  };

  const onSubmit = () => {
    setIsShowKeyboard(false);
    setFormData(initialFormData);
    Keyboard.dismiss();
    navigation.navigate("Home");
  };

  return (
    <UserBackgroundImage>
      <View style={[styles.logInBox, isLandscape && styles.logInBoxLandscape]}>
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
                  style={styles.btnLogIn}
                  activeOpacity={0.8}
                  onPress={onSubmit}
                >
                  <Text style={styles.btnLogInText}>Войти</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.btnSignIn,
                    isLandscape && styles.btnSignInIsLandscape,
                  ]}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("Registration")}
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
    </UserBackgroundImage>
  );
};

export default LoginScreen;
