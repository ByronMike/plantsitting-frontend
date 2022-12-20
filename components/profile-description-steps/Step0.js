import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Avatar, Row } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useEffect } from "react";
import CardReviews from "./CardReviews";

const screenWidth = Dimensions.get("window").width;
const viewWidth = wp("90%", screenWidth);

function Step0(props) {
  useEffect(() => {}, []);

  function titleCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }

  useEffect(() => {
    // console.log("datareviews", props.reviews);
  }, []);

  const dataReviews = props.reviews.map((data, i) => {
    console.log("data", data.author);
    return (
      <CardReviews
        key={i}
        firstName={data.author.firstName}
        // reviewName={review[0].firstName}
        reviewNote={data.author.reviewNote}
        reviewText={data.author.reviewText}
      />
    );
  });

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
            style={styles.touchableOpacitySelected}
            onPress={() => {
              handleValidateClick();
              navigation.navigate("");
            }}
          >
            <Text style={[{ fontWeight: "700", fontSize: 14, color: "white" }]}>
              Avis
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacityUnselected}
            onPress={() => {
              handleValidateClick();
              navigation.navigate("");
            }}
          >
            <Text style={[{ fontWeight: "700", fontSize: 14, color: "black" }]}>
              Compétences
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacityUnselected}
            onPress={() => {
              handleValidateClick();
              navigation.navigate("");
            }}
          >
            <Text style={[{ fontWeight: "700", fontSize: 14, color: "black" }]}>
              Équipement
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.reviewsContainer}>
          <View style={styles.reviewNumber}></View>
          <View style={styles.cards}>
            <SafeAreaView style={styles.container2}>
              <ScrollView
                showsVerticalScrollIndicator={true}
                contentContainerStyle={{
                  flexGrow: 1,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginHorizontal: 20,
                }}
              >
                {dataReviews}
              </ScrollView>
            </SafeAreaView>
          </View>
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
    justifyContent: "space-around",
    width: viewWidth,
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
  reviewsContainer: {},
  reviewNumber: {},
  reviews: {
    alignItems: "center",
    justifyContent: "center",
  },
  cards: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Step0;
