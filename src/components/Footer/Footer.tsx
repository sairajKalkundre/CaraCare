import React from "react";
import { View,TouchableOpacity,Image } from "react-native";
import { Strings } from "../../utils/strings";
import styles from './Footer.style';
import add from '../../assets/icon/add.png';
import sub from '../../assets/icon/sub.png';

interface FooterProps {
        decreaseHydration : decreaseHydration,
        increaseHydration : increaseHydration
}

type decreaseHydration = () => void;
type increaseHydration = () => void;


export function Footer({decreaseHydration , increaseHydration} : FooterProps) : React.ReactElement{
    return(
        <View style = {styles.footerContainer}>
            <TouchableOpacity  onPress = {decreaseHydration}>
                <Image style = {styles.imageStyle} source = {sub} />
            </TouchableOpacity>
            <TouchableOpacity onPress = { increaseHydration} style = {styles.addStyle}>
                <Image style = {styles.imageStyle} source = {add} />
            </TouchableOpacity>
        </View>
    );
}
