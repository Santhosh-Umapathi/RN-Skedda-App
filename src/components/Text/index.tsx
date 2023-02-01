import { Text as RNText } from "react-native";
import React, { FC, PropsWithChildren } from "react";
import TProps from "./types";
import { Colors } from "../../theme";

const Text: FC<PropsWithChildren & TProps> = ({
  font = "Regular",
  color = "black",
  style,
  children,
}) => (
  <RNText
    style={[
      {
        color: Colors[color],
        fontFamily: `SofiaPro-${font}`,
      },
      style,
    ]}
  >
    {children}
  </RNText>
);

export default Text;
