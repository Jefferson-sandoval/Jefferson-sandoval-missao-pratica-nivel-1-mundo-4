import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SupplierForm from './components/SupplierForm';
import SupplierList from './components/SupplierList';

const App = () => {
  const [suppliers, setSuppliers] = useState([]);

  const addSupplier = (supplier) => {
    setSuppliers((prevSuppliers) => [...prevSuppliers, supplier]);
  };

  return (
    <View style={styles.container}>
      <SupplierForm onAddSupplier={addSupplier} />
      <SupplierList suppliers={suppliers} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default App;