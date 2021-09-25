import React from "react";
import { View,Text } from "react-native";
import { Strings } from "../../utils/strings";
import styles from './Header.style';

interface WaterDrunkProps {
    waterDrunk : number
}

export function Header({waterDrunk}: WaterDrunkProps) : React.ReactElement{
    return(
        <View style = {styles.headerContainer}>
                <View style = {styles.totalWaterContainer}>
                    <Text style = {styles.titleTextStyle}>{waterDrunk + ' L'} </Text>
                    <Text style = {styles.totalTextStyle}>{Strings.totalWaterDrunk}</Text>
                </View>
                
                <View style = {styles.achievedWaterContainer}>
                    <Text style = {styles.titleAchievedText}>15</Text>
                    <Text style = {styles.achievedTextStyle}>{Strings.achieveGoalDays}</Text>
                </View>
        </View>
    );
}
