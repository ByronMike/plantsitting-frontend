import { StyleSheet, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

function ButtonNext(props) {
  return (
    <View style={styles.container}>
      <FontAwesome name="chevron-right" color="white" size={18} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DDA15E",
    borderRadius: 22,
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ButtonNext;
