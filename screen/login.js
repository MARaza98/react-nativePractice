
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// import React,{useState} from 'react'


export default function LoginScreen() {

    const navigationHook = useNavigation();

    const handleSignup = () => {
        navigationHook.navigate('SignUpScreen')
    }

    const handleSubmit = () => {
        navigationHook.navigate('homeScreen')
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <View>
                <Text>Please Enter your Email & Password </Text>
                <TextInput style={style.input} placeholder='Enter your Name ' />
                <TextInput style={style.input} placeholder='Enter your Email ' inputMode='email' />
                <TextInput style={style.input} placeholder='Enter your Password' secureTextEntry={true} />

                <TouchableOpacity style={style.submitButton} onPress={() => handleSubmit()}>

                    <Text style={{ textAlign: 'center' }}>Submit</Text>

                </TouchableOpacity>

                <TouchableOpacity style={style.SignUpButton} onPress={() => handleSignup()} >

                    <Text style={{ textAlign: 'center' }}>Signup</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}
const { width } = Dimensions.get('screen')
const style = StyleSheet.create({
    input: {
        width: width - 30,
        borderWidth: 2,
        marginTop: 20,
    },
    submitButton: {
        width: width - 30,
        backgroundColor: 'lightblue',
        padding: 10,
        marginTop: 20,
        borderRadius: 30,
    },
    SignUpButton: {
        width: width - 120,
        backgroundColor: 'lightgreen',
        padding: 10,
        marginTop: 20,
        borderRadius: 30,
        alignSelf:'center'
    }
})