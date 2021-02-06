import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableHighlight
    style={styles.button}>
      <Text style={styles.textBotton}
       onPress={storeData} >SAVE DATA</Text>
      </TouchableHighlight>

      <TouchableHighlight
    style={styles.button1}>
      <Text style={styles.textBotton}
       onPress={getData} >READ DATA</Text>
      </TouchableHighlight>
    </View>
  );
}
const storeData = async () => {
  try {
    await AsyncStorage.setItem('settings','lee el storage'
    );
    alert('se guardo en el storage');
  } catch (error) {
    // Error saving data
    console.log(error);
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('settings')
    if(value!==null){
      alert(value)
    }
  } catch(e) {
    console.log(e); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
title:{
    textAlign:"center",
    bottom:30,
    right:15
  },
  button:{
    backgroundColor:'#00e600',
    paddingTop:15,
    paddingBottom:15,
    borderRadius:8,
   paddingHorizontal:10,
   paddingVertical:10,
   top:30

  },
  button1:{
    backgroundColor:'#00e600',
    paddingTop:15,
    paddingBottom:15,
    borderRadius:8,
   paddingHorizontal:10,
   paddingVertical:10,
   top:40

  },
  textBotton:{
    textAlign:"center",
    color:"#000"
  }});
