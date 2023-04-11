import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../LoginScreen/LoginScreen";
import RegistrationScreen from "../RegistrationScreen/RegistrationScreen";

const Authorization = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Authorization;
