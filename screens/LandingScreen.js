import { Button, StyleSheet, Text, View, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text>Landing Screen</Text>
        <Button
          title="Go to First Screen"
          onPress={() => navigation.navigate("First")}
        />
        <Button
          title="Go to Presentation1 Screen"
          onPress={() => navigation.navigate("Presentation1")}
        />
        <Button
          title="Go to Presentation2 Screen"
          onPress={() => navigation.navigate("Presentation2")}
        />
        <Button
          title="Go to Presentation3 Screen"
          onPress={() => navigation.navigate("Presentation3")}
        />
        <Button
          title="Go to Presentation4 Screen"
          onPress={() => navigation.navigate("Presentation4")}
        />
        <Button
          title="Go to Home Screen"
          onPress={() => navigation.navigate("TabNavigator")}
        />
        <Button
          title="Go to Signin Screen"
          onPress={() => navigation.navigate("Signin")}
        />
        <Button
          title="Go to Signin Sitter Screen"
          onPress={() => navigation.navigate("SigninSitter")}
        />
        <Button
          title="Go to Search Screen"
          onPress={() =>
            navigation.navigate("TabNavigator", { screen: "Chercher" })
          }
        />
        <Button
          title="Go to Messages Screen"
          onPress={() =>
            navigation.navigate("TabNavigator", { screen: "Messages" })
          }
        />
        <Button
          title="Go to Profile Screen"
          onPress={() =>
            navigation.navigate("TabNavigator", { screen: "Profile" })
          }
        />
        <Button
          title="Go to Schedule Screen"
          onPress={() => navigation.navigate("Schedule")}
        />
        <Button
          title="Go to Map Screen"
          onPress={() => navigation.navigate("Map")}
        />
        <Button
          title="Go to Listing Screen"
          onPress={() => navigation.navigate("Listing")}
        />
        <Button
          title="Go to Plantsitter1 Screen"
          onPress={() => navigation.navigate("Plantsitter1")}
        />
        <Button
          title="Go to Plantsitter2 Screen"
          onPress={() => navigation.navigate("Plantsitter2")}
        />
        <Button
          title="Go to Plantsitter3 Screen"
          onPress={() => navigation.navigate("Plantsitter3")}
        />
        <Button
          title="Go to Sign-up Screen"
          onPress={() => navigation.navigate("Signup")}
        />
        <Button
          title="Go to Sign-up1 Sitter Screen"
          onPress={() => navigation.navigate("Signup1Sitter")}
        />
        <Button
          title="Go to Sign-up2 Sitter Screen"
          onPress={() => navigation.navigate("Signup2Sitter")}
        />
        <Button
          title="Go to Sign-up3 Sitter Screen"
          onPress={() => navigation.navigate("Signup3Sitter")}
        />
        <Button
          title="Go to Sign-up4 Sitter Screen"
          onPress={() => navigation.navigate("Signup4Sitter")}
        />
        <Button
          title="Go to CameraScreen Sitter Screen"
          onPress={() => navigation.navigate("CameraScreen")}
        />
        <Button
          title="Go to Summary Screen"
          onPress={() => navigation.navigate("Summary")}
        />
        <Button
          title="Go to Payment Screen"
          onPress={() => navigation.navigate("Payment")}
        />
        <Button
          title="Go to Vinted Screen"
          onPress={() => navigation.navigate("Vinted")}
        />
        <Button
          title="Go to Congratulation Screen"
          onPress={() => navigation.navigate("Congratulation")}
        />
        <Button
          title="Go to Assessment Screen"
          onPress={() => navigation.navigate("Assessment")}
        />
        <Button
          title="Empty asyncstorage"
          onPress={() => AsyncStorage.clear()}
        />
      </ScrollView>
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
