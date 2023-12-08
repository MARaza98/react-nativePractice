// import { View, Text, TouchableOpacity } from 'react-native'
// import React from 'react'

// export default function HomeScreen({navigation}) {
//   function handelNavigation(screenname) {
//     console.log('debug > in handleNavigation')
//     navigation.navigate(screenname);

//   }
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

//       <View>
//         <TouchableOpacity onPress={()=>handelNavigation('AboutUs')} style={{backgroundColor:'green', padding: 20 }}>

//           <Text style={{color:'white'}}>About Us</Text>

//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// }

// import { View, Text, TouchableOpacity , TextInput , StyleSheet , Dimensions} from 'react-native'
// import React,{useState} from 'react'

// export default function HomeScreen({navigation}) {

//   const [name, setname] = useState("")
//   const [Email, setEmail] = useState("")
//   const [Password, setpassword] = useState("")

//   const handleSubmit = ()=>{
//     navigation.navigate("Data",{
//       userName : name,
//       userEmail : Email,
//       userPassword : Password,
//     })
//   }

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

//       <View>
//         <Text>Please Enter your Email & Password </Text>
//         <TextInput style={style.input} placeholder='Enter your Name ' value={name} onChangeText={(text)=>setname(text)}/>
//         <TextInput style={style.input} placeholder='Enter your Email 'value={Email} onChangeText={(text)=>setEmail(text)}/>
//         <TextInput style={style.input} placeholder='Enter your Password' secureTextEntry={true} value={Password} onChangeText={(text)=>setpassword(text)} />

//         <TouchableOpacity  style={style.submitButton} onPress={()=> handleSubmit()}>

//           <Text style={{textAlign:'center'}}>Submit</Text>

//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// }
// const {width} = Dimensions.get('screen')
// const style = StyleSheet.create({
//   input:{
//     width : width - 30,
//     borderWidth: 2,
//     marginTop: 20,
//   },
//   submitButton:{
//     width : width - 30,
//     backgroundColor: 'lightblue',
//     padding: 10,
//     marginTop: 20,
//     borderRadius: 30,
//   }
// })



// import { View, Text, TouchableOpacity , TextInput , StyleSheet , Dimensions} from 'react-native'
// import { useNavigation } from '@react-navigation/native'
// import React,{useState} from 'react'


// export default function HomeScreen() {

//   const navigationHook = useNavigation();

//   const [name, setname] = useState("")
//   const [Email, setEmail] = useState("")
//   const [Password, setpassword] = useState("")

//   const handleSubmit = ()=>{
//     navigationHook.navigate("Data",{
//       userName : name,
//       userEmail : Email,
//       userPassword : Password,
//     })
//   }

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

//       <View>
//         <Text>Please Enter your Email & Password </Text>
//         <TextInput style={style.input} placeholder='Enter your Name ' value={name} onChangeText={(text)=>setname(text)}/>
//         <TextInput style={style.input} placeholder='Enter your Email 'value={Email} onChangeText={(text)=>setEmail(text)}/>
//         <TextInput style={style.input} placeholder='Enter your Password' secureTextEntry={true} value={Password} onChangeText={(text)=>setpassword(text)} />

//         <TouchableOpacity  style={style.submitButton} onPress={()=> handleSubmit()}>

//           <Text style={{textAlign:'center'}}>Submit</Text>

//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// }
// const {width} = Dimensions.get('screen')
// const style = StyleSheet.create({
//   input:{
//     width : width - 30,
//     borderWidth: 2,
//     marginTop: 20,
//   },
//   submitButton:{
//     width : width - 30,
//     backgroundColor: 'lightblue',
//     padding: 10,
//     marginTop: 20,
//     borderRadius: 30,
//   }
// })



// import { View, Text } from 'react-native'
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons'

// const Tab = createBottomTabNavigator();

// // Improt screens 

// import mainpage from './mainpage'
// import setting from './setting'
// import contact from './contact'

// export default function Home() {
//   return (
//         <Tab.Navigator>
//       <Tab.Screen name="Mainpage" component={mainpage}  options={{tabBarIcon:()=> <PhotoNavbar name='home' />}}/>
//       <Tab.Screen name="Settings" component={setting} options={{tabBarIcon:()=><PhotoNavbar name='settings'/>}}/>
//       <Tab.Screen name="contact" component={contact} options={{tabBarIcon:()=><PhotoNavbar name='call-outline'/>}} />

//     </Tab.Navigator>
//   );

// }

// const PhotoNavbar = props =>{
//   return <Ionicons name={props.name} size={25} />
//  }




// import React from 'react'
// import { createDrawerNavigator } from '@react-navigation/drawer';
// // import Ionicons from 'react-native-vector-icons/Ionicons'

// const Drawer = createDrawerNavigator();


// // Improt screens 

// import mainpage from './mainpage'
// import setting from './setting'
// import contact from './contact'

// export default function Home() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="mainpage" component={mainpage} />
      // <Drawer.Screen name="setting" component={setting} /> 
      // <Drawer.Screen name="contact" component={contact} /> 
//     </Drawer.Navigator>
//   );

// }

// const PhotoNavbar = props => {
//   return <Ionicons name={props.name} size={25} />
// }


// import React from 'react'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons'

// const Tab = createMaterialBottomTabNavigator();

// import mainpage from './mainpage'
// import setting from './setting'
// import contact from './contact'

// export default function Home() {
//   return (
//     <Tab.Navigator barStyle={{ backgroundColor: '#694fad' }}   activeColor="white"   initialRouteName="Home" shifting={'true'}>
//     <Tab.Screen name="mainpage" component={mainpage} options={{tabBarIcon:() => <PhotoNavbar name='home' /> ,
//      tabBarColor:'red'}}/>
//     <Tab.Screen name="setting" component={setting} options={{tabBarIcon:() => <PhotoNavbar name='settings' />,
//      tabBarColor:'gray'}}/>
//     <Tab.Screen name="contact" component={contact} options={{tabBarIcon:() => <PhotoNavbar name='call-outline' />,
//      tabBarColor:'pink'}}/>
//   </Tab.Navigator>
// );
  
// }

// const PhotoNavbar = props => {
//   return <Ionicons name={props.name} size={20}/>
// }



// import React from 'react'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons'

// const Tab = createMaterialTopTabNavigator();

// import mainpage from './mainpage'
// import setting from './setting'
// import contact from './contact'
// export default function Home() {
//   return (
//     <Tab.Navigator>
//     <Tab.Screen name="mainpage" component={mainpage} options={{tabBarIcon:() => <PhotoNavbar name='home' />}} />
//     <Tab.Screen name="Settings" component={setting} options={{tabBarIcon:() => <PhotoNavbar name='settings' />}}/>
//     <Tab.Screen name="contact" component={contact} options={{tabBarIcon:() => <PhotoNavbar name='call-outline' />}}/>

//   </Tab.Navigator>
//   )
// }

// const PhotoNavbar = props => {
//   return <Ionicons name={props.name} size={20}/>
// }

//  Async storage start 

import { View, Text } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View>
      <Text>home</Text>
    </View>
  )
}

