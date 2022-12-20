import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";
import { REACT_APP_BACKEND_URL } from "@env";
import { Input } from "native-base";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/usersitterconnexion";
//TEST blabla

export default function Signup2sitterScreen({ navigation }) {
  // Function fetch pour s'inscrire

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

        data.result &&
          dispatch(login({ token: data.token, firstName: firstName }));
      });

    navigation.navigate("TabNavigator", { screen: "Signup3SitterScreen" });
  };

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
          />{" "}
          <View style={styles.container2}>
            <View>
              <Text style={styles.textdemande}>S'inscrire 😎</Text>
            </View>
            <View style={styles.blocregister}>
              <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                <Text style={styles.register}>
                  Vous avez déjà un compte ? Connectez-vous
                </Text>
              </TouchableOpacity>
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
}

const styles = StyleSheet.create({
  image: {
    width: "70%",
    height: "20%",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f5f1",
  },

  container2: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  bloctexte: {
    flexDirection: "row",
  },
  blocimg: {},
  blocinput: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    marginTop: 6,
  },

  registerbtn: {
    flex: 1,
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
