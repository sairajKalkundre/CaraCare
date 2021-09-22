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
import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import {BallIcon,AddIcon} from './src/utils/icon';

const App = () => {
  return (
    <View style = {{flex : 1  , backgroundColor : 'rgb(69,188,237)',alignItems : 'center',justifyContent : 'center'}}>
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
      <View
                  style={{
                    borderBottomColor: '#rgb(0,131,200)',
                    borderBottomWidth: 12,
                    position : 'absolute',
                  }}
                />
          <View style = {{alignSelf : 'center'}}>
              <BallIcon />
          </View>
           <Text style = {{color : 'white' , fontSize : 18,width : 150,textAlign : 'center',alignSelf : 'center'}}>Nice work! Keep it up!</Text>

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
