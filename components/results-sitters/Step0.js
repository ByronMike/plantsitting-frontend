import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";
import { userRequest, cleanRequest } from "../../reducers/request";
import MapView, { Marker } from "react-native-maps";
import { getToken } from "../../reducers/sitter";
import { useNavigation } from "@react-navigation/native";

import * as Location from "expo-location";
import { REACT_APP_BACKEND_URL } from "@env";

function Step0(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const request = useSelector((state) => state.request.value);
  const userchoose = useSelector((state) => state.request.value);

  console.log("token props : ", props.token);

  const testId = (token) => {
    console.log("token props : ", token);
    dispatch(getToken(token));
  };

  const [currentPosition, setCurrentPosition] = useState();
  const [stateReducer, setStateReducer] = useState(request);
  const [matchingSitters, setMatchingSitters] = useState([]);
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === "granted") {
        Location.watchPositionAsync({ distanceInterval: 30 }, (location) => {
          console.log("position :", location.coords);
          // console.log("currentposition", currentPosition.longitude);
          setCurrentPosition(location.coords);
          setStateReducer({
            ...stateReducer,
            // latitude: location.coords.latitude,
            // longitude: location.coords.longitude,
          });
          dispatch(userRequest(stateReducer));
          // console.log("request stateReducer", stateReducer);
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
    // console.log("user places longitude", data.useraddress[0].latitude);
    console.log("user places longitude", data.useraddress[0].latitude);
    console.log("data photo", data.userphoto);

    return (
      <Marker
        key={i}
        coordinate={{
          latitude: data.useraddress[0].latitude,
          longitude: data.useraddress[0].longitude,
        }}
        onPress={() => {
          testId(data.token);
          navigation.navigate("Plantsitter1");
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 30 / 2,
            backgroundColor: "#DDA15E",
            padding: 3,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 11,
              padding: 1,
              marginBottom: 2,
            }}
          >
            {data.tarifs[0].tarif1} €
          </Text>
          <ImageBackground
            source={{ uri: data.userphoto }}
            style={{ width: 40, height: 40 }}
            imageStyle={{ borderRadius: 30 / 2 }}
          ></ImageBackground>
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
        {currentPosition && (
          <Marker
            coordinate={{
              latitude: currentPosition.latitude,
              longitude: currentPosition.longitude,
            }}
          />
        )}
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

export default Step0;
