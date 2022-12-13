import { StyleSheet, View, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

function ButtonSkip() {
  return (
      <View style={styles.container}>
        <Text style={{ color: "#606C38", fontWeight: "700", }}>Skip</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEFAE0",
    borderRadius: 22,
    width: 60,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ButtonSkip;
