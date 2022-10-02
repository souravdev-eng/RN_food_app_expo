import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import styles from './styles';

const AddButton = ({ onPress, title, style, light = false }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[light ? styles.light : styles.container, style]}
      onPress={onPress}>
      {light && <Ionicons name='ios-add' size={24} color='black' />}
      <Text style={light ? styles.light_text : styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AddButton;
