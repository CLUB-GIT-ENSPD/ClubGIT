import Navbar from "@/components/navbar";
import { Ionicons } from "@expo/vector-icons";
import React from  "react";
import { View,StyleSheet, FlatList,Text, Animated } from "react-native";

export default function Commission(){

    const data = [
        {id:'1', com:"communication"},
        {id:'2', com:"logistique"},
        {id:'3', com:"projets"},
        {id:'4', com:"A.Academique"},
        {id:'5', com:"secretariat"},
        {id:'6', com:"censorat"},
        {id:'7', com:"commission 7"},
        {id:'8', com:"commission 8"},
    ]
    
    return(
        <View style={{flex:1}}>
            <View style={sty.block1}>
                <Text style={{fontSize:40,fontWeight:'bold',marginTop:30}}>Commission</Text>
                <FlatList
                    data={data}
                    keyExtractor={(item)=>item.id}
                    renderItem={({item})=>(
                        <Animated.View style={{alignItems:'center'}}>
                            <View style={sty.b1}>
                                <Ionicons 
                                    name="albums"
                                    size={60} 
                                />
                            </View>
                            <View>
                                <Text>
                                    {item.com}
                                </Text>
                            </View>
                        </Animated.View>
                    )}
                />
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
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:300,
        elevation:2,
        padding:20,
        margin:10 
    },
    b2:{
    backgroundColor:'#ffffff',
     padding:10,
    borderWidth:1,
     borderRadius:8,
     paddingHorizontal:30
    }
})