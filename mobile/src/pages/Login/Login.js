import React from "react";
import { View, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import logo from "../../assets/logo.png";
import styles from "./styles";

export default function Login() {
  return (
    <KeyboardAvoidingView enabled={Platform.OS === "ios"} behavior="padding" style={styles.container}>
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
        />

        <Text style={styles.label}>TECNOLOGIAS *</Text>
        <TextInput
          style={styles.input}
          placeholder="Tecnologias de interesses"
          placeholderTextColor="#999"
          keyboardType="default"
          autoCorrect={false}
          autoCapitalize="words"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Encontrar spots</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}