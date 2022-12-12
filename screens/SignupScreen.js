import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../reducers/user";

export default function SignupScreen({ navigation }) {
  // const dispatch = useDispatch();

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
      body: JSON.stringify({ firstName, lastName, email, password }),
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
            width: "100%",
          }}
        >
          <Image
            style={styles.image}
            source={require("../assets/logo-basic.png")}
          />
          <Text>s'enregistrer ou S'inscrire</Text>
          <Text>Prenom:</Text>
          <TextInput
            style={styles.input}
            name="firstName"
            type="firsName"
            value={firstName}
            onChangeText={(value) => setFirstName(value)}
          />
          <Text>Nom:</Text>
          <TextInput
            style={styles.input}
            name="lastName"
            type="lastName"
            value={lastName}
            onChangeText={(value) => setLastName(value)}
          />
          <Text>Email:</Text>
          <TextInput
            style={styles.input}
            name="email"
            type="email"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <Text>Numéro de téléphone:</Text>
          <TextInput
            style={styles.input}
            name="telephone"
            type="telephone"
            value={telephone}
            onChangeText={(value) => setTelephone(value)}
          />
          <Text>Code postal:</Text>
          <TextInput
            style={styles.input}
            name="zipCode"
            type="zipCode"
            value={telephone}
            onChangeText={(value) => setZipCode(value)}
          />
          <Text>Mot de passe:</Text>
          <TextInput
            style={styles.input}
            name="password"
            type="password"
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={styles.button}
            activeOpacity={0.8}
          >
            <Text>Inscription</Text>
          </TouchableOpacity>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
});
