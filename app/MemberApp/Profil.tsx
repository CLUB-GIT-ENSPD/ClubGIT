import Navbar from "@/components/navbar";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View,Text,StyleSheet } from "react-native";
import ThemeDeText from "@/components/ThemeDeText";
import Colors from "@/constants/Colors";



export default function Profil(){
    const role="Chef de la commission projet"
    const id="GIT-GLO22G0000"
    return(
        <View style={{flex:1}}>
            <View style={sty.block1}>
                <Ionicons 
                name="person"
                size={175}
                />
                <ThemeDeText style={sty.text1}>
                    MJOH MASSANGO Adolphe Macdeauville
                </ThemeDeText>
                <View style={{alignItems:"center"}}>
                    <Text>Role : {role}</Text>
                    <Text>id : {id}</Text>
                </View>
                <View style={{flexDirection:"row",gap:10}}>
                    <View style={sty.b1}>
                        <Text style={{color:Colors.blanc,fontWeight:"bold"}}>Rang SSS</Text>
                    </View>
                    <View style={sty.b2}>
                        <Text style={{fontWeight:"bold"}}>1020</Text>
                    </View>
                    <View style={sty.b3}>
                        <Text style={{fontWeight:"bold",color:Colors.blanc}}>Approuver</Text>
                    </View>
                </View>
                <View style={{marginTop:20}}>
                    <ThemeDeText variant="h2">Information supplementaire</ThemeDeText>
                </View>
                <View style={{marginTop:20,flexDirection:"row",alignItems:'center',gap:10}}>
                    <Ionicons size={30} name="logo-whatsapp"/>
                    <Text>656190590</Text>
                </View>
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
    },
    b3:{
     backgroundColor:Colors.blueFonce,
      padding:10,
      borderRadius:8,
      paddingHorizontal:30
      }
})