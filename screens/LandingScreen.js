// 0) Import des balises 
import { Button, StyleSheet, Text, View } from 'react-native';

// 1) L’objet de navigation ( { navigation } ) se récupère via les props.
export default function LandingScreen({ navigation }) {
 return (
   <View>
     <Text>Home Screen</Text>
     <Button
       title="Go to Presentation1 Screen"
       onPress={() => navigation.navigate('Presentation1Screen')}
     />
   </View>
 );
}