import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import hero from "../../../assets/hero.png";
import { Text, BottomSheet, Artistic, Booking, Marker } from "../../components";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import styles from "./styles";
import homeController from "./controller";
import Animated from "react-native-reanimated";

//Creating Animated Components
const AnimatedSvg = Animated.createAnimatedComponent(Artistic);
const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const HomeScreen = () => {
  // This controller hook handles all the UI Logics
  const {
    booked,
    bookingHandler,
    cancelHandler,
    deskPressHandler,
    svgRef,
    zoomableViewRef,
    bottomSheetRef,
    onZoomBefore,
    onDoubleTapBefore,
    onTransform,
    scale,
    animatedProps,
    animatedStyle,
  } = homeController();

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
      {/* Magic Happens Here */}
      <View style={styles.map}>
        <ReactNativeZoomableView
          maxZoom={20}
          minZoom={1}
          zoomStep={0.5}
          initialZoom={1}
          bindToBorders={false}
          style={styles.zoomableView}
          ref={zoomableViewRef}
          onZoomBefore={onZoomBefore}
          onDoubleTapBefore={onDoubleTapBefore}
          onTransform={onTransform}
        >
          <AnimatedSvg ref={svgRef} animatedProps={animatedProps} />

          <AnimatedView style={[animatedStyle, styles.mapWrapper]}>
            <AnimatedTouchable
              onPress={deskPressHandler}
              style={styles.markerContainer}
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
