import React, { useState } from "react";
import { View, StatusBar, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import api from "../../services/api";

import logo from "../../assets/logo.png";
import styles from "./styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [techs, setTechs] = useState("");

  async function handleButtonPress() {
    const response = api.get("/sessions", { email: email });
    // localStorage.setItem("user", data._id);
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
          onChangeText={text => setEmail(text)}
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
          onChangeText={text => setTechs(text)}
          value={techs}
        />

        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Encontrar spots</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView >
  )
}