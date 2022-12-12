import { StyleSheet, Text, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { testUser } from "../reducers/user";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    dispatch(testUser("test"));
    console.log("userTest", user);
  }, []);

  // ! A rajouter pour gérer les screens sur une même tab (et enregistrer les données sur plusieurs screens)
  // const [formProgress, setFormProgress] = useState(0);
  // const nextStep = () => {
  //   setFormProgress(formProgress + 1);
  // };

  // if (formProgress == 0) {
  //   return;
  //   <Step0 nextStep={nextStep} />;
  // }

  // if (formProgress == 1) {
  //   return;
  //   <Step1 nextStep={nextStep} />;
  // }

  return;
}

export default Home;
