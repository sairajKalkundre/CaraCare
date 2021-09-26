import { TextStyle , TouchableOpacityProps,TextInputProps, ViewStyle,StyleSheet, ImageStyle,ModalProps} from "react-native";
import {backgroundColor} from '../../utils/color';

interface Style {
    centeredView : ViewStyle,
    modalView : ModalProps,
    modalText : TextStyle,
    titleText : TextStyle,
    input : TextInputProps,
    modalUpdate : ViewStyle
}

export default StyleSheet.create<Style>({
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
      } ,
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
        color : 'black',
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
});