import { Text, View, StyleSheet } from "react-native";
import {Link }from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
    <Link href={"/(tabs)/notification"}>Visit profile</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24, // Font size increased
    fontWeight: "bold", // Optional: Makes text bold
    color: "#333", // Optional: Changes text color
  },
});
