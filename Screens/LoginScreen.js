import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.logInContainer}>
      <Text style={styles.title}>Войти</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder={"Адрес электронной почты"}
          placeholderTextColor={"#BDBDBD"}
        />
        <View>
          <TextInput
            style={styles.input}
            placeholder={"Пароль"}
            placeholderTextColor={"#BDBDBD"}
            secureTextEntry={true}
          />
          <Text>Показать</Text>
        </View>
        <TouchableOpacity style={styles.btnSignIn}>
          <Text style={styles.btnSignInText}>Войти</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLogIn}>
          <Text style={styles.btnLogInText}>Нет аккаунта? Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
