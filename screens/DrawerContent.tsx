import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import BackIcon from "../icons/BackIcon";
import ProfileIcon from "../icons/ProfileIcon";
import SettingIcon from "../icons/Setting";
import LogoutIcon from "../icons/Logout";

const DrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.toggleDrawer()}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <BackIcon />
        <Text style={styles.screenTitle}>Menu</Text>
      </TouchableOpacity>
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#000000",
          marginVertical: 20,
        }}
      />

      <TouchableOpacity
        onPress={() => props.navigation.navigate("Profile")}
        style={styles.button}
      >
        <ProfileIcon />
        <Text style={[styles.screenTitle, { color: "#000" }]}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Setting")}
        style={styles.button}
      >
        <SettingIcon />
        <Text style={[styles.screenTitle, { color: "#000" }]}>Setting</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.toggleDrawer();
          Alert.alert(
            "Logout",
            "Are you sure? You want to logout?",
            [
              {
                text: "Cancel",
                onPress: () => {
                  return null;
                },
              },
              {
                text: "Confirm",
                onPress: async () => {
                  await AsyncStorage.clear();
                  props.navigation.navigate("Login");
                },
              },
            ],
            { cancelable: false }
          );
        }}
        style={styles.button}
      >
        <LogoutIcon />
        <Text style={[styles.screenTitle, { color: "#000" }]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  screenTitle: {
    fontSize: 18,
    fontWeight: "400",
    color: "#384CFF",
    marginLeft: 8,
  },
  button: { flexDirection: "row", alignItems: "center", height: 60 },
});

export default DrawerContent;
