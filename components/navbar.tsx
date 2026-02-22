import React from "react";
import Animated, { FadeIn } from "react-native-reanimated";
import { Pressable, View } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import ThemeDeText from "./ThemeDeText";

export default function Navbar(){
    return(
        <Animated.View style={{backgroundColor:'white'}}>
            <View style={{
                marginBottom:35,
                padding:10,
                paddingHorizontal:30,
                borderRadius:25,
                justifyContent:'space-around',
                alignContent:'space-evenly',
                alignItems:'center',
                elevation:1,
                backgroundColor:'white',
                alignSelf:'center',
                }}>
                    <View style={{flexDirection:'row',gap:50}}>
                        <Pressable onPress={()=> router.push('/MemberApp/ClubGit')}>
                            <View style={{alignItems:'center'}}>
                                <Ionicons 
                                name="home-outline"
                                size={30}
                                />
                                <ThemeDeText variant="textmenu" color="text">Accueil</ThemeDeText>
                            </View>
                        </Pressable>
                        <Pressable onPress={()=> router.push('/MemberApp/Profil')}>
                            <View style={{alignItems:'center'}}>
                                <Ionicons 
                                name="person-outline"
                                size={30}
                                />
                                <ThemeDeText variant="textmenu" color="text">Profil</ThemeDeText>
                            </View>
                        </Pressable>
                        <Pressable onPress={()=> router.push('/MemberApp/Commission')}>
                            <View style={{alignItems:'center'}}>
                                <Ionicons 
                                name="accessibility-sharp"
                                size={30}
                                />
                                <ThemeDeText variant="textmenu" color="text">Commission</ThemeDeText>
                            </View>
                        </Pressable>
                        <Pressable onPress={()=> router.push('/MemberApp/Quette')}>
                            <View style={{alignItems:'center'}}>
                                <Ionicons 
                                name="game-controller"
                                size={30}
                                />
                                <ThemeDeText variant="textmenu" color="text">Quette</ThemeDeText>
                            </View>
                        </Pressable>
                    </View>
            </View>
        </Animated.View>
    )
}