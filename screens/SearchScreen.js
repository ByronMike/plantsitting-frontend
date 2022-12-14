import { Button, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Step0 from "../components/request-form-steps/Step0";

export default function SearchScreen({ navigation }) {
  // ! A rajouter pour gérer les screens sur une même tab (et enregistrer les données sur plusieurs screens)
  // const [formProgress, setFormProgress] = useState(0);
  // const nextStep = () => {
  //   setFormProgress(formProgress + 1);
  // };

  // if (formProgress == 0) {
  //   return;
  //   <Step0 nextStep={nextStep} />;
  // }

  // if (formProgress == 1) {
  //   return;
  //   <Step1 nextStep={nextStep} />;
  // }

  return (
    <View style={styles.container}>
      <Step0 />
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
