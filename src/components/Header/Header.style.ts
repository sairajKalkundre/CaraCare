import { TextStyle , ViewStyle,StyleSheet} from "react-native";

interface Style {
    headerContainer : ViewStyle;
    totalWaterContainer : ViewStyle;
    achievedWaterContainer : ViewStyle;
    textStyle : TextStyle;
    titleTextStyle : TextStyle;
    titleAchievedText : TextStyle
}

export default StyleSheet.create<Style>({
    headerContainer : {
        flex : 1 , 
        flexDirection : 'row'
        ,marginTop : 20
    },
    totalWaterContainer : {
        flexDirection : 'column' , 
        width : 150,
        alignItems : 'flex-start'
    },
    achievedWaterContainer : {
        flexDirection : 'column' , 
        width : 150,
        alignItems : 'flex-end'
    },
    titleTextStyle : {
        fontSize : 30 , 
        color : 'white',
        fontWeight : '800',
        textAlign : 'center'
    },
    titleAchievedText : {
        fontSize : 30 , 
        color : 'white',
        fontWeight : '800',
        alignSelf : 'center'
    },
    textStyle : {
        fontSize : 16 , 
        color : '#F0F8FF',
        textAlign : 'center',
    },
})