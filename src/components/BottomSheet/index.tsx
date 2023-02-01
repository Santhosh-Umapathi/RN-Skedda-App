import { View } from "react-native";
import React, { forwardRef, useCallback } from "react";
import GBottomSheet, { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";

import bottomSheetController from "./controller";
import styles from "./styles";
import Text from "../Text";
import Cancel from "../Buttons/Cancel";
import Book from "../Buttons/Book";
import TProps, { TRef } from "./types";
import { BottomSheetBackdrop } from "@gorhom/bottom-sheet";

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
          <Text font="Semi-Bold" color="secondary" style={styles.text}>
            Desk 68
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
