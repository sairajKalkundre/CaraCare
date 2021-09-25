import { TextStyle , ViewStyle,StyleSheet, ImageStyle} from "react-native";
import { backgroundColor } from "../../utils/color";

interface Style {
  homeContainer : ViewStyle,
}

export default StyleSheet.create<Style>({
    homeContainer : {
        flex : 1  ,
         backgroundColor : backgroundColor.blue,
         alignItems :  'center',
         justifyContent : 'center'
    }
}
);