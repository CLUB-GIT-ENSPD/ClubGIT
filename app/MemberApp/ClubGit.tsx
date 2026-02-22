import { View, Text} from 'react-native'
import React from 'react'
import PointDeQuete from '@/components/PoinDeQuete'
import Colors from '@/constants/Colors'
import Animated,{FadeInUp} from 'react-native-reanimated'
import ThemeDeText from '@/components/ThemeDeText'
import Navbar from '@/components/navbar'

export default function ClubGit() {

  const nom = "MJOH MASSANGO Adolphe Macdeauville"
  return (
    <View style={{flex:1}}>
      <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{
          margin:30,
          }}>
          <ThemeDeText variant='title' >
            Bienvenue
          </ThemeDeText>
          <ThemeDeText variant='title'>
            {nom}
          </ThemeDeText>
        </View>
        <Animated.View entering={FadeInUp.delay(300)} style={{
          alignItems:'center'
        }}>
          <View style={{
            width:165,
            height:165,
            backgroundColor:Colors.blueFonce,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:180,
            }}>
            <View style={{
              justifyContent:'center',
              alignItems:'center',
              width:160,
              height:160,
              backgroundColor:'white',
              borderRadius:180
              }}>
                <PointDeQuete pointDQ={1020} style={{fontSize:50,fontWeight:'400', color:Colors.blueFonce}}/>
                <ThemeDeText variant='pa'>Points d'activités</ThemeDeText>
            </View>
          </View>
        </Animated.View>
        <View style={{
          alignItems:'baseline',
        }}>
          <Text style={{
            color:Colors.textgray,
            fontSize:20,
            margin:40
          }}>
            Annonces : 
          </Text>
        </View>
      </View>
      <Navbar/>
    </View>
  )
}