import { View, Image, TouchableOpacity } from "react-native";
import React, { useRef, createRef, useState } from "react";
import hero from "../../../assets/hero.png";
import { Text, BottomSheet, Artistic, Booking, Marker } from "../../components";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import styles from "./styles";
import { MAP_HEIGHT, MAP_WIDTH } from "../../constants";
import GBottomSheet from "@gorhom/bottom-sheet";

const HomeScreen = () => {
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

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
          bindToBorders={true}
          style={styles.zoomableView}
          ref={zoomableViewRef}
        >
          <Artistic ref={svgRef} height={MAP_HEIGHT} width={MAP_WIDTH} />

          <TouchableOpacity
            onPress={deskPressHandler}
            style={styles.markerContainer}
          >
            <Marker style={styles.marker} />
          </TouchableOpacity>
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
