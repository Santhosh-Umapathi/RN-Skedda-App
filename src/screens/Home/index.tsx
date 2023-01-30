import { View, Text, Image, StatusBar } from "react-native";
import React from "react";
import hero from "../../../assets/hero.png";
import logo from "../../../assets/logo.jpg";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Image
        source={hero}
        resizeMode="cover"
        style={{
          width: "100%",
          height: 100,
          marginBottom: 20,
          borderBottomRightRadius: 20,
        }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 20, paddingLeft: 16 }}>
        Welcome <Text style={{ color: "#005FE6" }}>John</Text>,
      </Text>

      <Text
        style={{
          marginTop: 10,
          fontSize: 14,
          paddingLeft: 16,
          color: "#555",
        }}
      >
        Are you ready to book your next space ?
      </Text>
    </View>
  );
};

export default HomeScreen;
