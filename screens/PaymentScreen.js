import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "native-base";

export default function SummaryScreen({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userconnexion.value);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/logo-basic.png")}
      />
      <View style={styles.bloctext}>
        <Text style={styles.textmerci}>
          {user.firstName} vous voulez payer en ? 💳{" "}
        </Text>

        <View style={styles.blocinput}>
          <Text style={styles.textrecap1}>Nom sur la carte:</Text>
          <Input
            size="xl"
            variant="outline"
            placeholder="Nom"
            style={styles.input}
          />
          <Text style={styles.textrecap1}>N° de carte:</Text>
          <Input
            size="xl"
            variant="outline"
            placeholder="................  ▅"
            style={styles.input}
            name="email"
            type="email"
          />
          <Text style={styles.textrecap1}>Date d'expiration:</Text>
          <Input
            size="m"
            variant="outline"
            placeholder="MM/AA"
            style={styles.input}
            name="password"
            type="password"
          />
        </View>
      </View>

      <View style={styles.containerbouton}>
        <Text style={styles.textpayer}>
          Payer et entrer en contact avec le plant-sitter
        </Text>
        <TouchableOpacity style={styles.registerbtn}>
          <Text
            style={styles.titreregister}
            onPress={() => navigation.navigate("Landing")}
          >
            SUIVANT
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
    padding: 50,
  },
  image: {
    width: "90%",
    height: "20%",
  },
  bloctext: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textmerci: {
    fontSize: 28,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 26,
    color: "#283618",
    marginBottom: 25,
  },
  textrecap1: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 23,
    lineHeight: 41,
    letterSpacing: "-0.03",
    color: "#616c38",
    marginBottom: 25,
  },
  textrecap2: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 28,
    lineHeight: 41,
    letterSpacing: "-0.03",
    color: "#283618",
    marginBottom: 25,
  },
  textpayer: {
    fontSize: 15,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 26,
    color: "#616c38",
    marginTop: 35,
  },
  containerbouton: {
    justifyContent: "space-between",
    alignItems: "center",
    width: 350,
  },
  titreregister: {
    color: "white",
    // fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 30,
    // textTransform: "uppercase",
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
});