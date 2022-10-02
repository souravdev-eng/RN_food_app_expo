import { View, Text, FlatList, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';
import DATA from '../../data/FoodList.data.json';

import ListCard from '../../components/ListCard';
import AddButton from '../../components/AddButton';
import AddFoodModel from '../../components/AddFoodModel';

const HomeScreen = () => {
  const handelAddFood = () => {
    //
  };

  return (
    <>
      <View style={styles.coverContainer} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <View style={styles.container}>
          <Text style={styles.title}>Food List</Text>
          {DATA.map((el, index) => (
            <ListCard key={index} />
          ))}
          <View style={styles.divider} />
          <AddButton title={'Add Food Item'} onPress={handelAddFood} light />
        </View>
      </ScrollView>
      <AddButton title={'Final Food Item'} onPress={handelAddFood} style={styles.bottomButton} />
      <AddFoodModel />
    </>
  );
};

export default HomeScreen;
