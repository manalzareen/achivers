  import React, { Component } from 'react';
    import {
      View,
      Text,
      StyleSheet,
      Platform,
      StatusBar,
      Image,
      Dimensions,
      SafeAreaView,
      ScrollView,
      ImageBackground,
    } from 'react-native';
    import Ionicons from 'react-native-vector-icons/Ionicons';
    import { RFValue } from 'react-native-responsive-fontsize';
    // (Math);
    import { TouchableOpacity } from 'react-native-gesture-handler';

    export default class StoryCard extends Component {
      constructor(props) {
        super(props);
            this.state = {
              avg :"",
            avg2: "",  
            };
  }     
      
        averagemarks =  ()  => {   
          avg = (+(this.props.route.params.report.engmarks) + 
          +(this.props.route.params.report.mathmarks) +
          +(this.props.route.params.report.sciencemarks )+
          +(this.props.route.params.report.socialmarks) +
          +(this.props.route.params.report.hindimarks) + 
          +(this.props.route.params.report.telugumarks))/7;

          avg2 = +(+(this.props.route.params.report.engmarks2)+
          +(this.props.route.params.report.mathmarks2) +
          +(this.props.route.params.report.sciencemarks2) +
          +(this.props.route.params.report.socialmarks2) +
          +(this.props.route.params.report.hindimarks2) + 
          +( this.props.route.params.report.telugumarks2))/7

          // Math.ceil(avg,avg2);  

          this.setState({ avg: avg.toFixed(2) });
          this.setState({ avg2:avg2.toFixed(2)})
          }
    componentDidMount(){
      this.averagemarks()
    }

      render() {
        return (
          
          <ImageBackground
            source={require('../assets/bg1.jpg')}
            style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />

            <View style={styles.appTitle}>
              <View style={styles.appIcon}>
                <Image
                  source={require('../assets/logo2.png')}
                  style={styles.iconImage}></Image>
              </View>

              <View>
              <TouchableOpacity onPress={() =>
              this.props.navigation.navigate("CrFeed")}>
              <Image 
              source ={require("../assets/arrowImg.png")}
              style ={styles.arrowImg}>
                </Image>
                </TouchableOpacity>
              </View>

              <View style={styles.appTitleTextContainer}>
                <Text style={styles.titletext}>????????????????????????????????????</Text>
              </View>
            </View>
            <View style={styles.storyContainer}>
              <ScrollView style={styles.storyCard}>
                <View style={styles.dataContainer}>
                  <View style={styles.titleTextContainer}>
                    <View style={styles.name}>
                      <Text style={styles.reportInfo}>
                        ????????????????: {this.props.route.params.report.name}
                      </Text>
                    </View>
                    <View style={styles.classGrade}>
                      <Text style={styles.classText}>
                        ???????????????????? : {this.props.route.params.report.classGrade}
                      </Text>
                    </View>
                    <Text style = {styles.fa1text}>
                      ????????1
                    </Text>
                  </View>
                  <View style={styles.sub1}>
                    <Text style={styles.reportInfo}>
                      ???????????????????????????? : {this.props.route.params.report.engmarks}
                    </Text>
                  </View>
                  <View style={styles.sub2}>
                    <Text style={styles.reportInfo}>
                      ???????????????? : {this.props.route.params.report.mathmarks2}
                    </Text>
                  </View>

                  <View style={styles.sub3}>
                    <Text style={styles.reportInfo}>
                      ???????????????????????????? : {this.props.route.params.report.sciencemarks}
                    </Text>
                  </View>

                  <View style={styles.sub4}>
                    <Text style={styles.reportInfo}>
                      ???????????????????????? : {this.props.route.params.report.socialmarks}
                    </Text>
                  </View>
                  <View style={styles.sub5}>
                    <Text style={styles.reportInfo}>
                      ????????????????????: {this.props.route.params.report.hindimarks}
                    </Text>
                  </View>

                  <View style={styles.sub6}>
                    <Text style={styles.reportInfo}>
                      ????????????????????????: {this.props.route.params.report.telugumarks}
                    </Text>
                  </View>

                  <View>
                    <Text
                      style={{
                        marginTop: RFValue(71),
                        color: '#73A9AD',
                        fontSize: RFValue(25),
                        fontWeight: RFValue(5),
                        marginLeft: RFValue(70),
                        marginRight: RFValue(-180),
                      }}>
                      ????????2
                    </Text>
                  </View>
                  <View style={styles.sub1}>
                    <Text style={styles.reportInfo}>
                      ???????????????????????????? : {this.props.route.params.report.engmarks2}
                    </Text>
                  </View>
                  <View style={styles.sub2}>
                    <Text style={styles.reportInfo}>
                      ???????????????? : {this.props.route.params.report.mathmarks2}
                    </Text>
                  </View>

                  <View style={styles.sub3}>
                    <Text style={styles.reportInfo}>
                      ???????????????????????????? : {this.props.route.params.report.sciencemarks2}
                    </Text>
                  </View>

                  <View style={styles.sub4}>
                    <Text style={styles.reportInfo}>
                      ???????????????????????? : {this.props.route.params.report.socialmarks2}
                    </Text>
                  </View>
                  <View style={styles.sub5}>
                    <Text style={styles.reportInfo}>
                      ????????????????????: {this.props.route.params.report.hindimarks2}
                    </Text>
                  </View>

                  <View style={styles.sub6}>
                    <Text style={styles.reportInfo}>
                      ????????????????????????: {this.props.route.params.report.telugumarks2}
                    </Text>
                  </View>

                  <View style={{
                          width:RFValue(400),
                          height:RFValue(70),
                          borderWidth: RFValue(3),
                          borderRadius: RFValue(20),
                          backgroundColor: '#C4DFAA',
                          borderColor: '#73A9AD',
                          marginTop:RFValue(550),
                          marginLeft:RFValue(-360),                     
                  }}>
                    <Text style={styles.reportInfo}>
                      ???????????? : {this.state.avg}
                  </Text>                      
                  </View>           
                  
                </View>
              </ScrollView>
            </View>
          </ImageBackground>
        );
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#15193c',
      },
      droidSafeArea: {
        marginTop:
          Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
      },
      appTitle: {
        flex: 0.07,
        flexDirection: 'row',
      },
      appIcon: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
      },
      iconImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
      },
      appTitleTextContainer: {
        flex: 0.7,
        justifyContent: 'center',
      },

      storyContainer: {
        flex: 1,
      },
      storyCard: {
        margin: RFValue(5),
        backgroundColor: '#F5F0BB',
        borderRadius: RFValue(50),
      },
      name: {
        width: RFValue(190),
        height: RFValue(80),
        borderColor: '#73A9AD',
        backgroundColor: '#C4DFAA',
        borderRadius: RFValue(20),
        marginLeft: -10,
        marginTop: -10,
        borderWidth: RFValue(3),
      },
      reportInfo: {
        marginTop: 10,
        color: '#233E8B',
        fontSize: 15,
        fontWeight: 5,
        marginLeft: 10,
      },
      classGrade: {
        width: RFValue(120),
        height: RFValue(65),
        borderWidth: RFValue(3),
        borderRadius: RFValue(20),
        backgroundColor: '#C4DFAA',
        borderColor: '#73A9AD',
        marginLeft: 140,
        marginTop: -55,
      },
      classText:{
      marginTop: 10,
        color: '#233E8B',
        fontSize: 15,
        fontWeight: 5,
        marginLeft: -1, 
        marginTop:7,
      },

      dataContainer: {
        flexDirection: 'row',
        padding: RFValue(20),
      },
      titleTextContainer: {
        flex: 0.8,
      },
      fa1text:{
          marginTop: RFValue(20),
          marginLeft: RFValue(100),
          marginRight:RFValue(-200),
          color: '#73A9AD',
          fontSize: RFValue(25),
      },   
      sub1: {
        width: RFValue(155),
        height: RFValue(60),
        borderWidth: RFValue(3),
        borderRadius: RFValue(20),
        backgroundColor: '#C4DFAA',
        borderColor: '#73A9AD',
        marginLeft: RFValue(20),
        marginRight: RFValue(20),
        marginTop: RFValue(130),
      },
      sub2: {
        width: RFValue(155),
        height: RFValue(60),
        borderWidth: RFValue(3),
        borderRadius: RFValue(20),
        backgroundColor: '#C4DFAA',
        borderColor: '#73A9AD',
        marginLeft: -120,
        marginTop: RFValue(195),
        //marginRightRFValue
      },
      sub3: {
        width: RFValue(155),
        height: RFValue(60),
        borderWidth: RFValue(3),
        borderRadius: RFValue(20),
        backgroundColor: '#C4DFAA',
        borderColor: '#73A9AD',
        marginLeft: RFValue(-160),
        marginTop: RFValue(260),
      },
      sub4: {
        width: RFValue(155),
        height: RFValue(60),
        borderWidth: RFValue(3),
        borderRadius: RFValue(20),
        backgroundColor: '#C4DFAA',
        borderColor: '#73A9AD',
        marginLeft: RFValue(-155),
        marginTop: RFValue(325),
      },
      sub5: {
        width: RFValue(155),
        height: RFValue(60),
        borderWidth: RFValue(3),
        borderRadius: RFValue(20),
        backgroundColor: '#C4DFAA',
        borderColor: '#73A9AD',
        marginLeft: RFValue(-155),
        marginTop: RFValue(390),
      },
      sub6: {
        width: RFValue(155),
        height: RFValue(60),
        borderWidth: RFValue(3),
        borderRadius: RFValue(20),
        backgroundColor: '#C4DFAA',
        borderColor: '#73A9AD',
        marginLeft: RFValue(-155),
        marginTop: RFValue(455),
      },
    arrowImg:{
      width:70,
      height:70,
      marginLeft:-90,
      marginTop:-20,
      borderColor:"black", 
      

    }

      
    });
