import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { REACT_APP_BACKEND_URL } from "@env";
import { distance } from "../modules/checkDistance";
import Step0 from "../components/profile-description-steps/Step0";
import Step1 from "../components/profile-description-steps/Step1";
import Step2 from "../components/profile-description-steps/Step2";

export default function Plantsitter1Screen({ navigation }) {
  const dispatch = useDispatch();
  const sitterToken = useSelector((state) => state.sitter.value);
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
    console.log("sitter token reducer", sitterToken);
  }, []);

  useEffect(() => {
    // fetch pour les informations du Sitter
    fetch(`http://${REACT_APP_BACKEND_URL}/sitters/sitterProfile/${sitterToken}`)
      .then((response) => response.json())
      .then((dataSitter) => {
        setDataSitter([dataSitter.sitter]);
      });
    console.log("dataSitter", dataSitter);
    // console.log("dataSitter : ", dataSitter[0].sitter);
    // console.log("dataSitter : ", dataSitter.sitter.reviews[0].author.firstName);
  }, []);

  const dataStep0 = dataSitter.map((data, i) => {
    // console.log("data", data.reviews);
    // console.log("tokeeen", data.userphoto);
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
        reviewLength={data.reviews.length}
        userbio={data.userbio}
        useraddress={localisation}
        userphoto={data.userphoto}
        userprice={data.tarifs[0].tarif1}
        reviews={data.reviews}
        reviewsStep={reviewsStep}
        skillsStep={skillsStep}
        equipmentsStep={equipmentsStep}
      />
    );
  });

  const dataStep1 = dataSitter.map((data, i) => {
    console.log("data", data.equipment);
    // console.log("tokeeen", data.userphoto);
    let latuser = 43.292328;
    let latsitter = data.useraddress[0].latitude;
    let lonuser = 5.366564;
    let lonsitter = data.useraddress[0].longitude;
    const localisation = distance(latuser, latsitter, lonuser, lonsitter);
    return (
      <Step1
        key={i}
        token={data.token}
        firstname={data.firstname}
        lastname={data.lastname}
        status={data.status}
        reviewLength={data.reviews.length}
        userbio={data.userbio}
        useraddress={localisation}
        userphoto={data.userphoto}
        userprice={data.tarifs[0].tarif1}
        reviews={data.reviews}
        skills={data.skills[0]}
        reviewsStep={reviewsStep}
        skillsStep={skillsStep}
        equipmentsStep={equipmentsStep}
      />
    );
  });

  const dataStep2 = dataSitter.map((data, i) => {
    // console.log("data", data.reviews);
    // console.log("tokeeen", data.userphoto);
    let latuser = 43.292328;
    let latsitter = data.useraddress[0].latitude;
    let lonuser = 5.366564;
    let lonsitter = data.useraddress[0].longitude;
    const localisation = distance(latuser, latsitter, lonuser, lonsitter);
    return (
      <Step2
        key={i}
        token={data.token}
        firstname={data.firstname}
        lastname={data.lastname}
        status={data.status}
        reviewLength={data.reviews.length}
        userbio={data.userbio}
        useraddress={localisation}
        userphoto={data.userphoto}
        userprice={data.tarifs[0].tarif1}
        reviews={data.reviews}
        equipment={data.equipment}
        reviewsStep={reviewsStep}
        skillsStep={skillsStep}
        equipmentsStep={equipmentsStep}
      />
    );
  });

  if (formProgress == 0) {
    return <View style={styles.container}>{dataStep0}</View>;
  }

  if (formProgress == 1) {
    return <View style={styles.container}>{dataStep1}</View>;
  }

  if (formProgress == 2) {
    return <View style={styles.container}>{dataStep2}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
