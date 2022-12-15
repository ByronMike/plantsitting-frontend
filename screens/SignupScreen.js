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
import { Input } from "native-base";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/userconnexion";
//TEST blabla

export default function SignupScreen({ navigation }) {
  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [telephone, setTelephone] = useState("");
  const [mailIsOk, setMailIsOk] = useState(true);
  const [telIsOk, setTelIsOk] = useState(true);
  const [tat, setTata] = useState("");

  // Function fetch pour s'inscrire

  const handleSubmit = () => {
    fetch("http://10.2.1.198:3000/users/signup", {
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
    // Function pour checker si le mail est un format mail

    const emailReg = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i
    );

    // Function pour checker si le telephone est un format tel francais

    const telReg = new RegExp(
      /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/i
    );
    const valid = emailReg.test(email);
    const validTel = telReg.test(telephone);
    if (!valid) {
      console.log("email pas ok");
      setMailIsOk(false);
      return false;
    } else {
      console.log("mail ok");
      if (!validTel) {
        console.log("tel pas ok");
        setTelIsOk(false);
        return false;
      } else {
        console.log("tel ok");
        navigation.navigate("TabNavigator", { screen: "SummaryScreen" });
      }
    }
  };

  let alerteMail = <Text></Text>;
  if (mailIsOk === false) {
    alerteMail = <Text style={styles.textAlerte}>Adresse email invalide</Text>;
  }

  let alerteTel = <Text></Text>;
  if (telIsOk === false) {
    alerteTel = <Text style={styles.textAlerte}>Téléphone invalide</Text>;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "position"}
      style={styles.container}
    >
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
                <Text style={styles.textdemande}>S'inscrire 😎</Text>
              </View>
              <View style={styles.blocregister}>
                <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                  <Text style={styles.register}>
                    Vous avez déjà un compte ? Connectez-vous
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.blocinput}>
                <Input
                  size="xl"
                  variant="underlined"
                  placeholder="Prénom"
                  style={styles.input}
                  name="firstName"
                  type="firsName"
                  value={firstName}
                  onChangeText={(value) => setFirstName(value)}
                />
                <Text></Text>
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
                <Text></Text>
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
                <Text>{alerteMail}</Text>
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

                <Text>{alerteTel}</Text>

                <Input
                  size="xl"
                  variant="underlined"
                  placeholder="Code postal"
                  style={styles.input}
                  name="zipCode"
                  type="zipCode"
                  value={zipCode}
                  onChangeText={(value) => setZipCode(value)}
                />
                <Text></Text>
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
              <Text></Text>
              <View style={styles.containerbouton}>
                <TouchableOpacity
                  style={styles.registerbtn}
                  onPress={() => handleSubmit()}
                >
                  <Text style={styles.titreregister}>S'inscrire</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
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
  input: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
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

  titreregister: {
    color: "white",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "15px",
    lineHeight: "30px",
    letterSpacing: "1em",
    textTransform: "uppercase",
  },
  containerbouton: {
    justifyContent: "space-between",
    alignItems: "center",
    width: 350,
  },
  textAlerte: {
    color: "red",
    alignItems: "left",
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
