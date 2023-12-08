// import React from 'react'
// import { View, Text } from 'react-native'

// export default function App() {
//   return (
//     <View style={{flex: 1}}>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text style={{ fontSize: 45, fontWeight: 'bold', color: 'red' }}>
//           Hello World
//         </Text>
//       </View>
//     </View>
//   )
// }

// import { View, Text, StatusBar } from 'react-native'
// import React from 'react'
// import {style} from "./style"

// export default function App() {
//   return (
//     <View style={style.mainContainer}>
//     <StatusBar backgroundColor={'blue'} />
//       <Text style={style.textColer}>Ahmed Raza</Text>
//     </View>
// )
// }

// import { View, Text, Button  } from 'react-native'
// import React,{useState} from 'react'
// import {style} from "./style"

// export default function App() {
  
//   const [number, setnumber] = useState(0)

//   const incremet = () =>{
    
//       setnumber(number + 1)      

//   }

//   const decrement = () =>{
//     if (number > 0) {
//       setnumber(number - 1)
//     }

//   }

//   return (
//     <View style={style.mainContainer}>
//       <Button onPress={decrement} title='-'/>
//       <Text style={style.textColer}>{number}</Text>
//       <Button onPress={incremet} title='+'/>
//      </View>
//   )
// } 

// import { View, Text, Button , TextInput } from 'react-native'
// import React,{useState} from 'react'
// import {styleInput} from "./style"


// export default function App() {

//   const [inputBoxValue, setinputBoxValue] = useState('india');

//   return (
//     <View>
//       <TextInput style={styleInput.inputBox} value={inputBoxValue} onChangeText={value=> setinputBoxValue(value)}/>
//       <Text>{inputBoxValue}</Text>
//     </View>
//   )
// }

// import React , {useState} from 'react'
// import { View, Text } from 'react-native'
// import { styles } from './style';

// export default function App() {

// const [data, setData] = useState([
//     {id: 1 , name: 'Ahmed'},
//     {id: 2 , name: 'Raza'},
//     {id: 3 , name: 'Muhammad'},
//     {id: 4 , name: 'Muzammil'},
//     {id: 5 , name: 'Hamza'},
//     {id: 6 , name: 'Ali'},
// ]);

//   return (
//     <View style={styles.container}>
//       <Text>
//         {data.map((listData , index) => {
//                 console.log(listData)
//                 return(
//                     <View key={listData.id}>
//                         <Text style={styles.textStyle}>{listData.name}</Text>
//                     </View>
//                 );
//             })
//         }
//       </Text>
//     </View>
//   );
// }




// import React , {useState} from 'react'
// import { View, Text , FlatList} from 'react-native'
// import { styles } from './style';

// export default function App() {

// const [data, setData] = useState([
//     {id: 1 , name: 'Ahmed'},
//     {id: 2 , name: 'Raza'},
//     {id: 3 , name: 'Muhammad'},
//     {id: 4 , name: 'Muzammil'},
//     {id: 5 , name: 'Hamza'},
//     {id: 6 , name: 'Ali'},
//     {id: 7 , name: 'my'},
//     {id: 8 , name: 'name'},
//     {id: 9 , name: 'is'},
//     {id: 10 , name: 'syco'},

// ]);

// return(
//   <View style={styles.container}>
//     <FlatList
//       data = {data}
//       renderItem = {({item}) => {
//         return(
//           <Text style={styles.textStyle}>{item.name}</Text>
//         )
//       }}
//      />
//   </View>
// )

// }



// import React , {useState} from 'react'
// import { View, Text , FlatList , TouchableOpacity} from 'react-native'
// import { styles } from './style';

// export default function App() {

// const [data, setData] = useState([
//     {id: 1 , name: 'Ahmed'},
//     {id: 2 , name: 'Raza'},
//     {id: 3 , name: 'Muhammad'},
//     {id: 4 , name: 'Muzammil'},
//     {id: 5 , name: 'Hamza'},
//     {id: 6 , name: 'Ali'},
//     {id: 7 , name: 'my'},
//     {id: 8 , name: 'name'},
//     {id: 9 , name: 'is'},
//     {id: 10 , name: 'syco'},

// ]);

// const clickHandel = oldname => {
//   setData(oldData =>{
//     return oldData.filter(newData =>{
//       if (newData.name != oldname) {
//         return newData
//       }
//     })
//   })
// }

// return(
//   <View style={styles.container}>
//     <FlatList
//       data = {data}
//       renderItem = {({item}) => {
//         return(
//           <TouchableOpacity onPress={() => clickHandel (item.name)}>

//           <Text style={styles.textStyle}>{item.name}</Text>

//           </TouchableOpacity>
//         )
//       }}
//      />
//   </View>
// )

// }


// import React, {useEffect , useState} from 'react'
// import { View, Text , ScrollView , Image} from 'react-native'
// import { fakeApi } from './fakeApi'
// import axios from 'axios'
// import { style } from './style'
// export default function App() {

//   const [postData, setPostData] = useState([])

//   useEffect(() => {
//     fakeApiHandel()
  
//     return () => {
//       second
//     }
//   }, [])

//   const fakeApiHandel = async() =>{
//     try {
//       const response = await axios.get(fakeApi)

//       setPostData(response.data)

//     } catch (error) {
//       console.log(error)
//     }
//   }
  

//   return (
//     <View style={style.container}>
//       <ScrollView>
//       {postData.map((list,index) =>{
//         console.log(list)
//         return(
//           <View style={style.cardContainer  } key={list.id}>
//             <Image style={style.cardImage} source={{uri:list.url}}/>
//             <Text style={style.cardText}>{list.title}</Text>
//           </View>
//         )
//       })}
//       </ScrollView>
//     </View>
//   )
// }


// In App.js in a new project

// import React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // screen import links
// import homeScreen from './screen/home';
// import aboutUs from './screen/aboutUs';


// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={homeScreen} />
//         <Stack.Screen name='AboutUs' component={aboutUs} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;




// import React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // screen import links
// import homeScreen from './screen/home';
// import infoData from './infoData';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={homeScreen} />
//         <Stack.Screen name='Data' component={infoData} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;





import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// screen import links
// import homeScreen from './screen/home';
import Login from './screen/login';
// import SignUpScreen from './screen/signup';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="homeScreen" component={homeScreen} /> */}
        {/* <Stack.Screen name="SignUpScreen" component={SignUpScreen} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

