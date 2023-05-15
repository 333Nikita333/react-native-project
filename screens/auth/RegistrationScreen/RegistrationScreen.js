import { useEffect, useState } from 'react';
import UserBackgroundImage from '../../../components/UeserBackgroundImage/UeserBackgroundImage';
import { styles } from './RegistrationScreen.styled';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  useWindowDimensions,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { authRegister } from '../../../redux/auth/authOperations';
import AvatarBox from '../../../components/AvatarBox/AvatarBox';

const initialFormData = {
  // email: '',
  // password: '',
  // nickName: '',
  email: 'robotina@mail.com',
  password: 'zxc123',
  nickName: 'robotina',
};

const RegistrationScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [isShowButtons, setIsShowButtons] = useState(true);

  const [formData, setFormData] = useState(initialFormData);
  const [avatarImg, setAvatarImg] = useState('');

  const dispatch = useDispatch();

  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;
  const isLandscape = height < width;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsShowButtons(false);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsShowButtons(true);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleInputFocus = inputName => {
    setActiveInput(inputName);
  };

  const handleInputBlur = () => {
    setActiveInput(null);
  };

  const onSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();

    if (avatarImg === '') {
      alert('Нет изображения');
      return;
    }

    if (
      formData.email === '' &&
      formData.password === '' &&
      formData.nickName === ''
    ) {
      alert('Пустые поля');
      return;
    }

    const data = { ...formData, photoURL: avatarImg };
    dispatch(authRegister(data));
    setFormData(initialFormData);
  };

  return (
    <UserBackgroundImage>
      <View
        style={[styles.signInBox, isLandscape && styles.signInBoxLandscape]}
      >
        <View style={styles.avatarBox}>
          <AvatarBox avatarImg={avatarImg} setAvatarImg={setAvatarImg} />
        </View>
        <Text style={styles.title}>Регистрация</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.form}>
            <View style={styles.loginBox}>
              <TextInput
                style={[
                  styles.input,
                  activeInput === 'nickName' && styles.inputFocused,
                ]}
                cursorColor="#FF6C00"
                placeholder={'Логин'}
                placeholderTextColor={'#BDBDBD'}
                onFocus={() => handleInputFocus('nickName')}
                onBlur={handleInputBlur}
                value={formData.nickName}
                onChangeText={value =>
                  setFormData(prevState => ({
                    ...prevState,
                    nickName: value,
                  }))
                }
              />
            </View>
            <View style={styles.emailBox}>
              <TextInput
                style={[
                  styles.input,
                  activeInput === 'email' && styles.inputFocused,
                ]}
                cursorColor="#FF6C00"
                placeholder={'Адрес электронной почты'}
                placeholderTextColor={'#BDBDBD'}
                onFocus={() => handleInputFocus('email')}
                onBlur={handleInputBlur}
                value={formData.email}
                onChangeText={value =>
                  setFormData(prevState => ({ ...prevState, email: value }))
                }
              />
            </View>
            <View style={styles.passwordBox}>
              <TextInput
                style={[
                  styles.input,
                  activeInput === 'password' && styles.inputFocused,
                ]}
                cursorColor="#FF6C00"
                placeholder={'Пароль'}
                placeholderTextColor={'#BDBDBD'}
                secureTextEntry={!isShowPassword}
                onFocus={() => handleInputFocus('password')}
                onBlur={handleInputBlur}
                value={formData.password}
                onChangeText={value =>
                  setFormData(prevState => ({
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
                  {isShowPassword ? 'Скрыть' : 'Показать'}
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
                  onPress={() => navigation.navigate('Login')}
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
