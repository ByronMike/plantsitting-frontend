import { StyleSheet, TouchableOpacity, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

function ButtonSkip() {
  return (
      <TouchableOpacity style={styles.touchableopacity}>
        <Text style={{ color: "#606C38", fontWeight: "700", }}>Skip</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableopacity: {
    backgroundColor: "#FEFAE0",
    borderRadius: 22,
    width: 60,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ButtonSkip;
