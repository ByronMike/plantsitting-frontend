import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { logout } from "../reducers/userconnexion";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userconnexion.value);

  // fonction pour se déconnecter

  const handleLogout = () => {
    console.log("click");
    dispatch(logout());
    console.log(user.token);
  };

  // affichage logout ou connectez-vous

  let userSection;
  if (user.token) {
    userSection = (
      <View style={styles.blocregister}>
        <TouchableOpacity onPress={() => handleLogout()}>
          <Text style={styles.register}>Se déconnecter </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    userSection = (
      <View style={styles.blocregister}>
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <Text style={styles.register}>
            Vous avez déjà un compte ? Connectez-vous
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/logo-basic.png")}
      />
      <View style={styles.bloctext}>
        <Text style={styles.textbienvenue}>Hello {user.firstName} 👋 </Text>
        <Text style={styles.textdemande}>Que cherchez-vous aujourd'hui ? </Text>
      </View>
      <View style={styles.blocchoix}>
        <TouchableOpacity style={styles.recherche}>
          <View style={styles.top}>
            <Text style={styles.titrerecherche}>
              Je <Text style={styles.boutoncherche}>CHERCHE</Text> {"\n"}un
              plant-sitter
            </Text>
            <FontAwesome name="arrow-right" size={20} color="#DDA15E" />
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
        {userSection}
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
    lineHeight: 26,
    color: "#283618",
  },
  textdemande: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 32,
    lineHeight: 41,
    letterSpacing: -0.03,
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
  shadowProp: {
    shadowOffset: { width: 3, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  top: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#F6F5F1",
    flexDirection: "row",
  },
  titrerecherche: {
    fontFamily: "Montserrat SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 21,
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
    alignItems: "flex-start",
    justifyContent: "center",
  },
  texteinfo: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 15,
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
    color: "#20232a",
    textDecorationLine: "underline",
  },
});
