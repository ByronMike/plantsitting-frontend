import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { REACT_APP_BACKEND_URL } from "@env";
import { Input } from "native-base";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/usersitterconnexion";
//TEST blabla

export default function Signup2sitterScreen({ navigation }) {
  const [plant1, setPlant1] = useState("");
  const [plant2, setPlant2] = useState("");
  const [plant3, setPlant3] = useState("");

  const handleSubmit = () => {
    fetch(`http://${REACT_APP_BACKEND_URL}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        zipCode,
        password,
        phoneNumber: telephone,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("🚙data signup", data);

        navigation.navigate("TabNavigator", { screen: "Signup3SitterScreen" });
      });

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "position"}
        style={styles.container}
      >
        <View style={styles.container}>
          <SafeAreaView>
            <Image
              style={styles.image}
              source={require("../assets/logo-basic.png")}
            />
            <View style={styles.container2}>
              <View>
                <Text style={styles.textdemande}>
                  Mes tarifs pour 1 visite:
                </Text>
              </View>
              <Text style={styles.textdemande}>Pour 1 à 5 plantes:</Text>
              <Input
                size="xl"
                variant="outline"
                placeholder="20€ (prix moyen conseillé)"
                style={styles.input}
                name="firstName"
                type="firsName"
                value={plant1}
                onChangeText={(value) => setPlant1(value)}
              />
              <Text style={styles.textdemande}>Pour 5 à 15 plantes:</Text>
              <Input
                size="xl"
                variant="outline"
                placeholder="30€ (prix moyen conseillé)"
                style={styles.input}
                name="firstName"
                type="firsName"
                value={plant2}
                onChangeText={(value) => setPlant2(value)}
              />
              <Text style={styles.textdemande}>Pour 15 et + plantes:</Text>
              <Input
                size="xl"
                variant="outline"
                placeholder="50€ (prix moyen conseillé)"
                style={styles.input}
                name="firstName"
                type="firsName"
                value={plant3}
                onChangeText={(value) => setPlant3(value)}
              />
              <View style={styles.blocregister}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("signup4Sitter")}
                ></TouchableOpacity>
              </View>

              <View style={styles.containerbouton}>
                <TouchableOpacity
                  style={styles.registerbtn}
                  onPress={() => handleSubmit()}
                >
                  <Text style={styles.titreregister}>SUIVANT</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </KeyboardAvoidingView>
    );
  };
}

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 250,
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f5f1",
  },

  container2: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  bloctexte: {
    flexDirection: "row",
  },
  box: {
    marginBottom: 30,
  },
  blocinput: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    marginTop: 6,
  },

  registerbtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDA15E",
    marginTop: 25,
    height: 65,
    padding: 20,
    width: 250,
    borderRadius: 15,
  },
  textdemande: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 32,
    lineHeight: 41,
    letterSpacing: -0.03,
    color: "#283618",
    marginBottom: 15,
  },
  titreregister: {
    color: "white",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 30,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  containerbouton: {
    justifyContent: "space-between",
    alignItems: "center",
    width: 350,
    marginTop: 45,
  },

  blocregister: {
    alignItems: "center",
    justifyContent: "center",
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
