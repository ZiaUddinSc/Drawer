import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MainDrawerNavigation from "./AppDrawerNavigator";
import ProfileScreen from "./src/screens/Profile";
import SettingScreen from "./src/screens/Setting";
import SettingIcon from "./src/icons/Setting";
import ProfileIcon from "./src/icons/ProfileIcon";
import HomeIcon from "./src/icons/HomeIcon";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#AD40AF" },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "yellow",
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainDrawerNavigation}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: "#AD40AF",
          },
          tabBarIcon: ({ color, size }) => (
            // <Ionicons name="home-outline" color={color} size={size} />
            <HomeIcon color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          // tabBarBadge: 3,
          // tabBarBadgeStyle: { backgroundColor: "yellow" },
          tabBarIcon: ({ color, size }) => <ProfileIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color, size }) => <SettingIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = (route) => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  // console.log(routeName);

  if (routeName == "GameDetails") {
    return "none";
  }
  return "flex";
};

export default TabNavigator;
