/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
 import React, { useEffect, useState } from "react";
 import { FlatList, Image, Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import pen from '../assets/icon/pen.png';
import { Waterbody } from "../assets/svg/icon";
import { backgroundColor } from "../utils/color";
import { Strings } from "../utils/strings";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

 const Home = () => {
   const [dehydrationcount , setDehydrationCount] = useState(0);
   const [waterDrunk , setWaterDrunk] = useState(0);
   const [selectedItem , setSelectedItem] = useState(0);
   const [modal , setModal] = useState(true);

   let achievedTarget = 3500;
 
   useEffect(() => {
       readData();
   });
 
 
   const arrData = [{id : 150 , value : '150ml'},{id : 250 , value : '250ml'},{id : 350 , value : '350ml'},{id : 450 , value : '450ml'},{id : 550 , value : '550ml'},{id : 650 , value : '650ml'}]
 
   //Async
   const storeData = async (value : number) => {
     try {
       await AsyncStorage.setItem('totalWaterDrunk', value.toString())
     } catch (e) {
       console.log(e);
     }
   }
 
   const readData = async () => {
     try {
       const waterCount = await AsyncStorage.getItem("totalWaterDrunk")
       if (waterCount !== null) {
         setWaterDrunk(Number(waterCount));
         setDehydrationCount(convertToPercentage(Number(waterDrunk ), achievedTarget));
       }
     } catch (e) {
       console.log('Failed to fetch the data from storage');
     }
   }
 
   const convertToPercentage = (partialValue : number , totalValue : number) : number => {
         return  ((100 * partialValue) / totalValue);
   }
 
  const increaseHydration = () => {
       let totalWaterDrunk = selectedItem + waterDrunk ;
       setWaterDrunk(totalWaterDrunk);
       let percentage = convertToPercentage(totalWaterDrunk , achievedTarget);
       setDehydrationCount(percentage);
       storeData(totalWaterDrunk);
   }
 
   const decreaseHydration = () => {
     let totalWaterDrunk = waterDrunk - selectedItem  ;
     setWaterDrunk(totalWaterDrunk);
     let percentage = (totalWaterDrunk * 100) / achievedTarget;
     setDehydrationCount(percentage);
     storeData(totalWaterDrunk);
   }
 
   interface WaterObjects {
        id : number
   };

   const waterSelection = ({id} : WaterObjects) => {
     setSelectedItem(id);
   }
 
   const convertMLtoL = (ml : number) : number => {
     return ml/1000 ;
   }
 
   interface Waterelement {
              item : Item
   }

   interface Item{
        id : number,
        value : string
   }

   const horizontalList = ({item} : Waterelement) => {
       return(
         <TouchableOpacity onPress = {() => waterSelection(item)}>
               <Text style = {{color :  selectedItem !== item.id ? '#87CEFA'  : 'white', fontSize : 22,fontWeight : '800',marginLeft :20 }}>{item.value}</Text>
         </TouchableOpacity>
 
       )
   }
 
   return (
     <View style = {{flex : 1  , backgroundColor : backgroundColor.blue,alignItems : 'center',justifyContent : 'center'}}>
       <StatusBar backgroundColor ={backgroundColor.blue}/>
       {/* Header */}

       <Header waterDrunk = {convertMLtoL(waterDrunk)} />
     
       {/* Body */}
       <View style = {{flex : 4 , width : '100%'}}>
           <View style = {{alignSelf : 'center'}}>
               <View style = {{flexDirection : 'row' ,
                                           position : 'absolute',
                                           alignSelf : 'flex-end',
                                           marginLeft : 80,
                                           marginTop : 30,
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
                                     <Image style = {{left  : 6 ,height : 15 , width : 15}} source = {pen} />
                               </TouchableOpacity>
               </View>
                   <Waterbody dehydrated = {dehydrationcount.toString() + '%'}/>
               </View>
            <Text style = {{color : 'white' , fontSize : 18,width : 150,textAlign : 'center',alignSelf : 'center',fontWeight : '600'}}>{Strings.quote}</Text>
           <View style = {{height : 200 ,marginTop : 20}}>
           <FlatList
               data={arrData}
               horizontal = {true}
               renderItem={horizontalList}
             /> 
           </View>
      
 
         </View>
         {/* Footer */}
         <Footer decreaseHydration ={() => decreaseHydration()} increaseHydration= {() => increaseHydration()}/>
      
     </View>
   )
   }
 
 export default Home;
 