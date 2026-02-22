import Navbar from "@/components/navbar";
import React from  "react";
import { View,StyleSheet } from "react-native";

export default function Quette(){
    
    return(
        <View style={{flex:1}}>
            <View style={sty.block1}>

            </View>
            <Navbar/>
        </View>
    )
}

const sty = StyleSheet.create({
    block1:{
        flex:1,backgroundColor:'white',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        gap:20
    },
    text1:{
        textAlign:'center',
        fontSize:20,
        fontWeight:"bold"
    },
    b1:{
      backgroundColor:'#ff8000',
      padding:10,
      borderRadius:8,
      paddingHorizontal:30  
    },
    b2:{
    backgroundColor:'#ffffff',
     padding:10,
    borderWidth:1,
     borderRadius:8,
     paddingHorizontal:30
    }
})