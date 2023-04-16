import {
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from "react-native";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { styles } from "./CreatePostsScreen.styled";

const initialData = {
  name: "",
  location: "",
};

const CreatePostsScreen = () => {
  //! Стейт хранения добавляемой картинки поста
  const [contentImage, setContentImage] = useState(null);
  //! Стейт хранения добавляемой текстовой информации поста
  const [contentData, setContentData] = useState(initialData);
  // //! Стейт кнопки "Опубликовать"
  // const [disabled, setDisabled] = useState(true);
  //! Стейт отображения кнопки удаления контента при показанной клавиатуре
  const [isShowButton, setIsShowButton] = useState(true);

  //? Хук, который отображает текущую ширину и высоту экрана
  const { width, height } = useWindowDimensions();

  //? Определение ориентации экрана
  const isPortrait = height > width;
  const isLandscape = height < width;

  //? Выбор изображения
  const pickContentImage = async () => {
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
      setContentImage(result.assets[0].uri);
    }
  };

  //? Вешание слушателей события на клавиатуру при монтировании
  //? и снятие - перед размонтированием
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsShowButton(false);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsShowButton(true);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  //? Переключение дисейбла кнопки отправить
  const handlePressPublish = () => {
    console.log("Нажали на кнопку отправить")
  };

  //? Удаление контента
  const handleDeleteContent = () => {
    if (!contentImage) return;

    setContentImage(null);
  };

  //? Проверяется, пустые ли поля формы
  const isFormDataNotEmpty = () => {
    return contentData.name !== "" && contentData.location !== "";
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.contentBlock}>
            <View style={styles.contentPick}>
              {contentImage && (
                <Image
                  style={styles.contentImage}
                  source={{
                    uri: contentImage,
                  }}
                />
              )}
              <TouchableOpacity
                style={[
                  styles.btnContentPic,
                  contentImage && styles.btnContentPicActive,
                ]}
                activeOpacity={0.8}
                onPress={pickContentImage}
              >
                <FontAwesome
                  name="camera"
                  size={24}
                  color={contentImage ? "#fff" : "#BDBDBD"}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.contentText}>
              {!contentImage ? "Загрузите фото" : "Редактировать фото"}
            </Text>
          </View>
          <View style={styles.formContent}>
            <View style={styles.contentNameBox}>
              <TextInput
                style={[styles.input, styles.inputName]}
                cursorColor="#FF6C00"
                placeholder={"Название..."}
                placeholderTextColor={"#BDBDBD"}
                value={contentData.name}
                onChangeText={(value) =>
                  setContentData((prevState) => ({ ...prevState, name: value }))
                }
              />
            </View>
            <View style={styles.contentLocationBox}>
              <TextInput
                style={[styles.input, styles.inputLocation]}
                cursorColor="#FF6C00"
                placeholder={"Местность..."}
                placeholderTextColor={"#BDBDBD"}
                value={contentData.location}
                onChangeText={(value) =>
                  setContentData((prevState) => ({
                    ...prevState,
                    location: value,
                  }))
                }
              />
              <Feather
                style={{
                  position: "absolute",
                  left: 0,
                  top: 20,
                }}
                name="map-pin"
                size={24}
                color="#BDBDBD"
              />
            </View>
            <TouchableOpacity
              style={[
                styles.btnPublish,
                isFormDataNotEmpty() && styles.btnPublishActive,
              ]}
              activeOpacity={0.8}
              onPress={handlePressPublish}
            >
              <Text
                style={[
                  styles.btnText,
                  isFormDataNotEmpty() && styles.btnTextActive,
                ]}
              >
                Опубликовать
              </Text>
            </TouchableOpacity>
          </View>
          {isShowButton && (
            <TouchableOpacity
              style={[
                styles.btnTrash,
                isLandscape && styles.btnTrashIsLandscape,
              ]}
              activeOpacity={0.8}
              onPress={handleDeleteContent}
            >
              <Feather name="trash-2" size={24} color="#DADADA" />
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;
