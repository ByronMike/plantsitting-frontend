import { Button, StyleSheet, Text, View } from 'react-native';

export default function AssessmentScreen({ navigation }) {
 return (
   <View style={styles.container}>
     <Text>Assessment Screen</Text>
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