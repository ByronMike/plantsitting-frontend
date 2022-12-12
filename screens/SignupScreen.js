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
} from "react-native";
import { Input } from "native-base";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../reducers/user";

export default function SignupScreen({ navigation }) {
  // const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleSubmit = () => {
    fetch("http://10.2.1.198:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, zipCode, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        data.result;
        // && dispatch(login({ token: data.token, username, firstName } ));
      });
    const emailReg = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i
    );
    const valid = emailReg.test(email);
    if (!valid) {
      console.log("email pas ok");
      return false;
    } else {
      console.log("mail ok");
      navigation.navigate("TabNavigator", { screen: "Gallery" });
    }
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Image
            style={styles.image}
            source={require("../assets/logo-basic.png")}
          />

          <View style={styles.container2}>
            <View style={{ ...styles.bloctexte, width: width * 0.85 }}>
              <Text style={styles.textdemande}>S'inscrire</Text>
            </View>
            <View style={styles.blocinput}>
              <Input
                size="xl"
                variant="underlined"
                placeholder="Prenom"
                style={styles.input}
                name="firstName"
                type="firsName"
                value={firstName}
                onChangeText={(value) => setFirstName(value)}
              />

              <Input
                size="xl"
                variant="underlined"
                placeholder="Nom"
                style={styles.input}
                name="lastName"
                type="lastName"
                value={lastName}
                onChangeText={(value) => setLastName(value)}
              />

              <Input
                size="xl"
                variant="underlined"
                placeholder="Email"
                style={styles.input}
                name="email"
                type="email"
                value={email}
                onChangeText={(value) => setEmail(value)}
              />

              <Input
                size="xl"
                variant="underlined"
                placeholder="Téléphone"
                style={styles.input}
                name="telephone"
                type="telephone"
                value={telephone}
                onChangeText={(value) => setTelephone(value)}
              />

              <Input
                size="xl"
                variant="underlined"
                placeholder="Postal"
                style={styles.input}
                name="zipCode"
                type="zipCode"
                value={zipCode}
                onChangeText={(value) => setZipCode(value)}
              />

              <Input
                size="xl"
                variant="underlined"
                placeholder="Mot de passe"
                style={styles.input}
                name="password"
                type="password"
                value={password}
                onChangeText={(value) => setPassword(value)}
              />
            </View>

            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={styles.button}
              activeOpacity={0.8}
            >
              <Text>Inscription</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Button
        title="Go to Landing Screen"
        onPress={() => navigation.navigate("Landing")}
      />
    </View>
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
  blocinput: {},
  input: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  textInput: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "350",
    fontSize: "20px",
    lineHeight: "30px",
    letterSpacing: "-0.03em",
    color: "#283618",
  },
});
