import { View, Text, Image, StatusBar } from "react-native";
import React, { forwardRef, useRef } from "react";
import hero from "../../../assets/hero.png";
import { Artistic } from "../../components";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

type Props = {};

const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedSvg = Animated.createAnimatedComponent(Artistic);

const HomeScreen = (props: Props) => {
  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const svgRef = useRef(null);

  const pinGestureEvent =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onActive: (event) => {
        console.log("onActive", event);
        scale.value = event.scale;
      },
    });

  const panGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onActive: (event) => {
        translateX.value = event.translationX;
        translateY.value = event.translationY;
      },
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value < 1 ? 1 : scale.value }],
    };
  });
  const animatedPanStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

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
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <AnimatedView
          style={[
            // animatedPanStyle,
            // animatedStyle,
            { marginTop: 20, overflow: "hidden" },
          ]}
        >
          <PinchGestureHandler onGestureEvent={pinGestureEvent}>
            <AnimatedView
              style={[animatedStyle, animatedPanStyle, { height: 200 }]}
            >
              <AnimatedSvg ref={svgRef} height={200} />
            </AnimatedView>
          </PinchGestureHandler>
        </AnimatedView>
      </PanGestureHandler>
    </View>
  );
};

export default HomeScreen;
