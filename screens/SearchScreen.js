import { Button, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Step0 from "../components/request-form-steps/Step0";
import Step1 from "../components/request-form-steps/Step1";

export default function SearchScreen({ navigation }) {
  // ! A rajouter pour gérer les screens sur une même tab (et enregistrer les données sur plusieurs screens)
  // const [formProgress, setFormProgress] = useState(0);
  // const nextStep = () => {
  //   setFormProgress(formProgress + 1);
  // };

  // if (formProgress == 0) {
  //   return;
  //   <View style={styles.container}>
  //     <Step0 nextStep={nextStep} />
  //   </View>;
  // }

  // if (formProgress == 1) {
  //   return;
  //   <View style={styles.container}>
  //     <Step1 nextStep={nextStep} />
  //   </View>;
  // }

  return (
    <View style={styles.container}>
      <Step1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
