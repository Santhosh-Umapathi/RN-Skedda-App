import { StyleSheet } from "react-native";
import { Colors } from "../../theme";

const styles = StyleSheet.create({
  container: { paddingLeft: 16, marginTop: 20 },
  text: { fontSize: 16 },
  markerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    height: 80,
    backgroundColor: Colors.background,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: "center",
  },
  marker: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    marginRight: 4,
    marginTop: 3,
  },
  bookingText: {
    fontSize: 14,
  },
});

export default styles;
