import React, { useState, useEffect } from "react";
import { withNavigation } from "react-navigation";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

import api from "../services/api";
import styles from "./styles";

function SpotList({ tech, navigation }) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get("/spots", { params: { tech: tech } });

      setSpots(response.data);
    }

    loadSpots();
  }, []);

  function handleButtonPress(id) {
    navigation.navigate("Book", { id });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.spotListText}>
        Empresas que usam <Text style={styles.techText}>{tech}</Text>
      </Text>

      <FlatList
        style={styles.list}
        data={spots}
        keyExtractor={(spot) => spot._id}
        horizontal
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              style={styles.thumbnail}
              source={{ uri: item.thumbnail_url.replace("localhost", "192.168.1.115") }}
            />
            <Text style={styles.companyName}>{item.company}</Text>
            <Text style={styles.price}>{item.price ? `R$${item.price}/dia` : "Gratuito"}</Text>
            <TouchableOpacity onPress={() => handleButtonPress(item._id)} style={styles.bookButton}>
              <Text style={styles.buttonText}>Solicitar reserva</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default withNavigation(SpotList);