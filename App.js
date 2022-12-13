// ! Enlever les messages d'erreurs
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider } from "native-base";

import LandingScreen from "./screens/LandingScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import FirstScreen from "./screens/FirstScreen";
import Presentation1Screen from "./screens/Presentation1Screen";
import Presentation2Screen from "./screens/Presentation2Screen";
import Presentation3Screen from "./screens/Presentation3Screen";
import Presentation4Screen from "./screens/Presentation4Screen";
import SigninScreen from "./screens/SigninScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import MapScreen from "./screens/MapScreen";

// ! A intégrer dans MapScreen
import ListingScreen from "./screens/ListingScreen";
import Plantsitter1Screen from "./screens/Plantsitter1Screen";
import Plantsitter2Screen from "./screens/Plantsitter2Screen";
import Plantsitter3Screen from "./screens/Plantsitter3Screen";
import SignupScreen from "./screens/SignupScreen";
import SummaryScreen from "./screens/SummaryScreen";
import CongratulationScreen from "./screens/CongratulationScreen";
import AssessmentScreen from "./screens/AssessmentScreen";

// Tab screens
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import MessagesScreen from "./screens/MessagesScreen";
import ProfileScreen from "./screens/ProfileScreen";

import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import user from "./reducers/user";
import userconnexion from "./reducers/userconnexion";

const reducers = combineReducers({ user, userconnexion });
// ! Empêche le reducer user d'être sauvegardé dans le local storage
const persistConfig = {
  key: "PlantSitting",
  storage: AsyncStorage,
  blacklist: ["user"],
};
const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  // Note : cette ligne permet de gérer tous type de language y compris le typescrit
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
const persistor = persistStore(store);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "";

          if (route.name === "Accueil") {
            iconName = "home";
          } else if (route.name === "Chercher") {
            iconName = "search";
          } else if (route.name === "Messages") {
            iconName = "envelope";
          } else if (route.name === "Profile") {
            iconName = "user";
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        // 2bisbis Modification de la couleur selon si tab est On ou Off
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#808080",
        tabBarStyle: {
          height: Platform.OS === "ios" ? 60 : 60,
          paddingTop: 5,
          paddingBottom: 10,
          backgroundColor: "#283618",
          position: "absolute",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Chercher" component={SearchScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Landing" component={LandingScreen} />
              <Stack.Screen
                name="First"
                component={FirstScreen}
              />
              <Stack.Screen
                name="Presentation1"
                component={Presentation1Screen}
              />
              <Stack.Screen
                name="Presentation2"
                component={Presentation2Screen}
              />
              <Stack.Screen
                name="Presentation3"
                component={Presentation3Screen}
              />
              <Stack.Screen
                name="Presentation4"
                component={Presentation4Screen}
              />
              <Stack.Screen name="Signin" component={SigninScreen} />
              <Stack.Screen name="Schedule" component={ScheduleScreen} />
              <Stack.Screen name="Map" component={MapScreen} />
              <Stack.Screen name="Listing" component={ListingScreen} />
              <Stack.Screen
                name="Plantsitter1"
                component={Plantsitter1Screen}
              />
              <Stack.Screen
                name="Plantsitter2"
                component={Plantsitter2Screen}
              />
              <Stack.Screen
                name="Plantsitter3"
                component={Plantsitter3Screen}
              />
              <Stack.Screen name="Signup" component={SignupScreen} />
              <Stack.Screen name="Summary" component={SummaryScreen} />
              <Stack.Screen
                name="Congratulation"
                component={CongratulationScreen}
              />
              <Stack.Screen name="Assessment" component={AssessmentScreen} />
              <Stack.Screen name="TabNavigator" component={TabNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
}
