import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Modal } from "native-base";
import { useState } from "react";
import { NativeBaseProvider } from "native-base";

export default function HomeScreen({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [signinUsername, setSigninUsername] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/logo-basic.png")}
      />
      <View style={styles.bloctext}>
        <Text style={styles.textbienvenue}>Hello 👋 </Text>
        <Text style={styles.textdemande}>Que cherchez-vous aujourd’hui ? </Text>
      </View>
      <View style={styles.blocchoix}>
        <TouchableOpacity style={styles.recherche}>
          <View style={styles.top}>
            <Text style={styles.titrerecherche}>
              Je <Text style={styles.boutoncherche}>CHERCHE</Text> {"\n"}un
              plant-sitter
            </Text>
            <FontAwesome
              icon="thin"
              name="arrow-right"
              size={20}
              color="#DDA15E"
            />
          </View>
          <View style={styles.bottom}>
            <Text style={styles.texteinfo}>
              Je souhaite être mis en relation avec une personne pour garder mes
              plantes, ou entretenir mon jardin.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recherche}>
          <View style={styles.top}>
            <Text style={styles.titrerecherche}>
              Je <Text style={styles.boutoncherche}>SUIS</Text> {"\n"}un
              plant-sitter
            </Text>
            <FontAwesome
              icon="thin"
              name="arrow-right"
              size={20}
              color="#DDA15E"
            />
          </View>
          <View style={styles.bottom}>
            <Text style={styles.texteinfo}>
              Je suis disponible pour m’occuper des plantes, ou entretenir des
              jardins.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.blocregister}>
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <Text style={styles.register}>
            Vous avez déjà un compte ? Connectez-vous
          </Text>
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
    width: "70%",
    height: "20%",
  },

  bloctext: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textbienvenue: {
    fontSize: 18,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "26px",
    color: "#283618",
  },
  textdemande: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "32px",
    lineHeight: "41px",
    letterSpacing: "-0.03em",
    color: "#283618",
  },
  recherche: {
    borderColor: "#20232a",
    borderStyle: "solid",
    borderWidth: 1,
    width: 300,
    height: 150,
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
  },
  top: {
    flex: 1,
    alignItems: "start-flex",
    justifyContent: "center",
    backgroundColor: "#F6F5F1",
    flexDirection: "row",
  },
  titrerecherche: {
    fontFamily: "Montserrat SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 21,
    lineHeight: 26,
    color: "#283618",
    width: 250,
    height: 250,
  },
  boutoncherche: {
    fontFamily: "Montserrat SemiBold",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 25,
    color: "#DDA15E",
  },
  bottom: {
    flex: 1,
    alignItems: "start-flex",
    justifyContent: "center",
  },
  texteinfo: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 15,
    lineHeight: 17,
    color: "#20232a",
  },
  blocregister: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 45,
  },

  register: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 15,
    lineHeight: 17,
    color: "#20232a",
    textDecorationLine: "underline",
  },
});
