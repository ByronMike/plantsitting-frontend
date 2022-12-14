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
import { Input, Box, Checkbox } from "native-base";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Step0() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
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
                <Text style={{ color: isChecked1 ? '#DDA15E' : '#000000' , marginBottom: 15, fontWeight: isChecked1 ? "600" : "400"}}>Arrosage</Text>
              </Checkbox>
              <Checkbox value="Don assosciation" colorScheme="red">
                <Text>1€ pour Don association🪴</Text>
              </Checkbox>
            </View>
          </Box>
        </View>
      </View>
      <View style={styles.bottomcontainer}>
        <View style={styles.bottomtextcontainer}></View>
        <View style={styles.bottomradiocontainer}></View>
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
