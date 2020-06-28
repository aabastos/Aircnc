import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, Alert, AsyncStorage } from "react-native";

import api from "../../services/api";

import styles from "./styles";

export default function Book({ navigation }) {
  const [userId, setUserId] = useState("");
  const [bookDate, setBookDate] = useState("");

  useEffect(() => {
    async function loadUser() {
      const userId = await AsyncStorage.getItem("user");

      setUserId(userId);
    }

    loadUser();
  }, [])

  async function handleConfirmButton() {
    const user = userId;
    const spot = navigation.getParam("id");

    const response = await api.post(`/spots/${spot}/booking`, { date: bookDate }, {
      headers: {
        user_id: user
      }
    });

    Alert.alert("Solicitação de reserva enviada!");

    navigation.navigate("List");
  }

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
        keyboardType="default"
        autoCorrect={false}
        onChangeText={(text) => setBookDate(text)}
        value={bookDate}
      />

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmButton}>
        <Text style={styles.buttonText}>Solicitar Reserva</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton} onPress={handleCancelButton}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}