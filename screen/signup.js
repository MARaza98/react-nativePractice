import { View, Text, TouchableOpacity , TextInput , StyleSheet , Dimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React,{useState} from 'react'


export default function SignUpScreen() {

  const navigationHook = useNavigation();

  const [name, setname] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setpassword] = useState("")

  const handleSubmit = ()=>{
    navigationHook.navigate("Data",{
      userName : name,
      userEmail : Email,
      userPassword : Password,
    })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <View>
        <Text>Please Enter your Email & Password </Text>
        <TextInput style={style.input} placeholder='Enter your Name ' value={name} onChangeText={(text)=>setname(text)}/>
        <TextInput style={style.input} placeholder='Enter your Email 'value={Email} onChangeText={(text)=>setEmail(text)}/>
        <TextInput style={style.input} placeholder='Enter your Password' secureTextEntry={true} value={Password} onChangeText={(text)=>setpassword(text)} />

        <TouchableOpacity  style={style.submitButton} onPress={()=> handleSubmit()}>

          <Text style={{textAlign:'center'}}>Submit</Text>

        </TouchableOpacity>
      </View>
    </View>
  )
}
const {width} = Dimensions.get('screen')
const style = StyleSheet.create({
  input:{
    width : width - 30,
    borderWidth: 2,
    marginTop: 20,
  },
  submitButton:{
    width : width - 30,
    backgroundColor: 'lightblue',
    padding: 10,
    marginTop: 20,
    borderRadius: 30,
  }
})
