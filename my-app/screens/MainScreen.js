import React, { useLayoutEffect } from 'react';
import { TouchableOpacity, ImageBackground, StatusBar, Alert, View, Image, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel from './Carousel';
import { MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons';

function MainScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={{ backgroundColor: '#d4d4d8', flex: 1 }}>
      {/* First Section */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require('../assets/header_bg.jpg')} resizeMode="cover"
        style={{
          maxHeight: 250,
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 20,
          alignItems: 'center',
        }}>
        <View style={{ paddingtop: 20 }}>
          <Text style={{ color: 'white', fontSize: 30, fontWeight: '600' }}>Let's Explore</Text>
        </View>
      </ImageBackground>

      {/* Second Section */}
      <View style={{ flex: 1, padding: 20, backgroundColor: '#d4d4d8' }}>
        <View style={{ flex: 1, paddingBottom: 10, backgroundColor: '#d4d4d8', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 30, fontWeight: '400' }}>Most Popular</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Lists')}>
            <Text style={{ color: '#007AFF', fontSize: 20, fontWeight: '400' }}>See all</Text>
          </TouchableOpacity>
        </View>
        <Carousel />
      </View>

      {/* Footer Section */}
      <View style={{ paddingBottom: 30, flexDirection: 'row', backgroundColor: 'white', height: 90, alignItems: 'center', justifyContent: 'space-around' }}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name="home" size={30} color="grey" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Lists')}>
          <Entypo name="list" size={30} color="grey" />
        </Pressable>
        <Pressable style={{}} onPress={() => navigation.navigate('AgencyList')}>
            <FontAwesome name="building-o" size={30} color="grey" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Favourites')}>
          <FontAwesome name="search" size={30} color="grey" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('AboutThisApp')}>
          <Entypo name="info-with-circle" size={30} color="grey" />
        </Pressable>
      </View>
    </View>
  )
}
export default MainScreen;
