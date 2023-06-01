// import { View, Text } from 'react-native'
// import React from 'react'

// export default function InfoData({route,navigation}) {
//     console.log(route.params)
//   return (
//     <View style={{flex: 1, justifyContent:'center',alignItems:'center'}}>
//       <Text>Name : {route.params.userName}</Text>
//       <Text>Email : {route.params.userEmail}</Text>
//       <Text>Password : {route.params.userPassword}</Text>
//     </View>
//   )
// }



import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function InfoData() {
    // console.log(route.params)

const route = useRoute()

  return (
    <View style={{flex: 1, justifyContent:'center',alignItems:'center'}}>
      <Text>Name : {route.params.userName}</Text>
      <Text>Email : {route.params.userEmail}</Text>
      <Text>Password : {route.params.userPassword}</Text>
    </View>
  )
}