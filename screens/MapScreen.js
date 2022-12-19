import { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function MapScreen({ navigation }) {
  const request = useSelector((state) => state.request.value);
  const [req, setReq] = useState();
  const [currentPosition, setCurrentPosition] = useState();

  useEffect(() => {
    setReq(request)(async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === "granted") {
        Location.watchPositionAsync({ distanceInterval: 10 }, (location) => {
          setCurrentPosition(location.coords);
          console.log("current pos latitude", currentPosition.latitude);
        });
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textbienvenue}>
        Pour quelle adresse voulez-vous un PlantSitter{" "}
        <Text style={styles.username}>Mathis</Text> ? 👀
      </Text>
      <MapView
        initialRegion={{
          latitude: currentPosition.latitude,
          longitude: currentPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ flex: 1, width: "100%", height: "100%", marginTop: 35 }}
      >
        <Marker coordinate={currentPosition} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 75,
    backgroundColor: "#F6F5F1",
  },

  textbienvenue: {
    fontSize: 18,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 26,
    color: "#283618",
    paddingRight: 15,
    paddingLeft: 15,
  },
  username: {
    fontSize: 25,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 26,
    color: "#DDA15E",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    width: 150,
    borderBottomColor: "#ec6e5b",
    borderBottomWidth: 1,
    fontSize: 16,
  },
  button: {
    width: 150,
    alignItems: "center",
    marginTop: 20,
    paddingTop: 8,
    backgroundColor: "#ec6e5b",
    borderRadius: 10,
  },
  textButton: {
    color: "#ffffff",
    height: 24,
    fontWeight: "600",
    fontSize: 15,
  },
});
