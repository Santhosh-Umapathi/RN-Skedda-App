import { StyleSheet } from "react-native";
import { Colors } from "../../theme";

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.white,
  },
  container: { flex: 1 },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  subText: {
    marginBottom: 10,
    fontSize: 14,
    paddingLeft: 16,
  },
  subTextTwo: {
    marginBottom: 30,
    fontSize: 12,
    width: "100%",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 16,
    justifyContent: "space-between",
    marginTop: 10,
  },
  titleContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  marker: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    marginRight: 6,
    marginBottom: 3,
  },
});

export default styles;
