import React, {useEffect, useState} from 'react'
import { View, 
    Animated
} from 'react-native'

const FadeView = (props) => {
    const fadeAnim = useState(new Animated.Value(props.initial))[0];

    // if(props.fade){
    //     Animated.timing(
    //         fadeAnim,
    //         {
    //           toValue: 1,
    //           duration: 1000,
    //         }
    //       ).start();
    //     }

    React.useEffect(() => {
        Animated.timing(
          fadeAnim,
          {
            toValue: props.final,
            duration: 800,
            useNativeDriver: true,
          }
        ).start();
      }, [fadeAnim])

    return(
        <Animated.View style={{ flex: 1,
            opacity: fadeAnim}}
        >
            {props.children}
        </Animated.View>

    )

}

export default FadeView;