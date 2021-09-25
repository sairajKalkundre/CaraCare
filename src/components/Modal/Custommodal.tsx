import React from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Strings } from "../../utils/strings";
import styles from './modal.style';

interface CustommodalProps {
    modal : boolean,
    setInputWater :  setInputWater,
    updateTargetWater :  updateTargetWater,
    inputWater : number
}

type updateTargetWater = (inputWater : number) => void ;
type setInputWater = (inputWater : number) => void ;

export function Custommodal({modal,setInputWater,updateTargetWater,inputWater} : CustommodalProps) : React.ReactElement{
    return(
        <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
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
                    <TouchableOpacity style = {styles.modalUpdate} onPress = {()=> updateTargetWater(inputWater)}>
                        <Text style = {{color : 'white' , fontSize : 18,fontWeight : '700' ,alignSelf : 'center'}}>{Strings.modalBtn}</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </Modal>
 
    );  
}