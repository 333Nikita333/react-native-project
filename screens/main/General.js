import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import { Feather, Ionicons, AntDesign } from '@expo/vector-icons';

import Home from './Home/Home';
import CreatePostsScreen from './CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from './ProfileScreen/ProfileScreen';

const BottomTab = createBottomTabNavigator();

const General = ({ navigation }) => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarShowIcon: true,
        tabBarItemStyle: {
          height: 40,
          maxWidth: 70,
          borderRadius: 20,
          marginRight: 15,
          marginLeft: 15,
        },
        tabBarActiveBackgroundColor: '#FF6C00',
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveBackgroundColor: '#FFFFFF',
        tabBarStyle: {
          height: 58,
          paddingHorizontal: 15,
          paddingVertical: 9,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Feather name="grid" size={24} color={color} focused={focused} />
            );
          },
          tabBarHideOnKeyboard: true,
        }}
      />
      <BottomTab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: 'Создать публикацию',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Roboto-Medium',
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
          },
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons name="add" size={30} color={color} focused={focused} />
            );
          },

          headerLeft: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <AntDesign
                name="arrowleft"
                focused="false"
                size={24}
                color="#212121"
              />
            </TouchableOpacity>
          ),

          headerStyle: {
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 1,
          },
          headerLeftContainerStyle: {
            paddingLeft: 15,
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: false,
          headerRightContainerStyle: {
            paddingRight: 15,
          },
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Feather name="user" size={24} focused={focused} color={color} />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default General;
