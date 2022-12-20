import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { REACT_APP_BACKEND_URL } from "@env";
import { Avatar } from "native-base";

function CardReviews(props) {
  const [dataReviews, setDataReviews] = useState([]);

  useEffect(() => {
    fetch(
      `http://${REACT_APP_BACKEND_URL}/sitters/reviewsBySitter/${props.token}`
    )
      .then((response) => response.json())
      .then((reviews) => {
        setDataReviews([reviews.reviews]);
      });
    // console.log("choix", userchoose);
    console.log("dataReviews : ", dataReviews);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Avatar
          alignSelf="center"
          bg="amber.500"
          size="lg"
          source={{
            uri: props.userphoto,
          }}
        ></Avatar>
        <View style={styles.infosContainer}>
          <Text>{props.author}</Text>
        </View>
        <View style={styles.rating}></View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.titleComment}></View>
        <View style={styles.textComment}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CardReviews;
