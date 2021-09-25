import { ViewStyle,TextStyle, ImageStyle, StyleSheet } from "react-native";

interface Style {
    globalStyle : ViewStyle,
    lineStyle : ViewStyle,
    finalTextStyle : TextStyle,
    imageStyle : ImageStyle
}

export default StyleSheet.create<Style>({
    globalStyle : { 
        flexDirection : 'row' ,
        position : 'absolute',
        alignSelf : 'flex-end',
        marginLeft : 80,
        marginTop : 30,
        left : 0 
        },
        lineStyle : {
            borderBottomColor: '#rgb(0,131,200)',  
            width : 70,
            borderBottomWidth: StyleSheet.hairlineWidth,
        },
        finalTextStyle : {
            color : 'white' , 
            top : 10,
            fontSize : 16
            },
            imageStyle : {
                left  : 6 ,
                height : 15 , 
                width : 15}
        }

);