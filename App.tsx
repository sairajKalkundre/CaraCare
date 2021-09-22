/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {BallIcon,AddIcon} from './src/utils/icon';

const App = () => {
  return (
    <View style = {{flex : 1  , backgroundColor : 'rgb(69,188,237)',alignItems : 'center',justifyContent : 'center'}}>
      <StatusBar backgroundColor = 'rgb(69,188,237)'/>
      {/* Header */}
      <View style = {{flex : 1 , flexDirection : 'row',marginTop : 20}}>
            <View style = {{flexDirection : 'column' , width : 150,alignItems : 'flex-start'}}>
                <Text style = {{fontSize : 30 , color : 'white',fontWeight : '800',textAlign : 'center'}}>2.4 L</Text>
                <Text style = {{fontSize : 16 , color : '#F0F8FF',textAlign : 'center',}}>TOTAL WATER DRUNK</Text>
            </View>
            
            <View style = {{flexDirection : 'column' , width : 150, alignItems : 'flex-end'}}>
                <Text style = {{fontSize : 30 , color : 'white',fontWeight : '800',alignSelf : 'center' }}>15</Text>
                <Text style = {{fontSize : 16 , color : '#F0F8FF',textAlign : 'center'}}>ACHIEVED GOAL DAYS</Text>
            </View>
      </View>
      {/* Body */}
      <View style = {{flex : 4 , width : '100%'}}>
      
          <View style = {{alignSelf : 'center'}}>
              <View style = {{flexDirection : 'row' ,
                                          position : 'absolute',
                                          alignSelf : 'flex-end',
                                          marginLeft : 80,
                                          marginTop : 32,
                                          left : 0 ,  }}>
                                            <View
                                                      style={{
                                                        borderBottomColor: '#rgb(0,131,200)',  
                                                        width : 70,
                                                        borderBottomWidth: StyleSheet.hairlineWidth,
                                                      }}
                                                    />
                              <Text style = {{color : 'white' , top : 10,fontSize : 16}}> 3.5 L</Text>
                              <TouchableOpacity style = {{top : 13}}>
                                    <Image style = {{left  : 6 ,height : 15 , width : 15}} source = {require('./src/utils/pen.png')} />
                              </TouchableOpacity>
              </View>
        
      
                  <BallIcon />
              </View>
           <Text style = {{color : 'white' , fontSize : 18,width : 150,textAlign : 'center',alignSelf : 'center',fontWeight : '600'}}>Nice work! Keep it up!</Text>

           <View style = {{flexDirection : 'row' , justifyContent : 'space-around' , backgroundColor : 'transparent' ,marginTop : 30}}>
                <Text style = {{color : '#87CEFA' , fontSize : 22,fontWeight : '800'}}>150 ml</Text>
                <Text style = {{color : 'white' , fontSize : 22,fontWeight : '800'}}>250 ml</Text>
                <Text style = {{color : '#87CEFA' , fontSize : 22,fontWeight : '800'}}>350 ml</Text>
           </View>

        </View>
        {/* Footer */}
        <View style = {{flex : 1 , flexDirection : 'row',alignItems : 'flex-end',marginBottom : 40 }}>
              <TouchableOpacity>
                    <Image style = {{height : 50 , width : 50}} source = {require('./src/utils/sub.png')} />
              </TouchableOpacity>
              <TouchableOpacity  style = {{marginLeft : 40}}>
                    <Image style = {{height : 50 , width : 50}} source = {require('./src/utils/add.png')} />
              </TouchableOpacity>
        </View>
    </View>
  )
  }

export default App;
