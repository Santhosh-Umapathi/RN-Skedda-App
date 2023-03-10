import { View } from "react-native";
import React, { forwardRef, useCallback } from "react";
import GBottomSheet, { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";

import bottomSheetController from "./controller";
import styles from "./styles";
import Text from "../Text";
import { Book, Cancel } from "../Buttons";
import TProps, { TRef } from "./types";
import { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import Marker from "../Marker";

const BottomSheet = forwardRef(
  ({ bookingHandler, cancelHandler }: TProps, ref: TRef) => {
    const { snapPoints } = bottomSheetController();

    const Backdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={1}
        />
      ),
      []
    );

    return (
      <GBottomSheet
        animateOnMount
        index={-1}
        ref={ref}
        snapPoints={snapPoints}
        backgroundStyle={styles.background}
        backdropComponent={Backdrop}
      >
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Marker style={styles.marker} />
            <Text font="Semi-Bold" color="secondary" style={styles.text}>
              Desk 68
            </Text>
          </View>
          <Text color="grey" font="Light" style={styles.subTextTwo}>
            This space is Available
          </Text>
          <Text color="grey" font="Light" style={styles.subText}>
            Proceed to book this space ?
          </Text>
          <View style={styles.buttonContainer}>
            <Cancel onPress={cancelHandler} />
            <Book onPress={bookingHandler} />
          </View>
        </View>
      </GBottomSheet>
    );
  }
);

export default BottomSheet;
