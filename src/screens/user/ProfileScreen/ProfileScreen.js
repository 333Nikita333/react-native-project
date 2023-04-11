import { StyleSheet, Text, View } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styled.container}>
      <Text>ProfileScreen!</Text>
    </View>
  );
};

const styled = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;