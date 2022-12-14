import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {Box, Checkbox, Radio} from "native-base";
import { useNavigation } from "@react-navigation/native";
import ButtonPrevious from "../buttons/ButtonPrevious";
import ButtonNext from "../buttons/ButtonNext";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Step0(props) {
  const navigation = useNavigation();

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [value, setValue] = useState("one");

  const handleClick = () => {
       props.nextStep();
     };

  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <View style={styles.toptextcontainer}>
          <Text style={styles.smalltext}>JE CHERCHE 👋</Text>
          <Text style={styles.bigtext}>
            J'ai besoin d'un plant-sitteur pour
          </Text>
        </View>
        <View style={styles.topcheckboxcontainer}>
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
                style={styles.boxelement}
                value={isChecked1}
                onPress={() => setIsChecked1(!isChecked1)}
                colorScheme="lightorange"
              >
                <Text
                  style={{
                    color: isChecked1 ? "#DDA15E" : "#000000",
                    fontWeight: isChecked1 ? "600" : "400",
                    marginBottom: 15,
                  }}
                >
                  Arrosage
                </Text>
              </Checkbox>
              <Checkbox
                style={styles.boxelement}
                value={isChecked2}
                onPress={() => setIsChecked2(!isChecked2)}
                colorScheme="lightorange"
              >
                <Text
                  style={{
                    color: isChecked2 ? "#DDA15E" : "#000000",
                    fontWeight: isChecked2 ? "600" : "400",
                    marginBottom: 15,
                  }}
                >
                  Entretiens de jardins
                </Text>
              </Checkbox>
              <Checkbox
                style={styles.boxelement}
                value={isChecked3}
                onPress={() => setIsChecked3(!isChecked3)}
                colorScheme="lightorange"
              >
                <Text
                  style={{
                    color: isChecked3 ? "#DDA15E" : "#000000",
                    fontWeight: isChecked3 ? "600" : "400",
                    marginBottom: 15,
                  }}
                >
                  Traitement des maladies
                </Text>
              </Checkbox>
              <Checkbox
                style={styles.boxelement}
                value={isChecked4}
                onPress={() => setIsChecked4(!isChecked4)}
                colorScheme="lightorange"
              >
                <Text
                  style={{
                    color: isChecked4 ? "#DDA15E" : "#000000",
                    fontWeight: isChecked4 ? "600" : "400",
                    marginBottom: 15,
                  }}
                >
                  Autres demandes
                </Text>
              </Checkbox>
            </View>
          </Box>
        </View>
      </View>
      <View style={styles.middlecontainer}>
        <View style={styles.middletextcontainer}>
          <Text style={styles.smalltext}>MES PLANTES 👋</Text>
          <Text style={styles.bigtext}>J'ai</Text>
        </View>
        <View style={styles.middleradiocontainer}>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={value}
            colorScheme="lightorange"
            onChange={(nextValue) => {
              setValue(nextValue);
            }}
          >
            <Radio value="one" my={3}>
              <Text
                style={{
                  color: value === "one" ? "#DDA15E" : "#000000",
                  fontWeight: value === "one" ? "600" : "400",
                  fontSize: 14,
                }}
              >
                1 à 5 plantes
              </Text>
            </Radio>
            <Radio value="two" my={3}>
              <Text
                style={{
                  color: value === "two" ? "#DDA15E" : "#000000",
                  fontWeight: value === "two" ? "600" : "400",
                  fontSize: 14,
                }}
              >
                5 à 15 plantes
              </Text>
            </Radio>
            <Radio value="three" my={3}>
              <Text
                style={{
                  color: value === "three" ? "#DDA15E" : "#000000",
                  fontWeight: value === "three" ? "600" : "400",
                  fontSize: 14,
                }}
              >
                + 15 plantes
              </Text>
            </Radio>
          </Radio.Group>
        </View>
      </View>
      <View style={styles.bottomcontainer}>
        <View style={styles.buttoncontainer}>
          <View style={styles.buttonnext}>
            <TouchableOpacity
              style={styles.touchableopacity}
              onPress={() =>
                navigation.navigate("TabNavigator", { screen: "Accueil" })
              }
            >
              <ButtonPrevious />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonnext}>
            <TouchableOpacity
              style={styles.touchableopacity}
              onPress={() => handleClick()}
            >
              <ButtonNext />
            </TouchableOpacity>
          </View>
        </View>
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
  middlecontainer: {
    flex: 35,
    paddingBottom: 30,
  },
  middletextcontainer: {},
  middleradiocontainer: { paddingTop: 15, paddingLeft: 25 },
  bottomcontainer: {
    flex: 15,
    paddingTop: 25,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 60,
  },
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
  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 250,
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
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Step0;
