import { Button, StyleSheet, Text, View } from 'react-native';

export default function LandingScreen({ navigation }) {
 return (
   <View style={styles.container}>
     <Text>Landing Screen</Text>
     <Button
       title="Go to Presentation1 Screen"
       onPress={() => navigation.navigate('Presentation1')}
     />
     <Button
       title="Go to Presentation2 Screen"
       onPress={() => navigation.navigate('Presentation2')}
     />
     <Button
       title="Go to Presentation3 Screen"
       onPress={() => navigation.navigate('Presentation3')}
     />
     <Button
       title="Go to Presentation4 Screen"
       onPress={() => navigation.navigate('Presentation4')}
     />
     <Button
       title="Go to Home Screen"
       onPress={() => navigation.navigate('Home')}
     />
     <Button
       title="Go to Search Screen"
       onPress={() => navigation.navigate('Search')}
     />
     <Button
       title="Go to Sign-up Screen"
       onPress={() => navigation.navigate('Signup')}
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