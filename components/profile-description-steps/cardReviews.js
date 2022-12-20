import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { REACT_APP_BACKEND_URL } from "@env";
import { Avatar } from "native-base";

function CardReviews(props) {
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
          <Text></Text>
        </View>
        <View style={styles.rating}>

          <Text>{props.firstName}</Text>
        </View>
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
