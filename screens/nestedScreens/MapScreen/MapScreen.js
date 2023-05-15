import React from 'react';
import MapView, { Marker } from 'react-native-maps';

import { styles } from './MapScreen.styled';

const MapScreen = ({ route }) => {
  const { location, locationData } = route.params;

  return (
    <MapView
      style={styles.container}
      initialRegion={{
        ...locationData,
        latitudeDelta: 0.001,
        longitudeDelta: 0.006,
      }}
    >
      <Marker coordinate={{ ...locationData }} title={location} />
    </MapView>
  );
};

export default MapScreen;
