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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Step0() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [value, setValue] = useState("one");
  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <View style={styles.toptextcontainer}>
          <Text>JE CHERCHE 👋</Text>
          <Text>J'ai besoin d'un plant-sitteur pour</Text>
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
      <View style={styles.bottomcontainer}>
        <View style={styles.bottomtextcontainer}>
          <Text>MES PLANTES 👋</Text>
          <Text>J'ai</Text>
        </View>
        <View style={styles.bottomradiocontainer}>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={value}
            colorScheme="lightorange"
            onChange={(nextValue) => {
              setValue(nextValue);
            }}
          >
            <Radio value="one" my={2.5}>
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
            <Radio value="two" my={2.5}>
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
            <Radio value="three" my={2.5}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
});

export default Step0;
