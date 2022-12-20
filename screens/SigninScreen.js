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

export default function SigninScreen({ navigation }) {
  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mailIsOk, setMailIsOk] = useState(true);

  // Function fetch pour se connecter

  const handleSubmit = () => {
    fetch("http:///10.2.1.198:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data signing", data);
        data.result &&
          dispatch(login({ token: data.token, firstName: firstName }));
      });
    // Function pour checker si le mail est un format mail

    const emailReg = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i
    );

    const valid = emailReg.test(email);
    if (!valid) {
      console.log("email pas ok");
      setMailIsOk(false);
      return false;
    } else {
      console.log("mail ok");
      navigation.navigate("TabNavigator", { screen: "SummaryScreen" });
    }
  };

  let alerteMail = <Text></Text>;
  if (mailIsOk === false) {
    alerteMail = <Text style={styles.textAlerte}>Adresse email invalide</Text>;
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
                <Text style={styles.textdemande}>Se connecter 👋</Text>
              </View>
              <View style={styles.blocregister}>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                  <Text style={styles.register}>
                    Vous n'avez pas de compte ? Inscrivez-vous
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
                  <Text style={styles.titreregister}>Se connecter</Text>
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
    marginTop: 15,
  },
  input: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
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
  textInput: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "350",
    fontSize: 20,
    lineHeight: 30,
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
