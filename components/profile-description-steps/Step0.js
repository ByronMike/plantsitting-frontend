import { StyleSheet, View, Text } from "react-native";

function Step0() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Step0;
