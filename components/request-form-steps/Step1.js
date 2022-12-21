import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { Radio } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userRequest, cleanRequest } from "../../reducers/request";

function Step1(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const request = useSelector((state) => state.request.value);
  const [radioValue, setRadioValue] = useState("one");
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const [stateReducer, setStateReducer] = useState(request);

  const handlePreviousClick = () => {
    dispatch(cleanRequest());
    props.previousStep();
  };

  const handleValidateClick = () => {
    setStateReducer({
      ...stateReducer,
      garde: radioValue === "one",
      depot: radioValue === "two",
      startday: selectedStartDate,
      endday: selectedEndDate,
    });
    // console.log("stateReducer", stateReducer);
    dispatch(userRequest(stateReducer));
    console.log("request_Step1", request);

    // TODO Fetcher la route post ! ET actualiser le startDay et endDay
    // navigation.navigate("Map");
  };

  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === "END_DATE") {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  useEffect(() => {
    // * Note : request correspond au stackage des données de Step0 UNIQUEMENT
    // console.log("request", request);
    console.log("stateReducer", stateReducer);
    // console.log("startDay", selectedStartDate, selectedEndDate);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <View style={styles.toptextcontainer}>
          <Text style={styles.smalltext}>PRÉCISER VOTRE DEMANDE 👋</Text>
          <View style={{ paddingLeft: 25 }}>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={radioValue}
              colorScheme="lightorange"
              onChange={(nextValue) => {
                setRadioValue(nextValue);
              }}
            >
              <Radio value="one" my={3}>
                <Text
                  style={{
                    color: radioValue === "one" ? "#DDA15E" : "#000000",
                    fontWeight: radioValue === "one" ? "600" : "400",
                    fontSize: 14,
                  }}
                >
                  Garde à la maison
                </Text>
              </Radio>
              <Radio value="two" my={3}>
                <Text
                  style={{
                    color: radioValue === "two" ? "#DDA15E" : "#000000",
                    fontWeight: radioValue === "two" ? "600" : "400",
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
            onDateChange={onDateChange}
            minDate={new Date(2022, 1, 1)}
            maxDate={new Date(2050, 1, 1)}
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
            selectedDayTextColor="#000000"
            scaleFactor={350}
            // textStyle={{
            //   fontFamily: 'Montserrat',
            //   color: '#000000',
            // }}
          />
        </View>
        <View style={styles.middleradiocontainer}></View>
      </View>
      <View style={styles.bottomcontainer}>
        <View style={styles.buttonnext}>
          <TouchableOpacity
            style={styles.touchableopacityleft}
            onPress={() => handlePreviousClick()}
          >
            <Text style={[{ fontWeight: "700", fontSize: 14 }]}>Annuler</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonnext}>
          <TouchableOpacity
            style={styles.touchableopacityright}
            onPress={() => {
              handleValidateClick();
              navigation.navigate("Map");
            }}
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
