import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { userRequest, cleanRequest } from "../../reducers/request";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { REACT_APP_BACKEND_URL } from "@env";

export default function MapScreen({ navigation }) {
  const dispatch = useDispatch();

  const request = useSelector((state) => state.request.value);
  const userchoose = useSelector((state) => state.request.value);

  const [currentPosition, setCurrentPosition] = useState();
  const [stateReducer, setStateReducer] = useState(request);
  const [matchingSitters, setMatchingSitters] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === "granted") {
        Location.watchPositionAsync({ distanceInterval: 30 }, (location) => {
          setCurrentPosition(location.coords);
          setStateReducer({
            ...stateReducer,
            lat: location.coords.latitude,
            lon: location.coords.longitude,
          });
          dispatch(userRequest(stateReducer));
          console.log("request stateReducer", stateReducer);
        });
      }
    })();
    fetch(`http://${REACT_APP_BACKEND_URL}/sitters/listsitters`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        arrosage: userchoose.arrosage,
        entretien: userchoose.entretien,
        traitement: userchoose.traitement,
        autre: userchoose.autre,
        plantQty1: userchoose.plantQty1,
        plantQty5: userchoose.plantQty5,
        plantQty15: userchoose.plantQty15,
        garde: userchoose.garde,
        depot: userchoose.depot,
        // // TODO A rajouter et faire matcher
        // // startday: userchoose.startday,
        // // endday: userchoose.endday,
      }),
    })
      .then((response) => response.json())
      .then((datamatchingSitters) => {
        setMatchingSitters(datamatchingSitters.sittersWithAverage);
      });
  }, []);

  const positionSitter = matchingSitters.map((data, i) => {
    console.log("user places longitude", data.useraddress[0].latitude);

    return (
      <Marker
        key={i}
        coordinate={{
          latitude: data.useraddress[0].latitude,
          longitude: data.useraddress[0].longitude,
        }}
      >
        <View
          style={{
            backgroundColor: "#DDA15E",
            alignItems: "center",
            justifyContent: "center",

            width: "120%",
            height: "150%",
            color: "white",
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: "#283618",
              padding: 3,
            }}
          >
            {data.firstname} à {data.tarifs[0].tarif1} €
          </Text>
        </View>
      </Marker>
    );
  });

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 43.296482,
          longitude: 5.36978,
          latitudeDelta: 0.3,
          longitudeDelta: 0.3,
        }}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <Marker coordinate={currentPosition} />
        {positionSitter}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },

  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F6F5F1",
    width: 500,
    height: "100%",
    paddingTop: 25,
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
