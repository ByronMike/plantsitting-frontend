import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { REACT_APP_BACKEND_URL } from "@env";
import { useDispatch, useSelector } from "react-redux";
import { Select, Box, CheckIcon } from "native-base";
import { useState } from "react";
import { useEffect } from "react";
import { distance } from "../modules/checkDistance";

import Sitter from "../components/Sitter";

export default function ListingScreen({ navigation }) {
  const [service, setService] = useState("");
  const [matchingSitters, setMatchingSitters] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userconnexion.value);
  const userchoose = useSelector((state) => state.request.value);

  console.log("choix", userchoose);

  useEffect(() => {
    // console.log("test useEffect");
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
        // TODO A rajouter et faire matcher
        // startday: userchoose.startday,
        // endday: userchoose.endday,
      }),
    })
      .then((response) => response.json())
      .then((datamatchingSitters) => {
        setMatchingSitters(datamatchingSitters.matchingSitters);
      });
    // console.log("choix", userchoose);
    console.log("matchingSitters", matchingSitters);
  }, []);

  const plantsitters = matchingSitters.map((data, i) => {
    let latuser = 43.292328;
    let latsitter = data.useraddress[0].latitude;
    let lonuser = 5.366564;
    let lonsitter = data.useraddress[0].longitude;

    const localisation = distance(latuser, latsitter, lonuser, lonsitter);

    return (
      <Sitter
        key={i}
        token={data.token}
        firstname={data.firstname}
        lastname={data.lastname}
        status={data.status}
        review={data.reviews.length}
        userbio={data.userbio}
        useraddress={localisation}
        userphoto={data.userphoto}
        userprice={data.tarifs[0].tarif1}
      />
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.bloctext}>
        <Text style={styles.textbienvenue}>
          Hey <Text style={styles.username}>{user.firstName}</Text>,{"\n"}
          Découvrez les plant-sitters disponibles près de chez vous 👀
        </Text>
        <Box style={styles.boxfilter} maxW="400">
          <Select
            selectedValue={service}
            minWidth="300"
            accessibilityLabel="Choose Service"
            placeholder="Filtrer par"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Prix croissant" value="priceacd" />
            <Select.Item label="Prix décroissant" value="pricedc" />
            <Select.Item label="Localisation" value="localisation" />
            <Select.Item label="Professionnel" value="pro" />
            <Select.Item label="Amateur" value="amateur" />
          </Select>
        </Box>
      </View>
      <SafeAreaView style={styles.container2}>
        <ScrollView
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            marginHorizontal: 20,
          }}
        >
          {plantsitters}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 75,
    backgroundColor: "#F6F5F1",
  },
  container2: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    width: "100%",
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
  boxfilter: {
    marginTop: 24,
    paddingRight: 15,
    paddingLeft: 15,
  },
});
