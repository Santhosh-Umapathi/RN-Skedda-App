import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React, { useRef } from "react";
import hero from "../../../assets/hero.png";
import { Artistic } from "../../components";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";

const HomeScreen = (props: Props) => {
  const svgRef = useRef(null);

  const deskPressHandler = () => {
    console.log("Desk Pressed");
  };

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
      <Text
        style={{
          fontFamily: "SofiaPro-Semi-Bold",
          fontSize: 20,
          paddingLeft: 16,
        }}
      >
        Welcome <Text style={{ color: "#005FE6" }}>John</Text>,
      </Text>

      <Text
        style={{
          marginTop: 10,
          fontSize: 14,
          paddingLeft: 16,
          color: "#555",
          fontFamily: "SofiaPro-Light",
        }}
      >
        Are you ready to book your next space ?
      </Text>

      <View
        style={{
          marginTop: 20,
          height: 200,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReactNativeZoomableView
          maxZoom={20}
          minZoom={1}
          zoomStep={0.5}
          initialZoom={1}
          bindToBorders={true}
          style={{ width: 500 }}
        >
          <Artistic ref={svgRef} height={200} width={350} />

          <TouchableOpacity
            onPress={deskPressHandler}
            style={{
              position: "absolute",
              right: 350 - 180.5,
              top: 200 - 78.5,
              width: 9,
              height: 10,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#50bf8e",
                width: 5,
                height: 5,
                borderRadius: 5 / 2,
                marginLeft: 0.9,
              }}
            />
          </TouchableOpacity>
        </ReactNativeZoomableView>
      </View>
    </View>
  );
};

export default HomeScreen;
