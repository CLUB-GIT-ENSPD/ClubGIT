import { Keyboard, KeyboardAvoidingView, Pressable, TextInput, TouchableWithoutFeedback, View } from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import Styles from "./Styles";
import ThemeDeText from "@/components/ThemeDeText";
import React, { useState } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export default function Index() {

  const [show,hide]=useState(true)
  return (
    <Animated.View entering={FadeInUp} style={Styles.container}>
      <View style={Styles.container}>
      <View>
        <Animated.Image entering={FadeInDown.delay(100)}
          source={require('../assets/images/logo_blanc.png')}
          style={{
            width:200,
            height:200,
            marginBottom:20,
          }}
        />
      </View>
        <ThemeDeText variant="h1" color="textwhite">Bienvenue au ClubGit</ThemeDeText>
          <KeyboardAvoidingView behavior="padding">
            <Animated.View entering={FadeInUp.delay(200)} style={Styles.input}>
              <TextInput placeholder="Nom ou Matricule :"/>
            </Animated.View>
            <Animated.View entering={FadeInUp.delay(200)} style={[Styles.input ,{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
              <TextInput placeholder="Password :" secureTextEntry={show}/>
              <Ionicons name={show ? "eye-off":"eye"}
                size={30}
                color={Colors.textgray}
                onPress={()=> hide(!show)}
              />
            </Animated.View>
          </KeyboardAvoidingView>
        <Pressable onPress={()=> router.push('/MemberApp/ClubGit')}>
          <Animated.View
          entering={FadeInUp.delay(300)}
          style={Styles.button}>
            <ThemeDeText variant="h2" color="blueFonce">Connecte-toi</ThemeDeText>
          </Animated.View>
        </Pressable>
      </View>
    </Animated.View>
  );
}
