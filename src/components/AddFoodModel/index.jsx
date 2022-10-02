import { View, Text, TextInput } from 'react-native';
import React from 'react';
import styles from './styles';
import AddButton from '../AddButton';

const AddFoodModel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Food</Text>
      <View>
        <Text style={styles.label}>Food Name</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View>
        <Text style={styles.label}>Food Price</Text>
        <TextInput style={styles.textInput} keyboardType='number-pad' />
      </View>
      <AddButton title={'Final Food Item'} style={styles.bottomButton} />
    </View>
  );
};

export default AddFoodModel;
