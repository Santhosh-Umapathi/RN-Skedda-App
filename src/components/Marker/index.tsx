import { View } from "react-native";
import React from "react";
import TProps from "./types";
import styles from "./styles";

const Marker = (props: TProps) => (
  <View style={[styles.container, props.style]} />
);

export default Marker;
