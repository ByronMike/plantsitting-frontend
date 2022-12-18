import { Button, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Step0 from "../components/profile-description-steps/Step0";
import Step1 from "../components/profile-description-steps/Step1";
import Step2 from "../components/profile-description-steps/Step2";

export default function Plantsitter1Screen({ navigation }) {
  const [formProgress, setFormProgress] = useState(0);
  const reviewsStep = () => {
    setFormProgress(0);
  };
  const skillsStep = () => {
    setFormProgress(1);
  };
  const equipmentsStep = () => {
    setFormProgress(2);
  };

  if (formProgress == 0) {
    return (
      <View style={styles.container}>
        <Step0 reviewsStep={reviewsStep} skillsStep={skillsStep} equimpentsStep={equipmentsStep}/>
      </View>
    );
  }

  if (formProgress == 1) {
    return (  
      <View style={styles.container}>
        <Step1 reviewsStep={reviewsStep} skillsStep={skillsStep} equimpentsStep={equipmentsStep} />
      </View>
    );
  }

  if (formProgress == 2) {
    return (  
      <View style={styles.container}>
        <Step2 reviewsStep={reviewsStep} skillsStep={skillsStep} equimpentsStep={equipmentsStep} />
      </View>
    );
  }
 return (
   <View style={styles.container}>
     <Text>Plantsitter1 Screen</Text>
     <Button
       title="Go to Landing Screen"
       onPress={() => navigation.navigate('Landing')}
     />
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