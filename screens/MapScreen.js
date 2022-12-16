import { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import { useDispatch, useSelector } from "react-redux";
// import { addPlace, importPlaces } from "../reducers/user";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function MapScreen({ navigation }) {
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.value);

  // const [currentPosition, setCurrentPosition] = useState(null);
  // const [tempCoordinates, setTempCoordinates] = useState(null);
  // const [modalVisible, setModalVisible] = useState(false);
  // const [newPlace, setNewPlace] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === "granted") {
        Location.watchPositionAsync({ distanceInterval: 10 }, (location) => {
          // console.log(location);
        });
      }
    })();
  }, []);
  // useEffect(() => {
  //   fetch(`http://10.2.1.198:3000/places/${user.nickname}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       data.result && dispatch(importPlaces(data.places));
  //       // importPlaces is a new order to create in reducers/user.js
  //     });
  // }, []);

  // const handleNewPlace = () => {
  //   fetch("http://10.2.1.198:3000/places", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       nickname: user.nickname,
  //       name: newPlace,
  //       latitude: tempCoordinates.latitude,
  //       longitude: tempCoordinates.longitude,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.result) {
  //         dispatch(
  //           addPlace({
  //             name: newPlace,
  //             latitude: tempCoordinates.latitude,
  //             longitude: tempCoordinates.longitude,
  //           })
  //         );
  //         setModalVisible(false);
  //         setNewPlace("");
  //       }
  //     });
  // };

  return (
    <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={{ flex: 1 }}
    >
      <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
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
