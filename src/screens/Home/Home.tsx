/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
 import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Waterbody } from "../../assets/svg/icon";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Custommodal } from "../../components/Modal/Custommodal";
import { PenTitle } from "../../components/Pen";
import { backgroundColor } from "../../utils/color";
import { Strings } from "../../utils/strings";
import HomeStyle from "./Home.style";

 const Home = () => {
   const [dehydrationcount , setDehydrationCount] = useState(0);
   const [waterDrunk , setWaterDrunk] = useState(0);
   const [selectedItem , setSelectedItem] = useState(0);
   const [modal , setModalVisible] = useState(false);
  const[inputWater , setInputWater] = useState(0);
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

   const updateTargetWater = async(qty : number) => {
        if(qty !== 0){
          try {
            setDehydrationCount(convertToPercentage(dehydrationcount, achievedTarget));
            await AsyncStorage.setItem('totalWaterDrunk', qty.toString());
          } catch (e) {
            console.log(e);
          }
        }
       setModalVisible(!modal);
   }

   const horizontalList = ({item} : Waterelement) => {
       return(
         <TouchableOpacity onPress = {() => waterSelection(item)}>
               <Text style = {{color :  selectedItem !== item.id ? '#87CEFA'  : 'white', fontSize : 22,fontWeight : '800',marginLeft :20 }}>{item.value}</Text>
         </TouchableOpacity>
       )
   }
 
   return (
     <View style = {HomeStyle.homeContainer}>
       <StatusBar backgroundColor ={backgroundColor.blue}/>

       {/* Modal */}
       <Custommodal modal = {modal} setInputWater = {(text : number) => setInputWater(text)} updateTargetWater = {() => updateTargetWater(inputWater)} inputWater = {inputWater}/>
     
       {/* Header */}

       <Header waterDrunk = {convertMLtoL(waterDrunk)} />
     
       {/* Body */}
       <View style = {{flex : 5 , width : '100%'}}>
                <View style = {{alignSelf : 'center'}}>
                          <PenTitle setModalVisible = {() => setModalVisible(!modal)} modal = {modal}/>
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
 