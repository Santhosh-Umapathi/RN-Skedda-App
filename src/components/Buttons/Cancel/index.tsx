import { TouchableOpacity } from "react-native";
import React from "react";
import Text from "../../Text";
import styles from "./styles";
import TProps from "./types";
import LeftArrow from "../../LeftArrow";
import { Colors } from "../../../theme";

const Cancel = ({ onPress }: TProps) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <LeftArrow width={20} height={20} fill={Colors.secondary} />
    <Text color="secondary" style={styles.text}>
      Cancel
    </Text>
  </TouchableOpacity>
);

export default Cancel;
