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
  import { Input, Box, Checkbox, Radio } from "native-base";
  import ButtonNext from "../buttons/ButtonNext";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  
  function Step1() {
    return (
      <View style={styles.container}>
        <View style={styles.topcontainer}>
          <View style={styles.toptextcontainer}>
            <Text style={styles.smalltext}>JE CHERCHE 👋</Text>
            <Text style={styles.bigtext}>
              J'ai besoin d'un plant-sitteur pour
            </Text>
          </View>
        </View>
        <View style={styles.bottomcontainer}>
          <View style={styles.bottomtextcontainer}>
            <Text style={styles.smalltext}>MES PLANTES 👋</Text>
            <Text style={styles.bigtext}>J'ai</Text>
          </View>
          <View style={styles.bottomradiocontainer}>
          </View>
        </View>
        <View style={styles.buttonnext}>
          <TouchableOpacity
            style={styles.touchableopacity}
            onPress={() => navigation.navigate("Presentation2")}
          >
            <ButtonNext />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      justifyContent: "space-around",
      backgroundColor: "#F6F5F1",
    },
    topcontainer: {
      flex: 50,
      alignItems: "flex-start",
      paddingTop: 75,
    },
    toptextcontainer: {},
    topcheckboxcontainer: { paddingTop: 5, paddingLeft: 25 },
    bottomcontainer: {
      flex: 35,
      paddingBottom: 10,
    },
    bottomtextcontainer: {},
    bottomradiocontainer: { paddingTop: 15, paddingLeft: 25 },
    box: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 25,
    },
    boxelement: {
      marginBottom: 15,
    },
    textbox: {
      marginBottom: 15,
    },
    smalltext: {
      fontSize: 18,
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: 26,
      color: "#283618",
    },
    bigtext: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: 32,
      lineHeight: 41,
      letterSpacing: -0.03,
      color: "#283618",
    },
    touchableopacity: {
      backgroundColor: "#DDA15E",
      borderRadius: 22,
      width: 44,
      height: 44,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonnext: {
      flex: 15,
      paddingTop: 25,
      paddingBottom: 50,
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: 70,
    },
  });
  
  export default Step1;
  