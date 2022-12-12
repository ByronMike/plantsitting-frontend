// 0) Import des balises 
import { Button, StyleSheet, Text, View } from 'react-native';

// 1) L’objet de navigation ( { navigation } ) se récupère via les props.
export default function Presentation1Screen({ navigation }) {
 return (
   <View>
     <Text>Presentation1 Screen</Text>
     <Button
       title="Go to Home"
       onPress={() => navigation.navigate('LandingScreen')}
     />
   </View>
 );
}