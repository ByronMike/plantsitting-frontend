import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function Step0(props) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.barNavigation}></View>
        <View style={styles.avatar}>
          <Avatar
            alignSelf="center"
            bg="amber.500"
            size="lg"
            source={{
              uri: props.userphoto,
            }}
          ></Avatar>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.name}>
            <Text>
              {props.firstname} {props.lastname}
            </Text>
          </View>
          <View style={styles.status}>
            <FontAwesome name="check-circle" size={12} color="#DDA15E" />
            <Text style={styles.userfonction}>{props.status}</Text>
          </View>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.topInformations}>
          <View style={styles.localisation}>
            <FontAwesome name="location-arrow" size={18} color="#DDA15E" />
            <Text style={styles.localisationtext}>
              {props.useraddress} km près de chez vous{" "}
            </Text>
          </View>
          <View style={styles.price}>
            <Text style={styles.userprice}>{props.userprice}€ / visite</Text>
          </View>
        </View>
        <View style={styles.bioContainer}>
          <Text style={styles.title}>Biographie</Text>
          <Text style={styles.userbio}>{props.userbio}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.tabsContaner}></View>
        <View style={styles.reviewsContainer}>
          <View style={styles.reviewNumber}></View>
          <View style={styles.cards}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    flex: 25,
  },
  middleContainer: {
    flex: 20,
  },
  bottomContainer: {
    flex: 55,
  },
});

export default Step0;
