import { Column } from "native-base";
import { useEffect } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";

export default function FirstScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Presentation1");
    }, 1500);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/logo-white-plantssiting.png")}
          resizeMode="center"
        />
      </View>
      <View>
        <Text style={styles.text}>Marseille | Paris | London</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#283618",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "70%",
    height: "50%",
  },
  text: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize: 12,
    color: "#FEFAE0",
    marginTop: -115,
  },
});
