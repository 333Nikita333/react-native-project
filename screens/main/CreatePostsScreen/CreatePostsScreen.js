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
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { styles } from "./CreatePostsScreen.styled";

const CreatePostsScreen = ({ navigation }) => {
  const [isShowButton, setIsShowButton] = useState(true);

  const [photo, setPhoto] = useState(null);
  const [namePost, setNamePost] = useState("");
  const [locationPost, setLocationPost] = useState("");
  const [locationPostCoord, setLocationPostCoord] = useState({});
  const [locationStatus, setLocationStatus] = useState(null);

  const [cameraRef, setCameraRef] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;
  const isLandscape = height < width;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      setLocationStatus(status === "granted");
    })();
  }, []);

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

  const takePhoto = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const { uri } = await cameraRef.takePictureAsync(options);
      await MediaLibrary.createAssetAsync(uri);
      setPhoto(uri);
      setIsCameraActive(false);
    }
    const location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setLocationPostCoord(coords);
  };

  const handlePressPublish = () => {
    navigation.navigate("PostsScreen", {
      photo,
      namePost,
      locationPost,
      locationPostCoord,
    });
    // handleDeleteContent();
  };

  const handleDeleteContent = () => {
    setPhoto(null);
    setNamePost("");
    setLocationPost("");
  };

  const isFormDataNotEmpty = () => {
    return photo !== null && namePost !== "" && locationPost !== "";
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <Text style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        No access to camera
      </Text>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.contentBlock}>
            <View style={styles.contentPick}>
              {isCameraActive ? (
                <Camera
                  style={styles.contentPick}
                  type={type}
                  ref={setCameraRef}
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
                <View style={styles.contentPick} ref={setCameraRef}>
                  {photo && (
                    <Image
                      style={styles.contentImage}
                      source={{ uri: photo }}
                    />
                  )}
                  <TouchableOpacity
                    style={[
                      styles.btnContentPic,
                      photo && !isCameraActive && styles.btnContentPicActive,
                    ]}
                    activeOpacity={0.8}
                    onPress={() => setIsCameraActive(true)}
                  >
                    <FontAwesome
                      name="camera"
                      size={24}
                      color={photo && !isCameraActive ? "#fff" : "#BDBDBD"}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <Text style={styles.contentText}>
              {!photo ? "Загрузите фото" : "Редактировать фото"}
            </Text>
          </View>
          <View style={styles.formContent}>
            <View style={styles.contentNameBox}>
              <TextInput
                style={[styles.input, styles.inputName]}
                cursorColor="#FF6C00"
                placeholder={"Название..."}
                placeholderTextColor={"#BDBDBD"}
                value={namePost}
                onChangeText={setNamePost}
              />
            </View>
            <View style={styles.contentLocationBox}>
              <TextInput
                style={[styles.input, styles.inputLocation]}
                cursorColor="#FF6C00"
                placeholder={"Местность..."}
                placeholderTextColor={"#BDBDBD"}
                value={locationPost}
                onChangeText={setLocationPost}
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
