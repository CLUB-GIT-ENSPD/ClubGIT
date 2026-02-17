import { Pressable, StyleSheet,Text, View } from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import Styles from "./Styles";
import ThemeDeText from "@/components/ThemeDeText";
import Colors from "@/constants/Colors";
import React from "react";
import { router } from "expo-router";

export default function Index() {
  return (
    <Animated.View entering={FadeInUp}
    style={Styles.container}>
      <View style={Styles.container}>
      <View>
        <Animated.Image
          entering={FadeInDown.delay(200)}
          source={require('../assets/images/logo_blanc.png')}
          style={{
            width:200,
            height:200,
            marginBottom:20,
          }}
        />
      </View>
        <ThemeDeText variant="h1" color="textwhite">Bienvenue au ClubGit</ThemeDeText>
        <Pressable onPress={()=> router.push('/MemberApp/ClubGit')}>
          <Animated.View
          entering={FadeInUp.delay(300)}
          style={{
            backgroundColor:'white',
            width:150,
            justifyContent:'center',
            alignItems:'center',
            margin:10,
            padding:10,
            borderRadius:10,
          }}>
            <ThemeDeText variant="h2" color="blueFonce">Connecte-toi</ThemeDeText>
          </Animated.View>
        </Pressable>
      </View>
    </Animated.View>
  );
}
