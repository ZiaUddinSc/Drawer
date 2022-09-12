import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainDrawerNavigation from "./AppDrawerNavigator";
import Login from "./src/screens/Login";
import SplashScreen from "./src/screens/SplashScreen";

type RootStackParamList = {
  Login: undefined;
  MainDrawerNavigation: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const Root = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen
          screenOptions={{ headerShown: false }}
          name="MainDrawerNavigation"
          component={MainDrawerNavigation}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Root;
