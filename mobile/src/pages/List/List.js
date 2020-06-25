import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, Image, AsyncStorage } from "react-native";

import styles from "./styles";
import logo from "../../assets/logo.png";

import SpotList from "../../components/SpotList";

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("techs").then((storagedTechs) => {
      const techsArray = storagedTechs.split(",").map((tech) => tech.trim());

      setTechs(techsArray);
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.image} />
      {techs.map((tech) => (
        <SpotList key={tech} tech={tech} />
      ))}
    </SafeAreaView>
  );
}
