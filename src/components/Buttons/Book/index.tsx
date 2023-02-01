import { TouchableOpacity } from "react-native";
import React from "react";
import Text from "../../Text";
import styles from "./styles";
import TProps from "./types";

const Book = ({ onPress }: TProps) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text color="white">Book</Text>
  </TouchableOpacity>
);

export default Book;
