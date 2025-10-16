import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, Image, StyleSheet } from "react-native";
import axios from "axios";

export default function App() {
  const [busqueda, setBusqueda] = useState("");
  const [resultado, setResultado] = useState(null);

  const buscarVino = async () => {
    const res = await axios.get(`http://localhost:8787/api/vinos?nombre=${busqueda}`);
    setResultado(res.data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍷 Mi Cava v3</Text>
      <TextInput
        style={styles.input}
        placeholder="Buscar vino..."
        value={busqueda}
        onChangeText={setBusqueda}
      />
      <Button title="Buscar" color="#800020" onPress={buscarVino} />
      {resultado && (
        <View style={styles.card}>
          <Text style={styles.vino}>{resultado.nombre}</Text>
          {resultado.imagen && <Image source={{ uri: resultado.imagen }} style={styles.image} />}
          <Text>{resultado.descripcion}</Text>
          {resultado.url && <Text style={styles.link}>Más info: {resultado.url}</Text>}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 28, color: "#800020", fontWeight: "bold", marginBottom: 20 },
  input: { borderColor: "#800020", borderWidth: 1, padding: 10, marginBottom: 10 },
  card: { backgroundColor: "#f8f8f8", padding: 10, borderRadius: 10 },
  vino: { fontWeight: "bold", color: "#800020", fontSize: 18 },
  image: { width: 200, height: 200, marginVertical: 10 },
  link: { color: "blue" }
});
