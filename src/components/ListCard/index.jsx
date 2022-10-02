import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import styles from './styles';

const ListCard = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.drag}>
          <MaterialIcons name='drag-indicator' size={24} color='black' />
          <Text style={[styles.title, { width: '40%' }]} numberOfLines={1}>
            Banana
          </Text>
          <View style={styles.middleContainer}>
            <Text style={styles.price}>Price:</Text>
            <Text style={styles.title}>$200</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.rightContainer}>
          <TouchableOpacity>
            <SimpleLineIcons name='pencil' size={20} color='black' />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name='delete-outline'
              size={24}
              color='black'
              style={{ marginLeft: 12 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ListCard;
