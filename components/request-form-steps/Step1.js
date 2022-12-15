import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { Radio } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Step1(props) {
  const navigation = useNavigation();
  const [value, setValue] = useState("one");

  const handleClick = () => {
    props.previousStep();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <View style={styles.toptextcontainer}>
          <Text style={styles.smalltext}>PRÉCISER VOTRE DEMANDE 👋</Text>
          <View style={{ paddingLeft: 25 }}>
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
                  Garde à la maison
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
                  Dépôt chez un Plant-Sitter
                </Text>
              </Radio>
            </Radio.Group>
          </View>
        </View>
      </View>
      <View style={styles.middlecontainer}>
        <View style={styles.middletextcontainer}>
          <Text style={styles.smalltext}>QUAND ? 👋</Text>
          <Text style={styles.bigtext}>Pour quelles dates ?</Text>
        </View>
        <View style={styles.calendar}>
          <CalendarPicker
            startFromMonday={true}
            allowRangeSelection={true}
            weekdays={["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]}
            months={[
              "Janvier",
              "Février",
              "Mars",
              "Avril",
              "Mai",
              "Juin",
              "Juillet",
              "Août",
              "Septembre",
              "Octobre",
              "Novembre",
              "Décembre",
            ]}
            previousTitle="Précedent"
            nextTitle="Suivant"
            selectedDayColor="#66ff33"
          />
        </View>
        <View style={styles.middleradiocontainer}></View>
      </View>
      <View style={styles.bottomcontainer}>
        <View style={styles.buttonnext}>
          <TouchableOpacity
            style={styles.touchableopacityleft}
            onPress={() => handleClick()}
          >
            <Text style={[{ fontWeight: "700", fontSize: 14 }]}>Annuler</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonnext}>
          <TouchableOpacity
            style={styles.touchableopacityright}
            onPress={() => navigation.navigate("Map")}
          >
            <Text style={[{ fontWeight: "700", fontSize: 14, color: "white" }]}>
              Valider
            </Text>
          </TouchableOpacity>
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
    flex: 20,
    alignItems: "flex-start",
    paddingLeft: 25,
    paddingTop: 75,
  },
  toptextcontainer: {},
  middlecontainer: {
    flex: 60,
    paddingTop: 20,
    paddingBottom: 10,
  },
  middletextcontainer: { paddingLeft: 25 },
  middleradiocontainer: { paddingTop: 15, paddingLeft: 25 },
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
  touchableopacityleft: {
    width: 50,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  touchableopacityright: {
    backgroundColor: "#DDA15E",
    borderRadius: 5,
    width: 100,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomcontainer: {
    flexDirection: "row",
    flex: 20,
    paddingTop: 25,
    paddingBottom: 50,
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 70,
  },
  buttonnext: {
    justifyContent: "center",
    alignItems: "center",
  },
  calendar: {
    marginTop: 30,
  },
});

export default Step1;
