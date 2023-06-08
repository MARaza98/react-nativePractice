import { View, Text ,TouchableOpacity , StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Setting() {
  const navigationHook = useNavigation();

  const handleLogOut = () => {
    navigationHook.navigate('Login')
}
  return (
    <View style={{justifyContent:'center',flex: 1, alignItems:'center'}}> 
      <Text>Main page</Text>
      <TouchableOpacity style={style.logoutbutton}onPress={() => handleLogOut()}> 
        <Text>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  logoutbutton: {
    backgroundColor:'lightgreen',
    paddingTop:10,
    paddingBottom:10,
    paddingRight:30,
    paddingLeft:30,
    borderRadius:30,
    marginTop:15
  }
})