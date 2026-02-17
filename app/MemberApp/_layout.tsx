import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { Image, View } from "react-native";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="ClubGit"
      options={{
        headerBackVisible: false,
        animation: 'flip',
        animationDuration: 5000,
        headerStyle:{
          backgroundColor:Colors.blueFonce,
        },
        headerTintColor: Colors.textwhite,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        headerLeft:()=>(
          <Image source={require('../../assets/images/logo_blanc.png')} style={{width:40, height:40, margin:10}} />
        ),
        headerRight: () => (
          <View style={{ flexDirection: 'row', marginRight: 15, marginTop: 20 }}>
            <Ionicons name="notifications-outline" size={24} color="white" style={{ marginRight: 15 }} />
            <Ionicons name="person-circle-outline" size={26} color="white" />
          </View>
        ),
      }}
    />
  </Stack>;
}
