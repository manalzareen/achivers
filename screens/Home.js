  import React, { Component } from 'react';
  import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Image,
    SafeAreaView,
    StatusBar,
    Platform,
    TouchableOpacity,
  } from 'react-native';
  import { RFValue } from 'react-native-responsive-fontsize';

  export default class Home extends Component {
    render() {
      return (
        <ImageBackground
          source={require('../assets/bg6.jpg')}
          style={styles.container}>
          <SafeAreaView style={styles.androidView} />
          <Text style={styles.titletext}>𝙰𝚌𝚑𝚒𝚎𝚟𝚎𝚛𝚜</Text>

        <Image
            source={require('../assets/logo.png')}
            style={styles.iconImage}></Image>

          <Text style={{alignSelf:'center' , color:'#FFFBEB',fontWeight:"normal",marginTop:20, fontSize:30}}>welcome to Achivers. </Text>
           
           <Text style={{alignSelf:'center' , color:'#FFFBEB',fontWeight:'bold',marginTop:270, fontSize:20}}>Live as If You Were to Die Tomorrow </Text>

           <Text style={{alignSelf:'center' , color:'#FFFBEB',fontWeight:'bold',marginTop:10,fontSize:20}}>Learn as If You Were to Live Forever</Text>
  
        <TouchableOpacity
        style={styles.getbox}
        onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={styles.gettext}>Get Started </Text>
        </TouchableOpacity>
      
        </ImageBackground>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
     flex:0.97,
     borderRadius:"3px",
     marginLeft:5,
     marginTop:30

    },
    androidView: {
      marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    },
    titletext: {
      textAlign: 'center',
      color: '#FAAB78',
      fontSize: RFValue(40),
      fontWeight: 'bold',
      marginTop: RFValue(35),
      marginRight: RFValue(-60),
    },
    getbox:{
      width: 230,
      height:60,
      backgroundColor: '#FFFBEB',
      borderRadius: RFValue(70)  , 
      marginLeft:70,
      marginTop:100
    },
    gettext:{
      marginTop:  RFValue(10),
      marginLeft: RFValue(40),
      fontSize: RFValue(20),
      color: '#FAAB78',
      fontWeight:"bold"
    },
    iconImage: {
      width: "22%",
      height: "11%",
      marginRight: RFValue(70),
      marginTop: RFValue(-60),
      marginLeft: RFValue(3),
      
      borderRadius:30
    },
  });
