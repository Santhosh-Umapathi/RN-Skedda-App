import { View } from "react-native";
import React from "react";
import Text from "../Text";
import Marker from "../Marker";
import styles from "./styles";

const Booking = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Today's Bookings</Text>
    <View style={styles.markerContainer}>
      <Marker style={styles.marker} />
      <Text font="Light" style={styles.bookingText}>
        Desk 68
      </Text>
    </View>
  </View>
);

export default Booking;
