import React from "react"
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import db from "../config"
import firebase from "firebase";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class SignUp extends React.Component {
     constructor() {
         super();
         this.state = {
             email: '',
             password: '',
             SPACING:10,
         }
     }
     
     

     
    
    render() {
        return (
            <KeyboardAwareScrollView style={{flex:0.7}} contentContainerStyle={{alignContent:'center',alignSelf:'center',width:'100%'}}>

            <ImageBackground source={require('../assets/bg2.jpg')} >
            

           

            <View style={{ backgroundColor:'white', marginLeft:10,marginRight:10, height:'45%', width:'95%',borderRadius:30, marginTop:'110%',alignSelf:'center'}}>
          
                    

                    <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: '5%', marginTop: '10%', color: '#2F86A6' }}>SignIn</Text>
                    <View style={{ flexDirection: 'row', marginTop: '10%', alignSelf: 'center', width: '80%', justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome5 name="at" size={24} color="#FFC000" />

                        <TextInput style={{ width: '90%', height: 30, borderBottomWidth: 2, borderBottomColor: '#2F86A6', border: 2, marginLeft: '5%', paddingLeft: 20 }} placeholder='Enter Email Id' onChangeText={(val) => { this.setState({ email: val }); }} />
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: '5%', alignSelf: 'center', width: '80%', justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name="lock-open" size={24} color="#FFC000" />

                        <TextInput style={{ width: '90%', height: 30, borderBottomWidth: 2, borderBottomColor: '#2F86A6', border: 2, marginLeft: '5%', paddingLeft: 20 }}  placeholder='Password' onChangeText={(val) => { this.setState({ password: val }); }}/>
                        

                        
                    </View>



                    <TouchableOpacity style={{ width: '90%', height: 40, backgroundColor: '#2F86A6', justifyContent: 'center', alignItems: 'center', borderRadius: 10, alignSelf: 'center', marginTop: '10%' }} onPress={() => { this.signUp() }}>
                        <Text style={{ fontWeight: 'bold', color: '#FFC000', fontSize: 20 }}>SignIn</Text>
                    </TouchableOpacity>
            
                    </View>
                
            </ImageBackground>
            </KeyboardAwareScrollView>
        )
    }
}
