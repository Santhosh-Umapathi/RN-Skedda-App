import { StyleSheet } from "react-native";
import { MAP_HEIGHT, MAP_WIDTH } from "../../constants";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 100,
    marginBottom: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    fontSize: 20,
    paddingLeft: 16,
  },
  subText: {
    marginTop: 10,
    fontSize: 14,
    paddingLeft: 16,
  },
  map: {
    marginTop: 20,
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  zoomableView: { width: 500 },
  markerContainer: {
    position: "absolute",
    right: MAP_WIDTH - 180.5,
    top: MAP_HEIGHT - 78.5,
    width: 9,
    height: 10,
    justifyContent: "center",
  },
  marker: {
    width: 5,
    height: 5,
    borderRadius: 5 / 2,
    marginLeft: 0.9,
  },
  mapText: {
    marginBottom: 10,
    fontSize: 10,
    marginTop: 4,
    width: "100%",
    textAlign: "center",
  },
});

export default styles;
