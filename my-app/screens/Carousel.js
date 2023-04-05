import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const items = [
  { id: 1, name: 'Complete Rainforest Experience', image: require('../assets/ulu1.jpg'), agency: 'By Travel Agency', description: '', layout: 'PackageDetails1' },
  { id: 2, name: 'Tour Package 2', image: require('../assets/image1.png'), agency: 'By Travel Agency', description: 'Description of Item 1', layout: 'PackageDetails1' },
  { id: 3, name: 'Tour Package 3', image: require('../assets/image2.jpg'), agency: 'By Travel Agency', description: 'Description of Item 2', layout: 'PackageDetails1' },
  { id: 4, name: 'Tour Package 4', image: require('../assets/image3.jpg'), agency: 'By Travel Agency', description: 'Description of Item 3', layout: 'PackageDetails1' },
];

const CarouselItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemAgency}>{item.agency}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </TouchableOpacity>
  );
};

const Carousel = () => {
  const navigation = useNavigation();

  const handlePress = (layout) => {
    navigation.navigate(layout);
  };

  return (
    <ScrollView horizontal={true} style={styles.carouselContainer}>
      {items.map(item => (
        <CarouselItem item={item} key={item.id} onPress={() => handlePress(item.layout)} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    padding: 10,
    borderRadius: 10,
  },
  itemContainer: {
    height: 400,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    width: 300,
    height: 300,
    marginBottom: 10,
    bottom: 20,
    overflow: 'hidden'
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  itemAgency: {
    fontSize: 13,
    textAlign: 'center',
  },
  itemDescription: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Carousel;
