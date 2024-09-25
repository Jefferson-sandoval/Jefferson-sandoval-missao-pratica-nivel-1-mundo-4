import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const SupplierList = ({ suppliers }) => {
  return (
    <View>
      <FlatList
        data={suppliers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.supplierItem}>
            <Text style={styles.supplierText}>Nome: {item.name}</Text>
            <Text style={styles.supplierText}>Endereço: {item.address}</Text>
            <Text style={styles.supplierText}>Contato: {item.contact}</Text>
            <Text style={styles.supplierText}>Categoria: {item.category}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  supplierItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  supplierText: {
    fontSize: 16,
  },
});

export default SupplierList;