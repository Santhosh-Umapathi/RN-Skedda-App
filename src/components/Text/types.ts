import { StyleProp, TextStyle } from "react-native";
import { Colors } from "../../theme/index";
type TProps = {
  font?: "Light" | "Regular" | "Semi-Bold";
  color?: keyof typeof Colors;
  style?: StyleProp<TextStyle>;
};

export default TProps;
