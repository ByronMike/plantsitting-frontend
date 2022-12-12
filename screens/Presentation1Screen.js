import { Button, StyleSheet, Text, View } from "react-native";

export default function Presentation1Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Presentation1 Screen</Text>
      <Button
        title="Go to LandingScreen"
        onPress={() => navigation.navigate("Landing")}
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
