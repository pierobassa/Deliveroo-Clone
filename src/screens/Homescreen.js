import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native';
import { header1 } from '../../assets/header';

const Homescreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => { /* As soon as the screen mounts then do this */
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    /* Makes sure it's visible in the Safe area of the phone (No notch for example) on any phone  */
    <SafeAreaView> 
      <Text>
        {/* HEADER */}
        <View>
          <Image source={header1} className="h-7 w-7 bg-gray-300 " />
        </View>
      </Text>
    </SafeAreaView>
  )
}

export default Homescreen