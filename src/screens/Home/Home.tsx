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
 import { FlatList, Image, Modal, StatusBar, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import pen from '../assets/icon/pen.png';
import { Waterbody } from "../../assets/svg/icon";
import { backgroundColor } from "../../utils/color";
import { Strings } from "../../utils/strings";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
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
       {/* Header */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={modal}
              onRequestClose={() => {
                setModalVisible(!modal);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>{Strings.modalTitle}</Text>
                  <Text style={styles.titleText}>{Strings.modalBody}</Text> 
                  <TextInput 
                      placeholder = 'In ml'
                      keyboardType = "numeric"
                      style = {styles.input}
                      onChangeText = {(text) => setInputWater(Number(text))}
                  />
                  <TouchableOpacity style = {styles.modalUpdate} onPress = {() => updateTargetWater(inputWater)}>
                        <Text style = {{color : 'white' , fontSize : 18,fontWeight : '700' ,alignSelf : 'center'}}>{Strings.modalBtn}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
       
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
                               <TouchableOpacity style = {{top : 13}} onPress = {() => setModalVisible(!modal)}>
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
 
   const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontSize : 22,
      fontWeight : '700',
      color : backgroundColor.darkBlue
    },
    titleText : {
      fontSize : 16,
      color : backgroundColor.blue
    },
    input : {
      marginTop : 10,
      borderRadius : 10,
      borderColor : '#000',
      height : 40,
      width : 200,
      borderWidth : StyleSheet.hairlineWidth
    },
    modalUpdate : {
      justifyContent : 'center',
      backgroundColor : backgroundColor.blue,
      height : 40,
      width  : 200,
      marginTop : 10,
      borderRadius : 10,
    }
   })
 export default Home;
 