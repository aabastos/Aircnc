import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

import api from "../services/api";
import styles from "./styles";

export default function SpotList({ tech }) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get("/spots", { params: { tech: tech } });

      setSpots(response.data);
    }

    loadSpots();
  }, []);

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
            <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url }} />
            <Text style={styles.companyName}>{item.company}</Text>
            <Text style={styles.price}>{item.price ? `R$${item.price}/dia` : "Gratuito"}</Text>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.buttonText}>Solicitar reserva</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
