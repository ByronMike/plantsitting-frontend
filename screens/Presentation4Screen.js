import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ButtonNext from "../components/buttons/ButtonNext";
import ButtonSkip from "../components/buttons/ButtonSkip";

export default function Presentation4Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonskip}>
        <ButtonSkip />
      </View>
      <Image
        style={styles.image}
        source={require("../assets/illuplantsitting-6.png")}
      />
      <View style={styles.bloctext}>
        <Text style={styles.textprincipal}>
          Partez les yeux fermés grâce à notre assurance tout risque.
        </Text>
        <Text style={styles.textsecondaire}>
          Vos plantes assurés à 100% grâce à notre partenaire Tournesol.
        </Text>
      </View>
      <View style={styles.buttonnext}>
        <ButtonNext />
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
    fontSize: 22,
    textAlign: "center",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 30,
    color: "#000000",
  },
  textsecondaire: {
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
  buttonnext: {
    justifyContent: "center",
    alignItems: "center",
  },
});
