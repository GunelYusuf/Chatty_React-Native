import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chats from './screens/Chats';
import Settings from './screens/Settings';
import { Ionicons } from "@expo/vector-icons";
import { colors } from './config/constants';


const ChatsStack = createStackNavigator()

const ChatsScreen = () => {
  return(
    <ChatsStack.Navigator>
      <ChatsStack.Screen name="Chats" component={Chats}/>
    </ChatsStack.Navigator>  
  )
}

const SettingsStack = createStackNavigator()

const SettingsScreen = () => {
  return(
    <SettingsStack.Navigator>
      <SettingsStack.Screen name='settings' component={Settings}/>
    </SettingsStack.Navigator>
  )
}

const Tabs = createBottomTabNavigator()

const TabsScreen = () => (
  <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Chats") {
          iconName = focused ? "chatbubbles" : "chatbubbles-outline";
        } else if (route.name === "Settings") {
          iconName = focused ? "settings" : "settings-outline";
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tabs.Screen name="Chats" component={ChatsScreen} />
    <Tabs.Screen name="Settings" component={SettingsScreen} />
  </Tabs.Navigator>
);

const MainStack = createStackNavigator()

const App = () =>{
  return(
    <NavigationContainer>
       <MainStack.Navigator headerMode="none">
          <MainStack.Screen  name="Tabs" component={TabsScreen}/>
       </MainStack.Navigator>
    </NavigationContainer>
  )
};

export default App;