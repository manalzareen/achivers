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
     signUp=()=>{
        if(this.state.email!="" && this.state.password!="")
        {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then((userCredential) => {
    
   db.collection('users').add({email:this.state.email,password:this.state.password})
    alert("Welcome to Achivers");
    this.props.navigation.replace("Home2")
    
  })
  .catch((error) => {
    var errorMessage = error.message;
    alert(errorMessage);
    
  });
}
else{
    alert("Please fill in both the fields");//FormValidator
}
}

     

     
    
    render() {
        return (
            <KeyboardAwareScrollView style={{flex:0.7}} contentContainerStyle={{alignContent:'center',alignSelf:'center',width:'100%'}}>

            <ImageBackground source={require('../assets/bg3.jpg')} >
            

           

            <View style={{ backgroundColor:'white', marginLeft:10,marginRight:10, height:'45%', width:'95%',borderRadius:30, marginTop:'110%',alignSelf:'center'}}>
          
                    

                    <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: '5%', marginTop: '10%', color: '#2F86A6' }}>SignUp</Text>
                    <View style={{ flexDirection: 'row', marginTop: '10%', alignSelf: 'center', width: '80%', justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome5 name="at" size={24} color="#FFC000" />

                        <TextInput style={{ width: '90%', height: 30, borderBottomWidth: 2, borderBottomColor: '#2F86A6', border: 2, marginLeft: '5%', paddingLeft: 20 }} placeholder='Enter Email Id' onChangeText={(val) => { this.setState({ email: val }); }} />
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: '5%', alignSelf: 'center', width: '80%', justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name="lock-open" size={24} color="#FFC000" />

                        <TextInput style={{ width: '90%', height: 30, borderBottomWidth: 2, borderBottomColor: '#2F86A6', border: 2, marginLeft: '5%', paddingLeft: 20 }}  placeholder='Password' onChangeText={(val) => { this.setState({ password: val }); }}/>
                        

                        
                    </View>



                    <TouchableOpacity style={{ width: '90%', height: 40, backgroundColor: '#2F86A6', justifyContent: 'center', alignItems: 'center', borderRadius: 10, alignSelf: 'center', marginTop: '10%' }} onPress={() => { this.signUp() }}>
                        <Text style={{ fontWeight: 'bold', color: '#FFC000', fontSize: 20 }}>SignUp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={{alignSelf:'center',marginTop:15}} onPress={() => { this.props.navigation.navigate('SignIn') }}>
                    <Text style={{ fontWeight: 'bold', color: '#2F86A6', fontSize: 15,borderRadius:10 }} >Already an user? Sign in</Text>
                    </TouchableOpacity>
            
                    </View>
                
            </ImageBackground>
            </KeyboardAwareScrollView>
        )
    }
}
