import React from 'react';
import {View,Text,StyleSheet} from 'react-native';



export default function (){
  return(
    <View style={estilo.navbar}>
        <Text style={estilo.txt}>Camera</Text>      
    </View>
  );
};

const estilo=StyleSheet.create({
    navbar:{
        backgroundColor:'#3f51b5',
        width:'100%',
        height:50,
    },
    txt:{
        color:'white',
        marginTop:6,
        marginLeft:30,
        fontSize:25,
    },
    layout:{
    },
})