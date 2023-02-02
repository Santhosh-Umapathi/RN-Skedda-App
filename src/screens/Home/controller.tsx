import { createRef, useRef, useState, useCallback } from "react";
import {
  ReactNativeZoomableView,
  ZoomableViewEvent,
} from "@openspacelabs/react-native-zoomable-view";
import GBottomSheet from "@gorhom/bottom-sheet";
import { GestureResponderEvent, PanResponderGestureState } from "react-native";
import {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const homeController = () => {
  const [booked, setBooked] = useState<boolean>(false);
  const svgRef = useRef(null);
  const zoomableViewRef = createRef<ReactNativeZoomableView>();
  const bottomSheetRef = useRef<GBottomSheet>(null);

  // initial zoomable object values
  const scale = useSharedValue({
    offsetX: -70,
    offsetY: 165,
    originalWidth: 350,
    originalHeight: 200,
    originalPageX: -70,
    originalPageY: 165,
    zoomLevel: 1.0,
  });

  const deskPressHandler = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const bookingHandler = useCallback(async () => {
    bottomSheetRef.current?.close();
    setBooked(true);
  }, []);

  const cancelHandler = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const onZoomBefore = (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent
  ) => {
    scale.value = zoomableViewEventObject;
    return false;
  };

  const onDoubleTapBefore = (
    event: GestureResponderEvent,
    zoomableViewEventObject: ZoomableViewEvent
  ) => {
    scale.value = zoomableViewEventObject;
    return false;
  };

  const onTransform = (zoomableViewEventObject: ZoomableViewEvent) => {
    scale.value = zoomableViewEventObject;
    return false;
  };

  // const onShiftingBefore=(
  //   event: GestureResponderEvent,
  //   gestureState: PanResponderGestureState,
  //   zoomableViewEventObject: ZoomableViewEvent
  // ) => {
  //   console.log("onShiftingBefore");
  //   scale.value = zoomableViewEventObject;
  //   return false;
  // }}

  // Used for Wrapper Overlay
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value.zoomLevel,
        },
      ],
    };
  });

  // Used for SVG without losing quality
  const animatedProps = useAnimatedProps(() => {
    return {
      height: scale.value.originalHeight * scale.value.zoomLevel,
      width: scale.value.originalWidth * scale.value.zoomLevel,
    };
  });

  return {
    deskPressHandler,
    bookingHandler,
    cancelHandler,
    booked,
    zoomableViewRef,
    svgRef,
    bottomSheetRef,
    onZoomBefore,
    onDoubleTapBefore,
    onTransform,
    scale,
    animatedStyle,
    animatedProps,
  };
};

export default homeController;
