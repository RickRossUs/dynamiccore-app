import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Form from "../components/Form";

const FormScreen = () => {
  const [items, setItems] = useState<{ name: string; email: string }[]>([]);

  const handleAddItem = (item: { name: string; email: string }) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <View style={styles.container}>
      <Form onAddItem={handleAddItem} />
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>Nombre: {item.name}</Text>
            <Text style={styles.itemText}>Correo: {item.email}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No hay elementos en la lista.</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginVertical: 5,
    elevation:2
  },
  itemText: {
    fontSize: 16,
  },
  emptyText: {
    marginTop: 20,
    fontSize: 16,
    color: "#aaa",
  },
});

export default FormScreen;
