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
  TextInput,
  Alert
 } from 'react-native';
 import firebase from "firebase"
 import { RFValue } from 'react-native-responsive-fontsize';
export default class Home extends Component {
  constructor(){
    super()
    this.state={
     sdetails:""
    }
  }
  handleSearch = async (name,classGrade) =>{
      let searchkey=name.toUpperCase()+classGrade;
      console.log(searchkey)

      let studentname;
      await firebase
            .database()
            .ref( "/reports/"+searchkey)
            .on("value",(snapshot)=>{
              studentname=snapshot.val()
              this.setState({sdetails:studentname})
            })

  }

  



  render() {
    return (
      <ImageBackground
        source={require('../assets/bg4.jpg')}
        style={styles.container}>
        <Text style={styles.titletext}>𝙰𝚌𝚑𝚒𝚎𝚟𝚎𝚛𝚜</Text>
        <SafeAreaView style={styles.androidView} />

        <Image
          source={require('../assets/logo2.png')}
          style={styles.iconImage}></Image>
          <View>
            <TouchableOpacity onPress={() =>
            this.props.navigation.navigate("Home")}>
            <Image 
            source ={require("../assets/arrowImg.png")}
            style ={{
                      width:70,
                      height:70,
                      marginLeft:-5,
                      marginTop:-40,
                      borderColor:"black", 
                    }}>
              </Image>
              </TouchableOpacity>
            </View>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.input1}
            onChangeText={(name) => this.setState({ name })}
            placeholder={'Name'}
            placeholderTextColor={'white'}
            placeholderColor={'yellow'}
          />
        </View>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.input1}
            onChangeText={(classGrade) => this.setState({ classGrade})}
            placeholder={'Class'}
            placeholderTextColor={'white'}
            placeholderColor={'blue'}
          />
        </View>
        
        <TouchableOpacity
          style={styles.routeButton} 
          onPress={()=>this.props.navigation.navigate("Search",{name:this.state.name,
          classGrade:this.state.classGrade
          
          })}>
          <Text style={styles.routeText}>𝓢𝓾𝓫𝓶𝓲𝓽</Text>
        </TouchableOpacity>
       
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  androidView: {
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
  titletext: {
    textAlign: 'center',
    color: '#FFF7BC',
    fontSize: RFValue(60),
    fontWeight: 'bold',
    marginTop: RFValue(28),
    marginLeft: RFValue(25),
  },
  iconImage: {
    width: RFValue(130),
    height: RFValue(130),
    marginRight: RFValue(60),
    marginTop: RFValue(-90),
    marginLeft:RFValue(-25) ,
  },
  input1: {
    width:  RFValue(200),
    height: RFValue(100),
    backgroundcolor: '#F47C7C',
    color: 'white',
    borderWidth: RFValue(3),
    borderRadius: RFValue(25),
    borderColor: '#FFE69A',
    textAlign:"center",
    marginTop: RFValue(5),
     marginLeft:RFValue(1)
  },
  textContainer: {
    width: RFValue(200),
    height: RFValue(75),
    marginTop: RFValue(40),
    marginLeft: RFValue(130),
    backgroundColor: "#F47C7C",
    borderRadius: RFValue(25),
    borderColor: '#FFE69A',
  },
  routeButton: {
    width: RFValue(170),
    height: RFValue(75),
    backgroundColor: '#FFF7BC',
    marginLeft: RFValue(140),
    marginRight:RFValue(130),
    marginTop: RFValue(30),
    borderRadius: RFValue(70),
  },
  routeText: {
    marginTop: RFValue(17),
    marginLeft: RFValue(30),
    fontSize:RFValue(25),
    color: '#E05D5D',
  },
});
