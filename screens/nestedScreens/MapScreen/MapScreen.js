import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
  const locationPostCoord = route.params[0].locationPostCoord;

  console.log("locationPostCoordLatitude", locationPostCoord.latitude);
  console.log("locationPostCoordLongitude", locationPostCoord.longitude);

  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: locationPostCoord.latitude,
          longitude: locationPostCoord.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{
            latitude: locationPostCoord.latitude,
            longitude: locationPostCoord.longitude,
          }}
          title="travel photo"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
