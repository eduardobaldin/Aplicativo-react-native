import React from 'react';
import {View,Text,Button,Alert,StyleSheet, StatusBar, Image} from 'react-native';


import Navbar from './componentes/Navbar';

export default function App(){
  return(
    <View>
      <StatusBar style="ligth" backgroundColor='blue' />
      <Navbar />
      <View style={estilo.align}>
        <Image style={estilo.icon} source={ {uri: 'https://cdn-icons.flaticon.com/png/512/3288/premium/3288788.png?token=exp=1646272176~hmac=610d9cd3340d9911378f2ff3ee5d80da'}} />
      </View>
    </View>
  );
};

const estilo=StyleSheet.create({
  btn:{
    color:'#ff4081',
    backgroundColor:'ff4081',
    width:10    
  },
  icon:{
    width:40,
    height:40,
    backgroundColor:'#ff4081',
    borderRadius:15,
    margin:1,
  },
  align:{
    alignItems:'flex-end',
    
  }  
})