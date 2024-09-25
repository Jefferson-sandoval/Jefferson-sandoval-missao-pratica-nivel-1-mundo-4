import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SupplierForm = ({ onAddSupplier }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    const newSupplier = { name, address, contact, category };
    onAddSupplier(newSupplier);
    setName('');
    setAddress('');
    setContact('');
    setCategory('');
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        placeholder="Nome do Fornecedor"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Endereço"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <TextInput
        placeholder="Contato"
        value={contact}
        onChangeText={setContact}
        style={styles.input}
      />
      <TextInput
        placeholder="Categoria"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />
      <Button title="Adicionar Fornecedor" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default SupplierForm;