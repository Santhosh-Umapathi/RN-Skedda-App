import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/screens";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "SofiaPro-Light": require("./assets/fonts/SofiaPro-Light.otf"),
    "SofiaPro-Regular": require("./assets/fonts/SofiaPro-Regular.otf"),
    "SofiaPro-Semi-Bold": require("./assets/fonts/SofiaPro-Semi-Bold.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent={true}
        animated
      />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
