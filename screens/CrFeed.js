  import React, { Component } from 'react';
  import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    TouchableOpacity,
    FlatList,
    ImageBackground,
  } from 'react-native';
  import { RFValue } from 'react-native-responsive-fontsize';
  import StoryCard from './ReportCard';

  import firebase from 'firebase';

  export default class CrFeed extends Component {
    constructor(props) {
      super(props);
      this.state = {
        myReports: [],
      };
    }
    renderItem = ({ item: mystory }) => {
      return <StoryCard story={mystory} navigation={this.props.navigation} />;
    };
    keyExtractor = (item, index) => index.toString();

    componentDidMount() {
      this.fetchReportCards();
    }

    fetchReportCards = () => {
      firebase
        .database()
        .ref('/reports/')
        .on(
          'value',
          (snapshot) => {
            let myReports = [];
            if (snapshot.val()) {
              Object.keys(snapshot.val()).forEach(function (key) {
                myReports.push({
                  key: key,
                  value: snapshot.val()[key],
                });
              });
            }
            this.setState({ myReports: myReports });
          },
          function (errorObject) {
          // console.log('The read failed: ' + errorObject.code);
          }
        );
      //console.log(this.state.myReports);
    };

    render() {
      return (
        <ImageBackground
          source={require('../assets/bg1.jpg')}
          style={styles.container}>
          <SafeAreaView style={styles.androidView} />
          <Text style={styles.titletext}>𝓐𝓬𝓱𝓲𝓮𝓿𝓮𝓻𝓼</Text>
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
                        marginLeft:-10,
                        marginTop:-40,
                        borderColor:"black", 
                      }}>
                </Image>
                </TouchableOpacity>
              </View>
          <View style={styles.cardContainer}>
            {!this.state.myReports[0] ? (
              <View style={styles.noStories}>
                <Text style={styles.noStoriesText}>
                  No Report Cards Available
                </Text>
              </View>
            ) 
            : 
            (

              <View style={styles.cardContainer}>
                <FlatList
                  data={this.state.myReports}
                  keyExtractor={this.keyExtractor}
                  renderItem={this.renderItem}
                />
              </View>
            )}


          </View>
        </ImageBackground>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 0.93,
      backgroundcolor: 'white',
    },
    androidView: {
      marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    },

    titletext: {
      textAlign: 'center',
      color: '#2F86A6',
      fontSize: 40,
      fontWeight: 'bold',
      marginTop: 10,
      marginRight: -25,
    },
    iconImage: {
      width: 120,
      height: 120,
      marginRight: 70,
      marginTop: -85,
      marginLeft: -25,
    },
    noStories: {
      flex: 0.85,
      justifyContent: 'center',
      alignItems: 'center',
    },
    noStoriesText: {
      color: 'black',
      fontSize: RFValue(25),
      fontFamily: 'Bubblegum-Sans',
    },
  });
