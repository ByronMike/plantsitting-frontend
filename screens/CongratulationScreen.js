import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ButtonSkip from "../components/buttons/ButtonSkip";

export default function CongratulationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonskip}>
        <TouchableOpacity onPress={() => navigation.navigate("Assessment")}>
          <ButtonSkip />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.image}
        source={require("../assets/illuplantsitting-1.png")}
      />
      <View style={styles.bloctext}>
        <Text style={styles.textprincipal}>Félicitation !</Text>
        <Text style={styles.textsmiley}>🎉</Text>
        <Text style={styles.textsecondaire}>
          Merci, 1 arbre planté par l'association arbrepourtous.
        </Text>
        <Text style={styles.texttertiaire}>
          Vous allez être contacter dans les 72h pour la validation de votre
          demande, à défaut vous serez remboursé automatiquement.
        </Text>
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
    paddingBottom: 150,
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
    height: "40%",
  },
  bloctext: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal: 20,
  },
  textprincipal: {
    fontSize: 35,
    textAlign: "center",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 35,
    color: "#000000",
    marginBottom: 20,
    width: 350,
  },
  textsmiley: {
    fontSize: 35,
    textAlign: "center",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 35,
    color: "#000000",
    marginBottom: 20,
    width: 350,
  },
  textsecondaire: {
    fontFamily: "Montserrat",
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 18,
    letterSpacing: -0.03,
    color: "#535763",
    marginTop: 15,
    width: 350,
  },
  texttertiaire: {
    fontFamily: "Montserrat",
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 18,
    letterSpacing: -0.03,
    color: "#535763",
    marginTop: 15,
  },
});
