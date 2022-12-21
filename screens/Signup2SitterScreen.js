import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { Slider, Box } from "native-base";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export default function Signup2sitterScreen({ navigation }) {
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
              <Text style={styles.textdemande}>Mes compétences🌳:</Text>
            </View>
            <Text style={styles.textdemande}>Arrosage:</Text>
            <Box style={styles.box} alignItems="center" w="100%">
              <Slider
                defaultValue={70}
                size="sm"
                colorScheme="green"
                w="75%"
                maxW="300"
              >
                <Slider.Track bg="green.100">
                  <Slider.FilledTrack bg="green.600" />
                </Slider.Track>
                <Slider.Thumb borderWidth="0" bg="transparent">
                  <FontAwesomeIcon name="leaf" color="green.600" size="xl" />
                </Slider.Thumb>
              </Slider>
            </Box>
            <Text style={styles.textdemande}>Entretien de jardins:</Text>
            <Box style={styles.box} alignItems="center" w="100%">
              <Slider
                defaultValue={70}
                size="sm"
                colorScheme="green"
                w="75%"
                maxW="300"
              >
                <Slider.Track bg="green.100">
                  <Slider.FilledTrack bg="green.600" />
                </Slider.Track>
                <Slider.Thumb borderWidth="0" bg="transparent">
                  <FontAwesomeIcon name="leaf" color="green.600" size="xl" />
                </Slider.Thumb>
              </Slider>
            </Box>
            <Text style={styles.textdemande}>Traitement des maladies:</Text>
            <Box style={styles.box} alignItems="center" w="100%">
              <Slider
                defaultValue={70}
                size="sm"
                colorScheme="green"
                w="75%"
                maxW="300"
              >
                <Slider.Track bg="green.100">
                  <Slider.FilledTrack bg="green.600" />
                </Slider.Track>
                <Slider.Thumb borderWidth="0" bg="transparent">
                  <FontAwesomeIcon name="leaf" color="green.600" size="xl" />
                </Slider.Thumb>
              </Slider>
            </Box>
            <View style={styles.blocregister}>
              <TouchableOpacity
                onPress={() => navigation.navigate("signup3Sitter")}
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
    flex: 1,
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
    fontWeight: "bold",
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
