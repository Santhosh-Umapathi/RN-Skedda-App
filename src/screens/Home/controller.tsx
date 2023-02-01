import { createRef, useRef, useState } from "react";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import GBottomSheet from "@gorhom/bottom-sheet";

const homeController = () => {
  const svgRef = useRef(null);
  const zoomableViewRef = createRef<ReactNativeZoomableView>();
  const bottomSheetRef = useRef<GBottomSheet>(null);

  const [booked, setBooked] = useState<boolean>(false);

  const deskPressHandler = () => bottomSheetRef.current?.expand();

  const bookingHandler = async () => {
    bottomSheetRef.current?.close();
    setBooked(true);
  };

  const cancelHandler = () => bottomSheetRef.current?.close();

  return {
    deskPressHandler,
    bookingHandler,
    cancelHandler,
    booked,
    zoomableViewRef,
    svgRef,
    bottomSheetRef,
  };
};

export default homeController;
