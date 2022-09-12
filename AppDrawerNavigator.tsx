import React from "react";
import "react-native-gesture-handler";
import ProfileScreen from "./src/screens/Profile";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./src/screens/DrawerContent";
import HomeScreen from "./src/screens/Home";
import SettingScreen from "./src/screens/Setting";

export type RootStackParams = {
  ExploreStack: undefined;
  Profile: undefined;
  DrawerContent: undefined;
  Setting: undefined;
};

const Drawer = createDrawerNavigator<RootStackParams>();

function MainDrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{ swipeEnabled: false, headerShown: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigation;
