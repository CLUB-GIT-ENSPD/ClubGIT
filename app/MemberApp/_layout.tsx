import Colors from "@/constants/Colors";
import { router, Stack } from "expo-router";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, View } from "react-native";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerBackVisible: false,
        animation: 'fade',
        animationDuration: 1000,
        headerStyle:{
          backgroundColor:Colors.blueFonce,
        },
        headerTintColor: Colors.textwhite,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        headerLeft:()=>(
          <Pressable onPress={() => router.push('/MemberApp/ClubGit')}>
            <Image source={require('../../assets/images/logo_blanc.png')} style={{width:40, height:40, margin:10}}/>
          </Pressable>
        ),
        headerRight: () => (
          <View style={{ flexDirection: 'row', marginRight: 15, marginTop: 20 }}>
            <Ionicons name="notifications-outline" size={24} color="white" style={{ marginRight: 15 }} />
            <Ionicons name="person-circle-outline" size={26} color="white" onPress={() => router.push('/MemberApp/Profil')} />
          </View>
        ),
  }}>
  </Stack>;
}
