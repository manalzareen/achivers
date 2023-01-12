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
    ScrollView,
    Alert,
    FlatList,
  } from 'react-native';

  import { RFValue } from 'react-native-responsive-fontsize';
  import firebase from 'firebase';

  export default class CreateReport extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fontsLoaded: false,
        previewImage: 'image_1',
        dropdownHeight: 40,
        light_theme: true,
      };
    }
    async addReport() {
      if (this.state.name && this.state.classGrade && this.state.section) {
        var today = new Date();
        var dd = String(today.getDate());
        var mm = String(today.getMonth() + 1); //January is 0!
        var yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;

        let cardData = {
          name: this.state.name.toUpperCase(),
          classGrade: this.state.classGrade,
          section: this.state.section,

          engmarks:this.state.engmarks,
          mathmarks:this.state.mathmarks,
          sciencemarks:this.state.sciencemarks,
          socialmarks:this.state.socialmarks,
          hindimarks:this.state.hindimarks,
          telugumarks:this.state.telugumarks,

          engmarks2:this.state.engmarks2,
          mathmarks2:this.state.mathmarks2,
          sciencemarks2:this.state.sciencemarks2,
          socialmarks2:this.state.socialmarks2,
          hindimarks2:this.state.hindimarks2,
          telugumarks2:this.state.telugumarks2,

          //faAverage:this.state.faAverage,
         // absence:this.state.absence,
          attendence:this.state.attendence,

          created_on : today
        };
        var combine = this.state.name.toUpperCase() + this.state.classGrade;
        console.log(combine);
        await firebase
          .database()
          .ref('/reports/'+combine)
          .set(cardData)
          .then(function (snapshot) {});

        console.log(cardData);
        this.props.navigation.navigate('CrFeed');
      }
      //alert(title, message?, buttons?, options?)
      // cancelable : Defines if alert can be dismissed by tapping outside of the alert box.
      else {
        alert('All fields are required !!!');
        Alert.alert(
          'Error',
          'All fields are required !!!',
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false }
        );
      }
    }
    

    render() {
      return (
        <ImageBackground
          source={require('../assets/bg3.jpg')}
          style={styles.container}>
          <SafeAreaView style={styles.androidView} />
          <Text style={styles.titletext}>𝙰𝚌𝚑𝚒𝚎𝚟𝚎𝚛𝚜</Text>
          <Image
            source={require('../assets/logo2.png')}
            style={styles.iconImage}></Image>

            <View>
              <TouchableOpacity onPress={() =>
              this.props.navigation.navigate("CrFeed")}>
              <Image 
              source ={require("../assets/arrowImg.png")}
              style ={{
                        width:70,
                        height:70,
                        marginLeft:-10,
                        marginTop:-45,
                        borderColor:"black", 
                      }}>
                </Image>
                </TouchableOpacity>
              </View>

          <ScrollView vertical={true}>
            <View style={styles.baseReport}>
              <Text
                style={{
                  color: '#99A799',
                  fontSize: 24,
                  marginLeft: 90,
                  marginBottom: 40,
                }}>
                𝓡𝓮𝓹𝓸𝓻𝓽 𝓒𝓪𝓻𝓭
              </Text>

              <View
                style={{
                  backgroundColor: '#E4E9BE',
                  borderRadius: 20,
                  width: 130,
                  height: 50,
                  marginTop: -10,
                }}>
                <TextInput
                  style={styles.nameInput}
                  onChangeText={(name) => this.setState({ name })}
                  placeholder={'𝓝𝓪𝓶𝓮'}
                  placeholderTextColor={'#E6BA95'}
                  placeholderColor={'#E6BA95'}
                />
              </View>

              <View
                style={{
                  backgroundColor: '#E4E9BE',
                  borderRadius: 20,
                  width: 80,
                  height: 50,
                  marginTop: -47,
                  marginLeft: 140,
                }}>
                <TextInput
                  style={styles.classInput}
                  onChangeText={(classGrade) => this.setState({ classGrade })}
                  placeholder={'𝓒𝓵𝓪𝓼𝓼'}
                  placeholderTextColor={'#E6BA95'}
                  placeholderColor={'#E6BA95'}
                />
              </View>

              <View
                style={{
                  backgroundColor: '#E4E9BE',
                  borderRadius: 20,
                  width: 80,
                  height: 50,
                  marginTop: -49,
                  marginLeft: 230,
                }}>
                <TextInput
                  style={styles.secInput}
                  onChangeText={(section) => this.setState({ section })}
                  placeholder={'𝓼𝓮𝓬'}
                  placeholderTextColor={'#E6BA95'}
                  placeholderColor={'#E6BA95'}
                />
              </View>
              <View style={styles.subjects}>
                <Text
                  style={{
                    marginTop: 10,
                    color: '#99A799',
                    fontSize: 15,
                    marginLeft: 10,
                  }}>
                  𝓢𝓾𝓫𝓳𝓮𝓬𝓽𝓼
                </Text>

                <Text style={styles.subtext}> 𝓔𝓷𝓰𝓵𝓲𝓼𝓱 </Text>

                <Text style={styles.subtext}> 𝓜𝓪𝓽𝓱 </Text>
                <Text style={styles.subtext}> 𝓢𝓬𝓲𝓮𝓷𝓬𝓮 </Text>
                <Text style={styles.subtext}> 𝓢𝓸𝓬𝓲𝓪𝓵 </Text>
                <Text style={styles.subtext}> 𝓗𝓲𝓷𝓭𝓲 </Text>
                <Text style={styles.subtext}> 𝓣𝓮𝓵𝓾𝓰𝓾 </Text>
              </View>

              <View style={styles.fa1}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#99A799',
                    marginTop: 10,
                  }}>
                  𝓕𝓪1
                </Text>

                <TextInput
                  style={styles.fa1input}
                  onChangeText={(engmarks) => this.setState({ engmarks })}
                  placeholder={''}
                  placeholderColor={'#8E806A'}
                  placeholderTextColor={"#8E806A"}
                />

              <TextInput
                  style={styles.fa1input}
                  onChangeText={(mathmarks) => this.setState({ mathmarks })}
                  placeholder={''}
                  placeholderColor={'#8E806A'}
                  placeholderTextColor={'#8E806A'}
                />

                <TextInput
                  style={styles.fa1input}
                  onChangeText={(sciencemarks) => this.setState({ sciencemarks })}
                  placeholder={''}
                  placeholderColor={'#8E806A'}
                  placeholderTextColor={'#8E806A'}
                />
                <TextInput
                  style={styles.fa1input}
                  onChangeText={(socialmarks) => this.setState({ socialmarks })}
                  placeholder={''}
                  placeholderColor={'#8E806A'}
                  placeholderTextColor={'#8E806A'}
                />

                <TextInput
                  style={styles.fa1input}
                  onChangeText={(hindimarks) => this.setState({ hindimarks })}
                  placeholder={''}
                  placeholderColor={'#8E806A'}
                  placeholderTextColor={'#8E806A'}
                />
                <TextInput
                  style={styles.fa1input}
                  onChangeText={(telugumarks) => this.setState({ telugumarks })}
                  placeholder={''}
                  placeholderColor={'#8E806A'}
                  placeholderTextColor={'#8E806A'}
                />

              </View>

              <View style={styles.fa2}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#99A799',
                    marginTop: 10,
                  }}>
                  𝓕𝓪2
                </Text>

                <TextInput
                  style={styles.fa2input}
                  onChangeText={(engmarks2) => this.setState({ engmarks2 })}
                  placeholder={''}
                  placeholderColor={'#8E806A'}
                  placeholderTextColor={'#8E806A'}
                />
                <TextInput
                  style={styles.fa2input}
                  onChangeText={(mathmarks2) => this.setState({ mathmarks2})}
                  placeholder={''}
                  placeholderColor={'#8E806A'}
                  placeholderTextColor={'#8E806A'}
                />

                <TextInput
                  style={styles.fa2input}
                  onChangeText={(sciencemarks2) => this.setState({ sciencemarks2 })}
                  placeholder={''}
                  placeholderColor={'#8E806A'}
                  placeholderTextColor={'#8E806A'}
                />

                <TextInput
                  style={styles.fa2input}
                  onChangeText={(socialmarks2) => this.setState({ socialmarks2 })}
                  placeholder={''}
                  placeholderColor={'#8E806A'}
                  placeholderTextColor={'#8E806A'}
                />

                <TextInput
                  style={styles.fa2input}
                  onChangeText={(hindimarks2) => this.setState({ hindimarks2 })}
                  placeholder={''}
                  placeholderColor={'#8E806A'}
                  placeholderTextColor={'#8E806A'}
                />

                <TextInput
                  style={styles.fa2input}
                  onChangeText={(telugumarks2) => this.setState({ telugumarks2 })}
                  placeholder={''}
                  placeholderColor={'#8E806A'}
                  placeholderTextColor={'#8E806A'}
                />





              </View>
              <View style={styles.extra}>
                <Text style={styles.text}> 𝓐𝓽𝓽𝓮𝓷𝓭𝓪𝓷𝓬𝓮 :- </Text>
                <TextInput
                  style={styles.attendenceinput}
                  onChangeText={(attendence) => this.setState({attendence })}
                  placeholder={''}
                  placeholderColor={'#8E806A'}
                  placeholderTextColor={'#8E806A'}
                />
              
                <Text style={styles.text1}> 𝓕𝓪.𝓐𝓿𝓮𝓻𝓪𝓰𝓮 :- </Text>            
              </View>
              <Text style= {styles.plaintext}>
              𝚂𝚞𝚋𝚖𝚒𝚝 𝚝𝚘 𝚐𝚎𝚝 𝚝𝚑𝚎 𝚊𝚟𝚎𝚛𝚊𝚐𝚎
              </Text>
            </View>
          </ScrollView>
          <View>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => this.addReport()}>
              <Text style={styles.submitButtonText}> SUBMIT </Text>
            </TouchableOpacity>

            <FlatList
              keyExtractor={this.keyExtractor}
              //data={}
              renderItem={this.renderItem}
              horizontal={true}></FlatList>
          </View>
        </ImageBackground>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 0.95,
    },
    titletext: {
      textAlign: 'center',
      color: '#8E806A',
      fontSize: 40,
      fontWeight: 'bold',
      marginTop: 10,
      marginLeft: 30,
    },
    iconImage: {
      width: 120,
      height: 120,
      marginRight: 70,
      marginTop: -70,
      marginLeft: -25,
    },
    baseReport: {
      backgroundColor: '#FAFDD6',
      width: 500,
      height: 770,
      //borderRadius: 20,
      //bordercolor: '#E05D5D',
    },
    androidView: {
      marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    },
    
    nameInput: {
      width: 123,
      height: 50,
      borderWidth: 3,
      borderRadius: 20,
      borderColor: '#E6BA95',
      marginLeft: 2,
    },
    classInput: {
      width: 73,
      height: 50,
      borderWidth: 3,
      borderRadius: 20,
      borderColor: '#E6BA95',
      marginLeft: 4,
    },
    secInput: {
      width: 73,
      height: 50,
      borderWidth: 3,
      borderRadius: 20,
      borderColor: '#E6BA95',
      marginLeft: 4,
    },
    submitButton: {
      marginTop: 50,
      marginLeft: 60,
      borderWidth: 2,
      borderColor: '#0E3EDA',
      alignItems: 'center',
      justifyContent: 'center',
      width: 200,
      height: 50,
      backgroundColor: '#FFF7BC',
      borderRadius: 10,
    },
    subjects: {
      width: 400,
      height: 370,
      color: 'white',
      borderColor: '#E6BA95',
      borderWidth: 3,
      marginTop: 30,
      marginRight: 10,
    },
    fa1: {
      width: 96,
      height: 360,
      color: 'white',
      borderColor: '#E4E9BE',
      borderWidth: 3,
      marginTop: -365,
      marginLeft: 120,
      borderWidth: 3,
    },

    fa2: {
      width: 96,
      height: 360,
      color: 'white',
      borderColor: '#E4E9BE',
      borderWidth: 3,
      marginTop: -360,
      marginLeft: 220,
      borderWidth: 3,
    },
    extra: {
      width: 300,
      height: 150,
      color: '#99A799',
      borderColor: '#99A799',
      borderWidth: 3,
      marginTop: 50,
      marginRight: 100,
      borderWidth: 2.5,
    },
    text: {
      marginTop: 20,
      color: '#BB9981',
    },
    subtext: {
      marginTop: 30,
      marginRight: 10,
      color: '#8E806A',
    },
    fa1input:{
    width: 95,
      height: 30,
      color: '#8E806A',
      borderColor: '#8E806A',
      marginTop: 20,
      marginLeft: -5,
      borderWidth:3,
      borderRadius:9
    },
    fa2input:{
    width: 95,
      height: 30,
      color: '#8E806A',
      borderColor: '#8E806A',
      marginTop: 20,
      marginLeft:- 5,
      borderWidth:3,
      borderRadius:9
    },
  attendenceinput:{
      width: 172,
      height: 35,
      color: '#8E806A',
      borderColor: '#BB9981',
      marginTop: -30,
      marginLeft: 120,
      borderWidth:3,
      borderRadius:9 
  },
  plaintext:{
  fontSize:20,
  },
  text1: {
      marginTop: 20,
      color: '#BB9981',
    },

  });
