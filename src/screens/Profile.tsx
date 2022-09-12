import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import TopDrawerNavigation from "../components/TopDrawerNavigation";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <TopDrawerNavigation />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.screenTitle}>Profile Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenTitle: { fontSize: 50, color: "#002D53" },
});

export default ProfileScreen;
