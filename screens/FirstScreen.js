import { Button, StyleSheet, Text, View, Image } from 'react-native';

export default function FirstScreen({ navigation }) {
 return (
   <View style={styles.container}>
    <View>
    <Image
        source={require("../assets/logo-white-plantssiting.png")}
        // 2) Pour afficher la map sur tout l'écran : resizeMode="contain"
        resizeMode="contain" 
        style={styles.image}
      ></Image>
    </View>
    <View>
     <Text>First Screen</Text>
     <Button
       title="Go to Landing Screen"
       onPress={() => navigation.navigate('Landing')}
     />
     </View>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#283618",
    justifyContent: "center",
    alignItems: "center",
  },
  images : {

  }
});