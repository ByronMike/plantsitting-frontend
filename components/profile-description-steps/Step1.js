import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Animated,
} from "react-native";
import { Avatar, Progress, VStack, Center, Box } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useEffect, useState } from "react";
import CardReviews from "./CardReviews";
import ProgressBar from "react-native-animated-progress";

const screenWidth = Dimensions.get("window").width;
const viewWidth = wp("90%", screenWidth);
const { titleCase } = require("../../modules/titleCase");

function Step1(props) {
  const dataReviews = props.reviews.map((data, i) => {
    // console.log("datouuuu", data);
    return (
      <CardReviews
        key={i}
        firstName={data.author.firstName}
        reviewNote={data.reviewNote}
        reviewText={data.reviewText}
      />
    );
  });

  const progress = new Animated.Value(0);

  const updateProgress = () => {
    Animated.timing(progress, {
      // tovalue : affichage en pourcentage
      toValue: 100,
      duration: 2000,
    }).start();
  };

  useEffect(() => {
    updateProgress();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.barNavigation}></View>
        <View style={styles.avatar}>
          <Avatar
            alignSelf="center"
            bg="amber.500"
            size="100"
            source={{
              uri: props.userphoto,
            }}
          ></Avatar>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>
              {titleCase(props.firstname)} {titleCase(props.lastname)}
            </Text>
          </View>
          <View style={styles.status}>
            <FontAwesome name="check-circle" size={15} color="#606C38" />
            <Text style={styles.userFunction}>{props.status}</Text>
          </View>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.topInformations}>
          <View style={styles.localisation}>
            <FontAwesome name="location-arrow" size={18} color="#606C38" />
            <Text style={styles.localisationText}>
              {props.useraddress} km près de chez vous{" "}
            </Text>
          </View>
          <View style={styles.price}>
            <Text style={styles.userPrice}>{props.userprice}€ / visite</Text>
          </View>
        </View>
        <View style={styles.bioContainer}>
          <Text style={styles.title}>Biographie</Text>
          <Text style={styles.userBio}>{props.userbio}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={styles.touchableOpacityUnselected}
            onPress={() => {
              props.reviewsStep();
            }}
          >
            <Text style={[{ fontWeight: "700", fontSize: 14, color: "black" }]}>
              Avis
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacitySelected}
            onPress={() => {
              props.skillsStep();
            }}
          >
            <Text style={[{ fontWeight: "700", fontSize: 14, color: "white" }]}>
              Compétences
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacityUnselected}
            onPress={() => {
              props.equipmentsStep();
            }}
          >
            <Text style={[{ fontWeight: "700", fontSize: 14, color: "black" }]}>
              Équipement
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.progressContainer}>
          <Center w="100%">
            <Box w="90%" maxW="400">
              <VStack space="md">
                <VStack mx="4" space="md">
                  <Text style={styles.text}>
                    Arrosage : {props.skills.arrosage}{" "}
                  </Text>
                  <ProgressBar
                    progress={props.skills.arrosage}
                    height={7}
                    backgroundColor="#358600"
                    animated={true}
                  />
                  <Text style={styles.text}>
                    Entretiens de jardin : {props.skills.entretien}{" "}
                  </Text>
                  <ProgressBar
                    progress={props.skills.entretien}
                    height={7}
                    backgroundColor="#63C132"
                    animated={true}
                  />
                  <Text style={styles.text}>
                    Traitement de maladie : {props.skills.traitement}{" "}
                  </Text>
                  <ProgressBar
                    progress={props.skills.traitement}
                    height={7}
                    backgroundColor="#9EE37D"
                    animated={true}
                  />
                  <Text style={styles.text}>
                    Autres demandes : {props.skills.autres}
                  </Text>
                  <ProgressBar
                    progress={props.skills.autres}
                    height={7}
                    backgroundColor="#AAEFDF"
                    animated={true}
                  />
                </VStack>
              </VStack>
            </Box>
          </Center>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  topContainer: {
    flex: 25,
    marginTop: 25,
    width: viewWidth,
  },
  barNavigation: {},
  avatar: {},
  textContainer: {},
  nameContainer: {
    paddingTop: 10,
  },
  name: {
    fontSize: 18,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 26,
    color: "#283618",
    textAlign: "center",
  },
  status: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  userFunction: { marginLeft: 10 },
  textContainer: {},
  middleContainer: {
    flex: 20,
    width: viewWidth,
  },
  topInformations: { flexDirection: "row", justifyContent: "space-between" },
  localisation: { flexDirection: "row" },
  localisationText: {
    fontSize: 12,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 26,
    color: "#283618",
  },
  price: {},
  userPrice: {
    fontSize: 14,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 26,
    color: "#283618",
  },
  bioContainer: {
    paddingTop: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 26,
    color: "#283618",
  },
  userBio: {
    fontSize: 14,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 26,
    color: "#283618",
    paddingTop: 10,
  },
  bottomContainer: {
    flex: 55,
    paddingTop: 80,
    width: viewWidth,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  touchableOpacitySelected: {
    backgroundColor: "#DDA15E",
    borderRadius: 5,
    width: 100,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  touchableOpacityUnselected: {
    borderRadius: 5,
    width: 100,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  progressContainer: {
    paddingTop: 60,
  },
  text: {
    textAlign: "center",
  },
});

export default Step1;
