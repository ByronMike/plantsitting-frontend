import { StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

function ButtonNext() {
  return (
      <TouchableOpacity style={styles.touchableopacity}>
        <FontAwesome name="chevron-right" color="white" size={18} />
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableopacity: {
    backgroundColor: "#DDA15E",
    borderRadius: 22,
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ButtonNext;
