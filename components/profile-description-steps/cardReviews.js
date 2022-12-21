import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Avatar } from "native-base";

const screenWidth = Dimensions.get("window").width;
const fullViewWidth = wp("100%", screenWidth);
const viewWidth = wp("90%", screenWidth);
const { titleCase } = require("../../modules/titleCase");

function CardReviews(props) {
  const personalPlants = [];
  for (let i = 0; i < 5; i++) {
    let style = { cursor: "pointer" };
    if (i < props.reviewNote) {
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

  let hourIcon = (
    <FontAwesome
      name="trash-o"
      size={10}
      color="#AAA6B9"
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.leftContainer}>
          <Avatar
            alignSelf="center"
            bg="amber.500"
            size="12"
            source={{
              uri: props.userphoto,
            }}
          ></Avatar>
          <View style={styles.infosContainer}>
            {/* Lorsque la BDD sera propre il faudra utilisé le module titleCase pour harmoniser les noms */}
            <Text style={styles.textFirstName}>{props.firstName}</Text>
            <View style={styles.timePublication}>
              <Text style={styles.timeText}>{hourIcon}  il y a (x) minutes </Text>
            </View>
          </View>
        </View>
        <Text style={styles.rating}>{personalPlants}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.titleComment}></Text>
        <Text style={styles.textComment}>{props.reviewText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: viewWidth,
  },
  leftContainer: {
    flexDirection: "row",
  },
  infosContainer: {
    marginLeft: 10,
  },
  textFirstName: {},
  timePublication: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    height: 20,
  },
  timeText: {
    fontSize: 10,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 26,
    color: "#AAA6B9",
  },
  rating: {},
  bottomContainer: {
    width: viewWidth,
  },
  titleComment: {},
  textContent: {},
  textComment: {
    height: 100,
    textAlign: "justify",
    marginLeft: 25,
  },
  textFirstName: {
    fontSize: 13,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 26,
    color: "#283618",
  },
});

export default CardReviews;
