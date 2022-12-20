import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { reviewSitter } from "../reducers/review";
import { REACT_APP_BACKEND_URL } from "@env";
import { distance } from "../modules/checkDistance";
import Step0 from "../components/profile-description-steps/Step0";
import Step1 from "../components/profile-description-steps/Step1";
import Step2 from "../components/profile-description-steps/Step2";

export default function Plantsitter1Screen({ navigation }) {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.sitter.value);
  const [dataSitter, setDataSitter] = useState([]);

  const [formProgress, setFormProgress] = useState(0);
  const reviewsStep = () => {
    setFormProgress(0);
  };
  const skillsStep = () => {
    setFormProgress(1);
  };
  const equipmentsStep = () => {
    setFormProgress(2);
  };

  useEffect(() => {
    console.log("token reducer", userToken);
  }, []);

  useEffect(() => {
    // fetch pour les informations du Sitter
    fetch(`http://${REACT_APP_BACKEND_URL}/sitters/sitterProfile/${userToken}`)
      .then((response) => response.json())
      .then((dataSitter) => {
        setDataSitter([dataSitter.sitter]);
      });
    // console.log("choix", userchoose);
    console.log("dataSitter : ", dataSitter);

    // fetch pour les informations Reviews du Sitter
    fetch(
      `http://${REACT_APP_BACKEND_URL}/sitters/reviewsBySitter/${userToken}`
    )
      .then((response) => response.json())
      .then((reviews) => {
        // console.log("dataReviews : ", reviews.reviews[0].author);
        dispatch(reviewSitter([reviews.reviews[0].author]));
      });
  }, []);

  const dataStep0 = dataSitter.map((data, i) => {
    console.log("data", data);
    console.log("tokeeen", data.userphoto);

    let latuser = 43.292328;
    let latsitter = data.useraddress[0].latitude;
    let lonuser = 5.366564;
    let lonsitter = data.useraddress[0].longitude;

    const localisation = distance(latuser, latsitter, lonuser, lonsitter);

    return (
      <Step0
        key={i}
        token={data.token}
        firstname={data.firstname}
        lastname={data.lastname}
        status={data.status}
        review={data.reviews.length}
        userbio={data.userbio}
        useraddress={localisation}
        userphoto={data.userphoto}
        userprice={data.tarifs[0].tarif1}
        reviews={data.reviews}
        reviewsStep={reviewsStep}
        skillsStep={skillsStep}
        equimpentsStep={equipmentsStep}
      />
    );
  });

  if (formProgress == 0) {
    return <View style={styles.container}>{dataStep0}</View>;
  }

  if (formProgress == 1) {
    return (
      <View style={styles.container}>
        <Step1
          reviewsStep={reviewsStep}
          skillsStep={skillsStep}
          equimpentsStep={equipmentsStep}
        />
      </View>
    );
  }

  if (formProgress == 2) {
    return (
      <View style={styles.container}>
        <Step2
          reviewsStep={reviewsStep}
          skillsStep={skillsStep}
          equimpentsStep={equipmentsStep}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Plantsitter1 Screen</Text>
      <Button
        title="Go to Landing Screen"
        onPress={() => navigation.navigate("Landing")}
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
