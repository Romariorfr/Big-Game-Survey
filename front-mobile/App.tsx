import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Play_400Regular,
  Play_700Bold,
} from "@expo-google-fonts/play";

export default function App() {
  const [fontsLoaded] = useFonts({
    Play_400Regular,
    Play_700Bold,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "blue",
    fontSize: 50,
  },
});
