import {
  View,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
  PanResponderGestureState,
} from "react-native";
import React from "react";
import hero from "../../../assets/hero.png";
import { Text, BottomSheet, Artistic, Booking, Marker } from "../../components";
import {
  ReactNativeZoomableView,
  ZoomableViewEvent,
} from "@openspacelabs/react-native-zoomable-view";
import styles from "./styles";
import { MAP_HEIGHT, MAP_WIDTH } from "../../constants";
import homeController from "./controller";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const AnimatedSvg = Animated.createAnimatedComponent(Artistic);
const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const HomeScreen = () => {
  const {
    booked,
    bookingHandler,
    cancelHandler,
    deskPressHandler,
    svgRef,
    zoomableViewRef,
    bottomSheetRef,
  } = homeController();

  const scale = useSharedValue({
    offsetX: -70,
    offsetY: 165,
    originalWidth: 350,
    originalHeight: 200,
    originalPageX: -70,
    originalPageY: 165,
    zoomLevel: 1.0,
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value.zoomLevel,
        },
      ],
    };
  });

  const animatedProps = useAnimatedProps(() => {
    return {
      height: scale.value.originalHeight * scale.value.zoomLevel,
      width: scale.value.originalWidth * scale.value.zoomLevel,
    };
  });

  return (
    <View style={styles.container}>
      <Image source={hero} resizeMode="cover" style={styles.image} />
      <Text font="Semi-Bold" style={styles.welcome}>
        Welcome{" "}
        <Text color="primary" font="Semi-Bold">
          John
        </Text>
        ,
      </Text>

      <Text color="grey" font="Light" style={styles.subText}>
        Are you ready to book your next space ?
      </Text>

      <View style={styles.map}>
        <ReactNativeZoomableView
          maxZoom={20}
          minZoom={1}
          zoomStep={0.5}
          initialZoom={1}
          bindToBorders={false}
          style={styles.zoomableView}
          ref={zoomableViewRef}
          onZoomAfter={(
            event: GestureResponderEvent,
            gestureState: PanResponderGestureState,
            zoomableViewEventObject: ZoomableViewEvent
          ) => {
            console.log("onZoomAfter", zoomableViewEventObject);
            scale.value = zoomableViewEventObject;
          }}
        >
          <AnimatedSvg ref={svgRef} animatedProps={animatedProps} />

          <AnimatedView
            style={[
              animatedStyle,
              {
                // backgroundColor: "pink",
                width: MAP_WIDTH,
                height: MAP_HEIGHT,
                position: "absolute",
              },
            ]}
          >
            <AnimatedTouchable
              onPress={deskPressHandler}
              style={[styles.markerContainer]}
            >
              <Marker style={styles.marker} />
            </AnimatedTouchable>
          </AnimatedView>
        </ReactNativeZoomableView>
      </View>

      <Text color="grey" font="Light" style={styles.mapText}>
        Double Tap to Zoom
      </Text>

      {booked && <Booking />}

      <BottomSheet
        bookingHandler={bookingHandler}
        cancelHandler={cancelHandler}
        ref={bottomSheetRef}
      />
    </View>
  );
};

export default HomeScreen;
