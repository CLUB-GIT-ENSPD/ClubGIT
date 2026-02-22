import {Text, TextProps,StyleSheet } from 'react-native'
import Colors from '@/constants/Colors'
import Animated from 'react-native-reanimated';
import React from 'react'

const typo = StyleSheet.create({
  title:{
    fontSize:25,
    fontWeight:'bold'
  },
  h1 :{
    fontSize: 30,
    fontWeight:'bold',
  },
  h2 :{
    fontSize:15,
    fontWeight:'bold',
  },
  h3:{
    fontSize:10,
    fontWeight:'medium',
  },
  pa:{
    fontSize:13,
  },
  textmenu:{
    fontSize:10,
    fontWeight:'bold',
  }
})

type Props = TextProps & {
  variant? :  keyof typeof typo,
  color?: keyof typeof Colors,
} 

export default function ThemeDeText({variant, color, ...rest}: Props) {
  return (
      <Animated.Text style={[
        typo[variant ?? 'h3'],
        {color:Colors[color ?? 'text']}
      ]} {...rest}/>
  )
}