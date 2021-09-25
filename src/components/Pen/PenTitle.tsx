import React from "react";
import { View , TouchableOpacity,Image, Text,StyleSheet } from "react-native";
import { Strings } from "../../utils/strings";
import penIcon from '../../assets/icon/penIcon.png';
import penStyle from "./pen.style";

interface Penprops {
    modal : boolean,
    setModalVisible : setModalVisible
}

type setModalVisible = (modal : boolean) => void;

export function PenTitle({modal , setModalVisible} : Penprops) : React.ReactElement{
    return(
        <View style = {penStyle.globalStyle}>
          <View style={penStyle.lineStyle}/>
                        <Text style = {penStyle.finalTextStyle}>{Strings.finalTarget}</Text>
                        <TouchableOpacity style = {{top : 13}} onPress = {() => setModalVisible(!modal)}>
                        <Image style = {penStyle.imageStyle} source = {penIcon} />
                        </TouchableOpacity>
                </View>
    );  
}