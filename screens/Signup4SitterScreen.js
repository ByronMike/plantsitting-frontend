import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { Input } from "native-base";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/usersitterconnexion";

export default function Signup4sitterScreen({ navigation }) {
  const [bio, setBio] = useState("");
  const [rib, setRib] = useState("");

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
                Mes information détaillées:
              </Text>
            </View>
            <Text style={styles.textdemande}>Ma biographie:</Text>
            <Input
              size="xl"
              variant="outline"
              placeholder="Décrivez vous en quelques lignes pour vous présenter à vos futurs clients."
              style={styles.input}
              name="bio"
              type="bio"
              value={bio}
              onChangeText={(value) => setBio(value)}
            />
            <Text style={styles.textdemande}>Mes équipements:</Text>
            <Box style={styles.box}>
              <View
                direction={{
                  base: "column",
                  md: "row",
                }}
                space={3}
                alignItems="flex-start"
              >
                <Checkbox
                  style={styles.boxelemnt}
                  value="Pourboir"
                  colorScheme="green"
                >
                  <Text style={styles.boxelemnt}>Amateur</Text>
                </Checkbox>
                <Checkbox
                  style={styles.boxelemnt}
                  value="Don assosciation"
                  colorScheme="green"
                >
                  <Text style={styles.boxelemnt}> Intermédiaire</Text>
                </Checkbox>
                <Checkbox
                  style={styles.boxelemnt}
                  value="Don assosciation"
                  colorScheme="green"
                >
                  <Text style={styles.boxelemnt}>professionnel</Text>
                </Checkbox>
              </View>
            </Box>
            <Text style={styles.textdemande}>Mon RIB:</Text>
            <Input
              size="l"
              variant="outline"
              placeholder="Merci de compléter votre rib pour recevoir le paiement de vos préstations."
              style={styles.input}
              name="rib"
              type="rib"
              value={rib}
              onChangeText={(value) => setRib(value)}
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
    marginBottom: 12,
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
  box: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  boxelemnt: {
    marginBottom: 15,
  },
});
