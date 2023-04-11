import { StyleSheet, Text, View } from "react-native";

const CreatePostsScreen = () => {
  return (
    <View style={styled.container}>
      <Text>CreatePostsScreen!</Text>
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

export default CreatePostsScreen;
