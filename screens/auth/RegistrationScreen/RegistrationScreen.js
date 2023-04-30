import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import UserBackgroundImage from "../../../components/UeserBackgroundImage/UeserBackgroundImage";
import { styles } from "./RegistrationScreen.styled";
import {
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
import { useDispatch } from "react-redux";
import { authSignUpUser } from "../../../redux/auth/authOperations";

const initialFormData = {
  userName: "",
  email: "",
  password: "",
  // userName: "robotina",
  // email: "robotina@mail.com",
  // password: "zxc123",
};

const RegistrationScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [isShowButtons, setIsShowButtons] = useState(true);
  const [formData, setFormData] = useState(initialFormData);
  const [avatarImg, setAvatarImg] = useState(null);

  const dispatch = useDispatch();

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

  const pickUserAvatar = async () => {
    if (avatarImg) return setAvatarImg(null);

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
      setAvatarImg(result.assets[0].uri);
    }
  };

  const handleInputFocus = (inputName) => {
    setActiveInput(inputName);
  };

  const handleInputBlur = () => {
    setActiveInput(null);
  };

  const onSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();

    if (
      formData.email === "" &&
      formData.password === "" &&
      formData.userName === ""
    ) {
      console.log("Пустые поля");
      return;
    }

    console.log("formData", formData);
    dispatch(authSignUpUser(formData));
    setFormData(initialFormData);
  };

  return (
    <UserBackgroundImage>
      <View
        style={[styles.signInBox, isLandscape && styles.signInBoxLandscape]}
      >
        <View style={styles.avatarBox}>
          {avatarImg && (
            <Image style={styles.avatarImage} source={{ uri: avatarImg }} />
          )}
          <TouchableOpacity
            style={styles.addBtn}
            activeOpacity={0.8}
            onPress={pickUserAvatar}
          >
            {avatarImg ? (
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
                  activeInput === "userName" && styles.inputFocused,
                ]}
                cursorColor="#FF6C00"
                placeholder={"Логин"}
                placeholderTextColor={"#BDBDBD"}
                onFocus={() => handleInputFocus("userName")}
                onBlur={handleInputBlur}
                value={formData.userName}
                onChangeText={(value) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    userName: value,
                  }))
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
                  onPress={onSubmit}
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

export default RegistrationScreen;
