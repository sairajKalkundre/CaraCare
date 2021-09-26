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
import React, { useState } from "react";
import { FlatList, StatusBar, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { Waterbody } from "../../assets/svg/icon";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Custommodal } from "../../components/Modal/Custommodal";
import { PenTitle } from "../../components/Pen";
import { setHydration, setHydrationInPercent } from '../../redux/slices/hydrationSlice';
import { RootState } from '../../redux/store';
import { backgroundColor } from "../../utils/color";
import { convertMLtoL, convertToPercentage } from '../../utils/helper';
import { Strings } from "../../utils/strings";
import HomeStyle from "./Home.style";

interface Waterelement {
      item : Item
    }

interface Item{
    id : number,
    value : string
    }

interface WaterObjects {
    id : number
  };

 const Home = () => {
   const [selectedItem , setSelectedItem] = useState(0);
   const [modal , setModalVisible] = useState(false);
   const [inputWater , setInputWater] = useState(0);
   let achievedTarget = 3500;
 
   const storeWaterDrunk = useSelector((state : RootState) => state.hydration.totalWater);

   const storeWaterDrunkInPer = useSelector((state : RootState) => state.hydration.totalWaterInPercentage);

   const dispatch = useDispatch();

   const arrData = [{id : 150 , value : '150ml'},{id : 250 , value : '250ml'},{id : 350 , value : '350ml'},{id : 450 , value : '450ml'},{id : 550 , value : '550ml'},{id : 650 , value : '650ml'}];
 

    const increaseHydration = () => {
        let totalWaterDrunk = selectedItem + storeWaterDrunk ;
        if(totalWaterDrunk <= 3500){
              allDispatch(totalWaterDrunk);
        }
  }

   const decreaseHydration = () => {
    let totalWaterDrunk = storeWaterDrunk - selectedItem  ;
      if(totalWaterDrunk >= 0){
            allDispatch(totalWaterDrunk);
      }
}

const updateTargetWater = async(qty : number) => {
      if(qty !== 0 && qty <= 3500){
        try {
              allDispatch(qty)
        } catch (e) {
          console.log(e);
        }
      }else{
        ToastAndroid.show("Value should be in between of 0 and 3500ml", ToastAndroid.SHORT);
      }
    setModalVisible(!modal);
    }

   const waterSelection = ({id} : WaterObjects) => {
     setSelectedItem(id);
   }
 
   const allDispatch = (waterInML :  number) => {
    dispatch(setHydration(waterInML));
    dispatch(setHydrationInPercent(convertToPercentage(waterInML, achievedTarget)))
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
       <Custommodal modal = {modal} setInputWater = {(text : number) => setInputWater(text)} updateTargetWater = {() => updateTargetWater(inputWater)} inputWater = {inputWater} setModalVisible = {() => setModalVisible(!modal)}/>
     
       {/* Header */}
        <Header waterDrunk = {convertMLtoL(storeWaterDrunk)} />

       {/* Body */}
       <View style = {{flex : 5 , width : '100%',}}>
                <View style = {{alignSelf : 'center'}}>
                          <PenTitle setModalVisible = {() => setModalVisible(!modal)} modal = {modal}/>
                        <Waterbody dehydrated = {storeWaterDrunkInPer.toString() + '%'}/>
                  </View>
                  <Text style = {{color : 'white' , fontSize : 18,width : 150,textAlign : 'center',alignSelf : 'center',fontWeight : '600'}}>{Strings.quote}</Text>
                <View style = {{height : 40 ,marginTop : 20}}>
                    <FlatList
                        data={arrData}
                        showsHorizontalScrollIndicator = {false}
                        horizontal = {true}
                        renderItem={horizontalList}
                      /> 
                </View>
         </View>

         {/* Footer */}
         <Footer decreaseHydration ={() => decreaseHydration()}     increaseHydration= {() => increaseHydration()}/>
     </View>
   )
   }
 

 export default Home;
 