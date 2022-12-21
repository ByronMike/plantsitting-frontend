import { Button, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Step0 from "../components/results-sitters/Step0";
import Step1 from "../components/results-sitters/Step1";
import { Switch } from "native-base";

export default function MapScreen({ navigation }) {
  // Gestion des screens avec le même tab navigator et pour faciliter le stockage des données via useState

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const user = useSelector((state) => state.userconnexion.value);

  const toogleFunction = () => {
    console.log("click");
  };

  let affichage = <View></View>;

  return (
    <View style={styles.container}>
      <View style={styles.bloctext}>
        <Text style={styles.textbienvenue}>
          Hey <Text style={styles.username}>{user.firstName}</Text>,{"\n"}
          Découvrez les plant-sitters disponibles près de chez vous 👀
        </Text>
      </View>
      <View style={styles.bloctoggle}>
        <Text style={styles.txtchoix}> Affichage en LISTE </Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
        <Text style={styles.txtchoix}> Affichage en MAP </Text>
      </View>
      <View style={styles.container2}>
        {isEnabled ? (
          <Text>
            <Step0 />
          </Text>
        ) : (
          <Text>
            <Step1 />
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 75,
    backgroundColor: "#F6F5F1",
  },
  txtchoix: {
    margin: 15,
  },
  bloctoggle: {
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#F6F5F1",
    flexDirection: "row",
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
});
