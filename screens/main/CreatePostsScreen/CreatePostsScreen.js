import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
} from 'react-native';
import uuid from 'react-native-uuid';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import { styles } from './CreatePostsScreen.styled';
import uploadPhotoToServer, {
  firebaseStore,
} from '../../../api/uploadPhotoToServer';
import { uploadPostToServer } from '../../../redux/posts/postsOperations';

const initValues = { title: '', place: '' };

const CreatePostsScreen = ({ imgUrl, navigation }) => {
  const [isShowButton, setIsShowButton] = useState(true);

  const [photoUri, setPhotoUri] = useState('');
  const [values, setValues] = useState(initValues);
  const [placeLocation, setPlaceLocation] = useState(null);
  const [locationStatus, setLocationStatus] = useState(null);

  const [cameraRef, setCameraRef] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const dispatch = useDispatch();

  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;
  const isLandscape = height < width;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      if (status !== 'granted') {
        console.log('Permission to access the camera has been denied');
      }

      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      setLocationStatus(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsShowButton(false);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsShowButton(true);
      },
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
      setPhotoUri(uri);
      setIsCameraActive(false);
    }
    const location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setPlaceLocation(coords);
  };

  const handlePressPublish = async () => {
    const photoUrl = await uploadPhotoToServer(photoUri, firebaseStore.post);
    const data = {
      ...values,
      photoUri: photoUrl,
      placeLocation,
      createdAt: Date.now(),
    };

    const newPost = {
      id: uuid.v4(),
      title: data.title,
      messageCount: 0,
      likeCount: 0,
      imgUri: data.photoUri,
      location: data.place,
      locationData: {
        latitude: data?.placeLocation?.latitude ?? 0,
        longitude: data?.placeLocation?.longitude ?? 0,
      },
      comments: [],
    };
    dispatch(uploadPostToServer(newPost));

    navigation.navigate('PostsScreen');
    handleDeleteContent();
  };

  const handleDeleteContent = () => {
    setValues(initValues);
    setPhotoUri('');
  };

  const onChangeText = (value, name) => {
    setValues(v => ({ ...v, [name]: value }));
  };

  const isFormDataNotEmpty = () => {
    return photoUri !== '' && values.title !== '' && values.place !== '';
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <Text style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
                      color={isCameraActive ? '#fff' : '#BDBDBD'}
                    />
                  </TouchableOpacity>
                </Camera>
              ) : (
                <View style={styles.contentPick} ref={setCameraRef}>
                  {photoUri && (
                    <Image
                      style={styles.contentImage}
                      source={{ uri: photoUri }}
                    />
                  )}
                  <TouchableOpacity
                    style={[
                      styles.btnContentPic,
                      photoUri && !isCameraActive && styles.btnContentPicActive,
                    ]}
                    activeOpacity={0.8}
                    onPress={() => setIsCameraActive(true)}
                  >
                    <FontAwesome
                      name="camera"
                      size={24}
                      color={photoUri && !isCameraActive ? '#fff' : '#BDBDBD'}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <Text style={styles.contentText}>
              {!photoUri ? 'Загрузите фото' : 'Редактировать фото'}
            </Text>
          </View>
          <View style={styles.formContent}>
            <View style={styles.contentNameBox}>
              <TextInput
                style={[styles.input, styles.inputName]}
                cursorColor="#FF6C00"
                placeholder={'Название...'}
                placeholderTextColor={'#BDBDBD'}
                value={values.title}
                onChangeText={v => onChangeText(v, 'title')}
              />
            </View>
            <View style={styles.contentLocationBox}>
              <TextInput
                style={[styles.input, styles.inputLocation]}
                cursorColor="#FF6C00"
                placeholder={'Местность...'}
                placeholderTextColor={'#BDBDBD'}
                value={values.place}
                onChangeText={v => onChangeText(v, 'place')}
              />
              <Feather
                style={{
                  position: 'absolute',
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
