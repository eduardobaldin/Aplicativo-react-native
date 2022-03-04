/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';



export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor='#303f9f'/>
      <View style={style.navbar}>
        <Text style={style.txtNavbar}>Camera</Text>
        <Text style={style.txt2Navbar}>...</Text>
      </View>

      <View style={style.conteudo}>
      </View>

      <View style={style.fundo}>
        <Image 
          source={require('./assets/camera.png')}  
          style={style.iconCamera} 
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    
  },
  navbar: {
    flexDirection:'row',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    height: 50,
  },
  txtNavbar: {
    color: '#FFFFFF',
    padding: 12,
    fontSize: 20,
  },
  txt2Navbar:{
    fontSize: 30,
    marginRight: 10,
    color: '#FFFFFF'
  },
  conteudo:{
    
    width: '100%',
    height: '81%',
  },
  fundo:{
    
    width: '100%',
    
    alignItems:'flex-end',
    justifyContent:'flex-end'    
  },
  iconCamera: {
    backgroundColor: '#FF00FF',
    width: 30,
    height: 30,
    borderRadius: 7,
    padding: 10,
    marginRight: 3,
  },
})