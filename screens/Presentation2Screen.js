import { Button, StyleSheet, Text, View } from 'react-native';

export default function Presentation2Screen({ navigation }) {
 return (
   <View style={styles.container}>
     <Text>Presentation2 Screen</Text>
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