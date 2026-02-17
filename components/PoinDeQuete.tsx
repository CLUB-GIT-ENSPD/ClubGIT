import React from "react";
import Animated, { FadeIn } from "react-native-reanimated";
import { View ,Text, TextProps} from "react-native";

type Props = TextProps &{
    pointDQ?:number
}

export default function PointDeQuete({pointDQ,...rest} : Props){
    return(
        <Animated.View>
            <View>
                <Animated.Text entering={FadeIn} {...rest}>
                    {pointDQ}
                </Animated.Text>
            </View>
        </Animated.View>
    )
}