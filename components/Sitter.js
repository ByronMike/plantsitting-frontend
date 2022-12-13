import { Row } from "native-base";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { useState } from "react";

import { Avatar } from "native-base";

function Sitter() {
  const [personalNote, setPersonalNote] = useState(3);

  const personalPlants = [];
  for (let i = 0; i < 5; i++) {
    let style = { cursor: "pointer" };
    if (i < personalNote) {
      style = { color: "green", cursor: "pointer" };
    }
    personalPlants.push(
      <FontAwesomeIcon
        key={i}
        name="leaf"
        style={style}
        className="note"
        size={18}
      />
    );
  }
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <View style={styles.top}>
          <View style={styles.userinfo}>
            <Avatar
              alignSelf="center"
              bg="amber.500"
              size="lg"
              source={{
                uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              }}
            >
              AK
            </Avatar>
            <View style={styles.usertexte}>
              <Text style={styles.username}>William Dupont </Text>
              <View style={styles.userstatus}>
                <FontAwesome name="check-circle" size={12} color="#DDA15E" />
                <Text style={styles.userfonction}>
                  Plant-Sitter professionnel
                </Text>
              </View>
              <View style={styles.userreview}>
                {personalPlants}
                <Text style={styles.textreview}>133 avis </Text>
              </View>
            </View>
          </View>

          <View style={styles.userbutton}>
            <FontAwesome5 name="seedling" size={20} color="#DDA15E" />
          </View>
        </View>
        <View style={styles.mid}>
          <Text style={styles.userbio}>
            Text labels need to be distinct from other elements. If the text
            label isn’t capitalized.
          </Text>
          <View style={styles.userfilter}>
            <Text style={styles.userfil}>Arrosage</Text>
            <Text style={styles.userfil}>Entretiens </Text>
            <Text style={styles.userfil}>Autres demandes </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.userlocalisation}>
            <FontAwesome name="location-arrow" size={18} color="#DDA15E" />
            <Text style={styles.localisationtext}>
              2.5 km près de chez vous{" "}
            </Text>
          </View>
          <Text style={styles.userprice}>25€ / visite</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F5F1",
  },
  card: {
    width: 380,
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.84,

    elevation: 5,
  },
  top: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },

  mid: {
    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
  userinfo: {
    marginTop: 15,
    justifyContent: "start-flex",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
  },
  usertexte: {
    marginLeft: 15,
  },

  userstatus: {
    flexDirection: "row",
    alignItems: "center",
  },
  userfonction: {
    marginLeft: 8,
  },

  userlocalisation: {
    flexDirection: "row",
    alignItems: "center",
  },

  userfilter: {
    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
  },

  bottom: {
    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
  },
  username: {
    fontSize: 18,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 26,
    color: "#283618",
  },

  userfil: {
    fontSize: 12,
    backgroundColor: "#EEEDF3",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    color: "#283618",
    padding: 10,
    borderColor: "#CBC9D4",
    borderStyle: "solid",
    borderRadius: 20,
  },
  userprice: {
    fontSize: 18,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 26,
    color: "#283618",
  },
  textreview: {
    fontSize: 12,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "300",
    color: "#283618",
    marginLeft: 8,
  },
  localisationtext: {
    marginLeft: 8,
  },
  userreview: {
    flexDirection: "row",
    marginTop: 4,
    justifyContent: "start-flex",
    alignItems: "center",
  },
});

export default Sitter;
