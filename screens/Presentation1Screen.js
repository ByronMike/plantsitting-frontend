import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { IconButton } from "native-base";

export default function Presentation1Screen({ navigation }) {
  return (
    <View style={styles.container}>
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
        <TouchableOpacity backgroundColor={"#ffffff"}>
          <FontAwesome name="chevron-right" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F5F1",
  },
  image: {
    width: "100%",
    height: "30%",
    marginBottom: 20,
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
    color: "#283618",
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
    color: "#524B6B",
    marginTop: 15,
  },
});
