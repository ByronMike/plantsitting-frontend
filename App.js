// ! Enlever les messages d'erreurs
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandingScreen from './screens/LandingScreen';
import Presentation1Screen from './screens/Presentation1Screen';

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
}

export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="LandingScreen" component={LandingScreen} />
       <Stack.Screen name="Presentation1Screen" component={Presentation1Screen} />
       <Stack.Screen name="TabNavigator" component={TabNavigator} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}