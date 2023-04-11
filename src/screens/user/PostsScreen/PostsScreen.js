import { StyleSheet, Text, View } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styled.container}>
      <Text>PostsScreen!</Text>
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

export default PostsScreen;
