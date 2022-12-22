import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// import React, { Component } from "react-native";
import {
  Container,
  Header,
  Button,
  Icon,
  InputGroup,
  Input,
  VStack,
  Avatar,
} from "native-base";
import { useDispatch, useSelector } from "react-redux";

const VintedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/logo-white-plantssiting.png")}
      />
      <Text style={{ color: "#DDA15E", fontSize: 30, marginBottom: 20 }}>
        Viens vendre ta plante et gagne des éco points 🪴
      </Text>
      <Container>
        <InputGroup marginBottom={1}>
          <TouchableOpacity transparent></TouchableOpacity>
          <Icon name="ios-search" />
          <Input
            style={styles.input}
            width={250}
            size="lg"
            color="white"
            placeholder="Search"
          />
          <Icon name="ios-people" />
          {/* <Text style={{ color: "white", fontSize: 15 }}>Search</Text> */}
        </InputGroup>
      </Container>
      <Container style={styles.scroll}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container style={styles.cards}>
            <VStack space={2} alignItems="center">
              <Avatar
                bg="lightBlue.400"
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
                size="sm"
              >
                NB
                <Avatar.Badge bg="green.500" />
              </Avatar>
            </VStack>

            <Text style={{ color: "#DDA15E", fontSize: 30 }}>L'helxine</Text>
            <Image
              style={styles.photo}
              source={require("../assets/plant1.png")}
            />
            <Text style={styles.price}>32€</Text>
            <Text style={styles.bio}>
              Soleirolia soleirolii est une espèce de plantes dicotylédones de
              la famille des Urticaceae, originaire de l'ouest du bassin
              méditerranéen. C'est l'unique espèce du genre Soleirolia. Elle est
              parfois aussi dénommée Soleirole, ou Hélixine ou encore Helxine ou
              « Larme d'ange ».
            </Text>
          </Container>
          <Container style={styles.cards}>
            <VStack
              space={2}
              alignItems={{
                base: "center",
                md: "flex-start",
              }}
            >
              <Avatar
                bg="green.500"
                alignSelf="center"
                size="sm"
                source={{
                  uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                }}
              ></Avatar>
            </VStack>
            <Text style={{ color: "#DDA15E", fontSize: 30 }}>
              Monstera Deliciosa
            </Text>
            <Image
              style={styles.photo}
              source={require("../assets/plant2.png")}
            />
            <Text style={styles.price}>105€</Text>
            <Text style={styles.bio}>
              Le faux philodendron est une plante vivace de la famille des
              Araceae. Elle est très proche des philodendrons avec lesquels on
              la confond fréquemment en utilisant le nom de ce genre comme nom
              vernaculaire pour désigner les individus commercialisés comme
              plante ornementale d'appartement.
            </Text>
          </Container>
          <Container style={styles.cards}>
            <VStack space={2} alignItems="center">
              <Avatar
                bg="lightBlue.400"
                source={{
                  uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
                size="sm"
              >
                NB
                <Avatar.Badge bg="green.500" />
              </Avatar>
            </VStack>
            <Text style={{ color: "#DDA15E", fontSize: 30 }}>
              Calathea Orbifolia
            </Text>
            <Image
              style={styles.photo}
              source={require("../assets/plant3.png")}
            />
            <Text style={styles.price}>33€</Text>
            <Text style={styles.bio}>
              Calathea est un genre de plantes monocotylédones appartenant à la
              famille des Marantaceae. Ce genre comprend aujourd'hui 56 espèces
              de plantes herbacées. De nombreuses espèces autrefois classées
              dans le genre Calathea sont aujourd'hui classées dans le genre
              Goeppertia
            </Text>
          </Container>
          <Container style={styles.cards}>
            <VStack
              space={2}
              alignItems={{
                base: "center",
                md: "flex-start",
              }}
            >
              <Avatar
                bg="green.500"
                alignSelf="center"
                size="sm"
                source={{
                  uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                }}
              ></Avatar>
            </VStack>
            <Text style={{ color: "#DDA15E", fontSize: 30 }}>
              Strelitzia Stanislas
            </Text>
            <Image
              style={styles.photo}
              source={require("../assets/plant4.png")}
            />
            <Text style={styles.price}>203€</Text>
            <Text style={styles.bio}>
              Strelitzia nicolai est un oiseau de paradis aux fleurs noires et
              blanchâtres de la famille des Strelitziaceae originaire d'Afrique
              du Sud.
            </Text>
          </Container>
        </ScrollView>
      </Container>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#606C38",
  },
  image: {
    width: "55%",
    height: "12%",
    alignItems: "center",
    marginTop: 350,
    marginBottom: 30,
  },
  scroll: {
    marginTop: 25,
    marginHorizontal: 50,
  },
  cards: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "white",
    marginHorizontal: 43,
    // margin: 20,
    width: 380,
  },
  photo: {
    width: 242,
    height: 250,
    alignItems: "center",
    // marginBottom: 45,
  },
  input: {
    alignItems: "center",
    borderRadius: 4,
    py: 3,
    px: 1,
    fontSize: 14,
  },
  price: {
    marginBottom: 15,
    marginTop: 5,
    color: "#DDA15E",
    fontSize: 25,
  },
  bio: {
    marginBottom: 25,
    color: "white",
    fontSize: 15,
  },
});

export default VintedScreen;
