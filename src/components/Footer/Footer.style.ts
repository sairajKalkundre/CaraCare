import { TextStyle , ViewStyle,StyleSheet, ImageStyle} from "react-native";

interface Style {
  footerContainer : ViewStyle,
  imageStyle : ImageStyle,
  addStyle : ViewStyle
}

export default StyleSheet.create<Style>({
    footerContainer : {
        flex : 1 , 
        flexDirection : 'row',
        alignItems : 'flex-end',
        marginBottom : 40
    },
    imageStyle : {
        height : 50 , 
        width : 50
    },
    addStyle : {
        marginLeft : 40
    }
})