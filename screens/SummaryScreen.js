import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { REACT_APP_BACKEND_URL } from "@env";

export default function SummaryScreen({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userconnexion.value);
  const userSitter = useSelector((state) => state.usersitterconnexion.value);
  const request = useSelector((state) => state.request.value);
  const sitterToken = useSelector((state) => state.sitter.value);
  const [dataSitter, setDataSitter] = useState([]);

  const [dataService, setDataService] = useState({});

  useEffect(() => {
    // fetch pour les informations du Sitter
    fetch(
      `http://${REACT_APP_BACKEND_URL}/sitters/sitterProfile/${sitterToken}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDataSitter(data.sitter);
      });
    // console.log("dataSitter test", dataSitter.tarifs[0].tarif1);

    // console.log("dataSitter : ", dataSitter.tarifs[0].tarif1);
    // console.log("dataSitter : ", dataSitter.sitter.reviews[0].author.firstName);
    console.log("user", user);
  }, []);

  // console.log("request ", request);
  // console.log("user", user);
  // console.log("sitter", sitterToken);
  console.log("date", request);

  useEffect(() => {
    setDataService({
      usertoken: user.token,
      sittertoken: sitterToken,
      equipment: dataSitter.equipment,
      skills: {
        arrosage: request.arrosage,
        entretien: request.entretien,
        traitement: request.traitement,
        autres: request.autre,
      },
      plant1: request.plantQty1,
      plant2: request.plantQty5,
      plant3: request.plantQty15,
      // tarif1: dataSitter.tarifs[0].tarif1,
      // tarif2: dataSitter.tarifs[0].tarif2,
      // tarif3: dataSitter.tarifs[0].tarif3,
      location: {
        cityName: "",
        zipCode: "",
        latitude: request.lat,
        longitude: request.lon,
      },
      photoStart: "",
      photoEnd: "",
      startday: request.startday,
      endday: request.endday,
      depot: request.depot,
      garde: request.garde,
    });
  }, []);

  // création en BDD du service :
  const handleSubmit = () => {
  //   fetch(`http://${REACT_APP_BACKEND_URL}/services/newservice`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(dataService),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDataService(data);
  //       console.log("🚙 data service DONE", data);
  //     });
  navigation.navigate("Payment");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/logo-basic.png")}
      />
      <View style={styles.bloctext}>
        <Text style={styles.textmerci}>Merci {user.firstName} 🌱 </Text>
        <Text style={styles.textrecap1}>
          voici le récapitulatif de votre demande:
        </Text>
        <Text style={styles.textrecap2}>
          {dataSitter.firstname} peut s'occuper de vos 5 plantes le 20 mars pour
          un montant de 8€.
        </Text>
      </View>

      <View style={styles.containerbouton}>
        <Text style={styles.textpayer}>
          Payer et entrer en contact avec le plant-sitter
        </Text>
        <TouchableOpacity style={styles.registerbtn} onPress={() => handleSubmit()}>
          <Text style={styles.titreregister} >
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
    letterSpacing: -0.03,
    color: "#616c38",
    marginBottom: 25,
  },
  textrecap2: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 28,
    lineHeight: 41,
    letterSpacing: -0.03,
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
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 30,
    textTransform: "uppercase",
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
});
