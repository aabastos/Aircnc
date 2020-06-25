import React, { useState, useEffect } from "react";
import {
  View,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  StyleSheet,
} from "react-native";

import api from "../../services/api";

import logo from "../../assets/logo.png";
import styles from "./styles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [techs, setTechs] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("user").then((user) => {
      if (user) {
        navigation.navigate("list");
      }
    });
  });

  async function handleButtonPress() {
    const response = await api.post("/sessions", { email: email });
    const _id = response.data._id;

    await AsyncStorage.setItem("user", _id);
    await AsyncStorage.setItem("techs", techs);

    navigation.navigate("List");
  }

  return (
    <KeyboardAvoidingView enabled={Platform.OS === "ios"} behavior="padding" style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image source={logo} />
      <View style={styles.form}>
        <Text style={styles.label}>SEU E-MAIL *</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <Text style={styles.label}>TECNOLOGIAS *</Text>
        <TextInput
          style={styles.input}
          placeholder="Tecnologias de interesses"
          placeholderTextColor="#999"
          keyboardType="default"
          autoCorrect={false}
          autoCapitalize="words"
          onChangeText={(text) => setTechs(text)}
          value={techs}
        />

        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Encontrar spots</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
