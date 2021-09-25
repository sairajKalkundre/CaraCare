import { TextStyle , ViewStyle,StyleSheet} from "react-native";

interface Style {
    headerContainer : ViewStyle;
    totalWaterContainer : ViewStyle;
    achievedWaterContainer : ViewStyle;
    titleTextStyle : TextStyle;
    titleAchievedText : TextStyle;
    totalTextStyle : TextStyle;
    achievedTextStyle : TextStyle
}

export default StyleSheet.create<Style>({
    headerContainer : {
        flex : 1 , 
        width : '100%',
        justifyContent : 'space-between',
        flexDirection : 'row',
        marginTop : 20,
    },
    totalWaterContainer : {
        flexDirection : 'column' , 
        marginLeft : 20,
        // backgroundColor : 'white',
        alignItems : 'flex-start'
    },
    achievedWaterContainer : {
        flexDirection : 'column' , 
        // backgroundColor : 'white',
        marginRight : 20,
        alignItems : 'flex-end'
    },
    titleTextStyle : {
        fontSize : 34 , 
        color : 'white',
        fontWeight : '800',
        textAlign : 'center'
    },
    titleAchievedText : {
        fontSize : 34 , 
        color : 'white',
        fontWeight : '800',
        alignSelf : 'center'
    },
    totalTextStyle : {
        fontSize : 16 , 
        color : '#F0F8FF',
        width : '65%',
        textAlign : 'center'
    },
    achievedTextStyle : {
        fontSize : 16 , 
        color : '#F0F8FF',
        width : 150,
        textAlign : 'center',
    },
})