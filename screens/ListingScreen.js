import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Select, Box, CheckIcon } from "native-base";
import { useState } from "react";

import Sitter from "../components/Sitter";

export default function ListingScreen({ navigation }) {
  const [service, setService] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userconnexion.value);
  return (
    <View style={styles.container}>
      <View style={styles.bloctext}>
        <Text style={styles.textbienvenue}>
          Hey <Text style={styles.username}>{user.firstName}</Text>,{"\n"}
          Découvrez les plant-sitters disponibles près de chez vous 👀
        </Text>
        <Box style={styles.boxfilter} maxW="400">
          <Select
            selectedValue={service}
            minWidth="300"
            accessibilityLabel="Choose Service"
            placeholder="Filtrer par"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Prix croissant" value="priceacd" />
            <Select.Item label="Prix décroissant" value="pricedc" />
            <Select.Item label="Localisation" value="localisation" />
            <Select.Item label="Professionnel" value="pro" />
            <Select.Item label="Amateur" value="amateur" />
          </Select>
        </Box>
      </View>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "start-flex",
            alignItems: "center",
          }}
        >
          <Sitter />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start-flex",
    alignItems: "center",
    padding: 15,
    paddingTop: 75,
    backgroundColor: "#F6F5F1",
  },
  textbienvenue: {
    fontSize: 18,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 26,
    color: "#283618",
  },
  username: {
    fontSize: 25,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 26,
    color: "#DDA15E",
  },
  boxfilter: {
    marginTop: 24,
  },
});
