import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ButtonNext from "../components/buttons/ButtonNext";
import ButtonSkip from "../components/buttons/ButtonSkip";

export default function Presentation1Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonskip}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TabNavigator") }
        >
          <ButtonSkip />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.image}
        source={require("../assets/illuplantsitting-2.png")}
      />
      <View style={styles.bloctext}>
        <Text style={styles.textprincipal}>
          Trouver le <Text style={styles.textspan}>meilleur jardinier</Text>{" "}
          près de chez vous en{" "}
          <Text style={styles.textspan}>moins de 5 minutes</Text>.
        </Text>
        <Text style={styles.textsecondaire}>
          Arrondissez vos fins de mois en arrosant les plantes de vos voisins.
        </Text>
      </View>
      <View style={styles.buttonnext}>
        <TouchableOpacity
          style={styles.touchableopacity}
          onPress={() => navigation.navigate("Presentation2")}
        >
          <ButtonNext />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F6F5F1",
    paddingTop: 40,
    paddingBottom: 25,
  },
  buttonskip: {
    width: "100%",
    height: "10%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginRight: 45,
  },
  image: {
    width: "100%",
    height: "30%",
  },

  bloctext: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal: 20,
  },
  textprincipal: {
    fontSize: 45,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 50,
    color: "#000000",
  },
  textspan: {
    fontSize: 45,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 50,
    color: "#606C38",
  },
  textsecondaire: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.03,
    color: "#535763",
    marginTop: 15,
  },
  touchableopacity: {
    backgroundColor: "#DDA15E",
    borderRadius: 22,
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonnext: {
    justifyContent: "center",
    alignItems: "center",
  },
});
