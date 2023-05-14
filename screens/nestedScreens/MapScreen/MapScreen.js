import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { styles } from './MapScreen.styled';

const MapScreen = ({ route }) => {
  const { location, locationData } = route.params;

  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          ...locationData,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker coordinate={{ ...locationData }} title={location} />
      </MapView>
    </View>
  );
};

export default MapScreen;
