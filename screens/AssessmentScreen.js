import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Input, Box, Checkbox } from "native-base";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { login } from "../reducers/userconnexion";

export default function AssementScreen({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userconnexion.value.firstName);
  const { height, width } = useWindowDimensions();
  const [comment, setComment] = useState("");
  const [personalNote, setPersonalNote] = useState(0);

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
        onPress={() => setPersonalNote(i + 1)}
        style={style}
        className="note"
        size={35}
      />
    );
  }

  // Function fetch pour se connecter
  // const handleSubmit = () => {
  //   fetch('http://localhost:3000/tweets', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ token: user.token, content: newTweet }),
  //   }).then(response => response.json())
  //     .then(data => {
  //       if (data.result) {
  //         const createdTweet = { ...data.tweet, author: user };
  //         dispatch(addTweet(createdTweet));
  //         setNewTweet('');
  //       }
  //     });
  // };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/logo-basic.png")}
      />
      <View style={styles.text}>
        <Text style={styles.texttitre}>Mission terminée !</Text>
        <Text>Laissez une note et un avis à {user}</Text>
        <View style={{ marginTop: 20, flexDirection: "row" }}>
          {personalPlants}
        </View>
      </View>
      <View style={styles.blocinput}>
        <Input
          colorScheme="#606C38"
          size="2x1"
          variant="outline"
          placeholder="Ajouter votre commentaire...."
          style={styles.input}
          name="comment"
          type="comment"
          value={comment}
          textAlign="center"
          onChangeText={(value) => setComment(value)}
        />
      </View>
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
            <Text style={styles.boxelemnt}>1€ de Pourboire 💚</Text>
          </Checkbox>
          <Checkbox value="Don assosciation" colorScheme="green">
            <Text>1€ pour Don association🪴</Text>
          </Checkbox>
        </View>
      </Box>

      <View style={styles.containerbouton}>
        <TouchableOpacity
          style={styles.registerbtn}
          // onPress={() => handleSubmit()}
        >
          <Text style={styles.titreregister}>VALIDER</Text>
        </TouchableOpacity>
        <Text style={styles.merci}>Merci {user}😉</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f5f1",
  },
  image: {
    width: 350,
    height: 150,
    alignItems: "center",
    marginBottom: 45,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  blocinput: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 5,
    padding: 25,
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 25,
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
  box: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
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
    marginTop: 35,
  },
  boxelemnt: {
    marginBottom: 15,
  },
  texttitre: {
    marginBottom: 15,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 18,
  },
  merci: {
    marginTop: 15,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 12,
  },
});
