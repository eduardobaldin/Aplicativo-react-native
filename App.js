import React from 'react';
import {View,Text,Button,Alert,StyleSheet} from 'react-native';

import Navbar from './componentes/Navbar';

export default function App(){
  return(
    <View>
      <Navbar />
      <Button style={estilo.btn}
        title='oi'
        onPress={()=>Alert.alert('Foto','foto tirada')} 
        
      />
    </View>
  );
};

const estilo=StyleSheet.create({
  btn:{
    color:'#ff4081',
    backgroundColor:'ff4081',
    width:10    
  },
})