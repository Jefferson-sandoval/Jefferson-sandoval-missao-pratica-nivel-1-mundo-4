import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SupplierForm from '../../components/SupplierForm';
import SupplierList from '../../components/SupplierList';

const Index = () => {
  const [suppliers, setSuppliers] = useState([]);

  const addSupplier = (newSupplier) => {
    setSuppliers((prevSuppliers) => [...prevSuppliers, newSupplier]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Fornecedores</Text>
      <SupplierForm onAddSupplier={addSupplier} /> {}
      <SupplierList suppliers={suppliers} /> {}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Index;