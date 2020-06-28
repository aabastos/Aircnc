import React from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function Book({ navigation }) {

  function handleCancelButton() {
    navigation.navigate("List");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>DATA DE INTERESSE *</Text>

      <TextInput
        style={styles.input}
        placeholder="Qual data você quer reservar? (dd/mm/yyyy)"
        placeholderTextColor="#999"
        keyboardType="numeric"
        autoCorrect={false}
      />

      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.buttonText}>Solicitar Reserva</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton} onPress={handleCancelButton}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}