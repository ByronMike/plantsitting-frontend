import { Button, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Step0 from "../components/request-form-steps/Step0";
import Step1 from "../components/request-form-steps/Step1";

export default function SearchScreen({ navigation }) {
  // Gestion des screens avec le même tab navigator et pour faciliter le stockage des données via useState
  const [formProgress, setFormProgress] = useState(0);
  const nextStep = () => {
    setFormProgress(formProgress + 1);
  };
  const previousStep = () => {
    setFormProgress(formProgress - 1);
  };

  if (formProgress == 0) {
    return (
      <View style={styles.container}>
        <Step0 nextStep={nextStep} />
      </View>
    );
  }

  if (formProgress == 1) {
    return (
      <View style={styles.container}>
        <Step1 previousStep={previousStep} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
