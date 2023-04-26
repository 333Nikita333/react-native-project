import React, { useState, useEffect } from "react";
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
import { FontAwesome, Feather } from "@expo/vector-icons";
import { Camera } from "expo-camera";
// import * as Location from "expo-location";
import { styles } from "./CreatePostsScreen.styled";

const initialData = {
  photo: "",
  name: "",
  location: "",
};

const CreatePostsScreen = ({ navigation }) => {
  //! Стейт с данными поста
  const [contentData, setContentData] = useState(initialData);
  //! Стейт отображения кнопки удаления контента при показанной клавиатуре
  const [isShowButton, setIsShowButton] = useState(true);
  //! Стейт фото
  const [photo, setPhoto] = useState(null);
  //! Стейт камеры
  const [cameraRef, setCameraRef] = useState(null);
  //! Стейт активной камеры
  const [isCameraActive, setIsCameraActive] = useState(false);

  //? Хук, который отображает текущую ширину и высоту экрана
  const { width, height } = useWindowDimensions();

  //? Определение ориентации экрана
  const isPortrait = height > width;
  const isLandscape = height < width;

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

  //? Сделать фотографию и получить метку локации
  const takePhoto = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const photo = await cameraRef.takePictureAsync(options);
      // const location = await Location.getCurrentPositionAsync();
      // console.log("latitude", location.coords.latitude);
      // console.log("longitude", location.coords.longitude);
      setPhoto(photo.uri);
      setContentData((prevState) => ({ ...prevState, photo: photo.uri }));
      setIsCameraActive(false);
      // console.log("photo", photo);
    }
  };

  //? Отправка фотографии
  const handlePressPublish = () => {
    // console.log("navigation", navigation);
    console.log("contentData", contentData);
    // if (isFormDataNotEmpty()) return;
    navigation.navigate("DefaultScreenPosts", contentData);
  };

  //? Удаление контента
  const handleDeleteContent = () => {
    if (contentData.photo === "") return;

    setContentData(initialData);
  };

  //? Проверка, пустые ли поля формы
  const isFormDataNotEmpty = () => {
    return (
      contentData.photo !== "" &&
      contentData.name !== "" &&
      contentData.location !== ""
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.contentBlock}>
            <View style={styles.contentPick}>
              {isCameraActive ? (
                <Camera
                  style={styles.contentPick}
                  ref={(ref) => setCameraRef(ref)}
                >
                  <TouchableOpacity
                    style={[
                      styles.btnContentPic,
                      isCameraActive && styles.btnContentPicActive,
                    ]}
                    activeOpacity={0.8}
                    onPress={takePhoto}
                  >
                    <FontAwesome
                      name="camera"
                      size={24}
                      color={isCameraActive ? "#fff" : "#BDBDBD"}
                    />
                  </TouchableOpacity>
                </Camera>
              ) : (
                <View
                  style={styles.contentPick}
                  ref={(ref) => setCameraRef(ref)}
                >
                  {contentData.photo && (
                    <Image
                      style={styles.contentImage}
                      source={{ uri: photo }}
                    />
                  )}
                  <TouchableOpacity
                    style={[
                      styles.btnContentPic,
                      contentData.photo &&
                        !isCameraActive &&
                        styles.btnContentPicActive,
                    ]}
                    activeOpacity={0.8}
                    onPress={() => setIsCameraActive(true)}
                  >
                    <FontAwesome
                      name="camera"
                      size={24}
                      color={
                        contentData.photo && !isCameraActive
                          ? "#fff"
                          : "#BDBDBD"
                      }
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <Text style={styles.contentText}>
              {!contentData.photo ? "Загрузите фото" : "Редактировать фото"}
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
