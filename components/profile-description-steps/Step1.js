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
import LottieView from "lottie-react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowLeftLong,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons/";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useEffect, useState } from "react";
import CardReviews from "./CardReviews";
import ProgressBar from "react-native-animated-progress";
import { useDispatch, useSelector } from "react-redux";

const screenWidth = Dimensions.get("window").width;
const viewWidth = wp("90%", screenWidth);
const { titleCase } = require("../../modules/titleCase");

function Step1(props) {
  const [animationProgress, setAnimationProgress] = useState(
    new Animated.Value(0)
  );
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);

  function handlePressAnimation() {
    animationProgress.setValue(0);

    setIsAnimationVisible(true);

    Animated.timing(animationProgress, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start(() => {
      setIsAnimationVisible(false);
    });
  }
  const user = useSelector((state) => state.userconnexion.value);

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
      {isAnimationVisible && (
        <LottieView
          style={styles.lottie}
          source={require("../../assets/fallingLeaves.json")}
          progress={animationProgress}
          resizeMode="cover"
        />
      )}
      <View style={styles.topContainer}>
        <View style={styles.barNavigation}>
          <TouchableOpacity onPress={() => props.navigationPrevious()}>
            <FontAwesomeIcon icon={faArrowLeftLong} size={25} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigationHome()}>
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              size={20}
              color="#000000"
            />
          </TouchableOpacity>
        </View>
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
          <View style={styles.booking}>
            <TouchableOpacity
              style={styles.checkingBouton}
              onPress={() => {
                handlePressAnimation();
                user.token
                  ? props.navigationSignup()
                  : props.navigationSummary();
              }}
            >
              <Text
                style={[{ fontWeight: "700", fontSize: 12, color: "white" }]}
              >
                RÉSERVER LE PLANT-SITTER
              </Text>
            </TouchableOpacity>
          </View>
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
                    Arrosage : {props.skills.arrosage}%
                  </Text>
                  <ProgressBar
                    progress={props.skills.arrosage}
                    height={7}
                    backgroundColor="#358600"
                    animated={true}
                  />
                  <Text style={styles.text}>
                    Entretiens de jardin : {props.skills.entretien}%
                  </Text>
                  <ProgressBar
                    progress={props.skills.entretien}
                    height={7}
                    backgroundColor="#63C132"
                    animated={true}
                  />
                  <Text style={styles.text}>
                    Traitement de maladie : {props.skills.traitement}%
                  </Text>
                  <ProgressBar
                    progress={props.skills.traitement}
                    height={7}
                    backgroundColor="#9EE37D"
                    animated={true}
                  />
                  <Text style={styles.text}>
                    Autres demandes : {props.skills.autres}%
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
  barNavigation: {
    zIndex: 2,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    width: viewWidth,
  },
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
    flex: 30,
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
  booking: {
    width: viewWidth,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  checkingBouton: {
    padding: 1,
    backgroundColor: "green",
    borderRadius: 5,
    width: 190,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flex: 45,
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
    paddingTop: 30,
  },
  text: {
    textAlign: "center",
  },
});

export default Step1;
