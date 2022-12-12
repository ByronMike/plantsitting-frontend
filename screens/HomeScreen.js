import { Button, StyleSheet, Text, View } from 'react-native';
import Home from "../components/Home";

export default function HomeScreen({ navigation }) {
 return (
   <View style={styles.container}>
     <Text>Home Screen</Text>
     <Button
       title="Go to Landing Screen"
       onPress={() => navigation.navigate('Landing')}
     />
     <Home/>
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