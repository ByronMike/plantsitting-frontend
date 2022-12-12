// ! Enlever les messages d'erreurs
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider, Text, Box } from "native-base";
import LandingScreen from "./screens/LandingScreen";
import Presentation1Screen from "./screens/Presentation1Screen";
import Presentation2Screen from "./screens/Presentation2Screen";
import Presentation3Screen from "./screens/Presentation3Screen";
import Presentation4Screen from "./screens/Presentation4Screen";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import SignupScreen from "./screens/SignupScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      // TODO Rajouter les tabs
      {/* <Tab.Screen name="Accueil" component={HomeScreen} />
     <Tab.Screen name="Chercher" component={SearchScreen} />
     <Tab.Screen name="Messages" component={MessagesScreen} />
     <Tab.Screen name="Profile" component={ProfileScreen} /> */}
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Presentation1" component={Presentation1Screen} />
          <Stack.Screen name="Presentation2" component={Presentation2Screen} />
          <Stack.Screen name="Presentation3" component={Presentation3Screen} />
          <Stack.Screen name="Presentation4" component={Presentation4Screen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />

          <Stack.Screen name="Signup" component={SignupScreen} />

          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
