import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import React from "react";
import TopDrawerNavigation from "../components/TopDrawerNavigation";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#001AFF" barStyle={"light-content"} />
      <TopDrawerNavigation />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.screenTitle}>Home Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenTitle: { fontSize: 50, color: "#002D53" },
});

export default HomeScreen;
