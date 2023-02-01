import { StyleSheet } from "react-native";
import { Colors } from "../../theme";

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.white,
  },
  container: { flex: 1 },
  text: {
    marginBottom: 20,
    fontSize: 20,
    width: "100%",
    textAlign: "center",
  },
  subText: {
    marginBottom: 10,
    fontSize: 14,
    paddingLeft: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 16,
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default styles;
