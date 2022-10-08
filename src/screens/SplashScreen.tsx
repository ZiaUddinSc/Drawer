import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, Animated, Easing } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function SplashScreen({ navigation }) {
  const backgroundFade = useRef(new Animated.Value(0)).current;
  const logoFade = useRef(new Animated.Value(0)).current;
  const logoMovement = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(backgroundFade, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(logoFade, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      Animated.timing(logoMovement, {
        toValue: -250,
        duration: 2000,
        easing: Easing.inOut(Easing.exp),
        useNativeDriver: true,
      }).start();
      setTimeout(() => {
        authUser();
      }, 1000);
    }, 2000);
  }, []);

  const authUser = async () => {
    try {
      AsyncStorage.getItem("userData").then((value) =>
        navigation.replace(value === null ? "Login" : "TabNavigator")
      );
    } catch (error) {
      console.log(error);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#002D53",
      opacity: backgroundFade,
    },
    logo: {
      color: "white",
      fontSize: 48,
      fontWeight: "bold",
      opacity: logoFade,
      transform: [{ translateY: logoMovement }],
    },
  });
  return (
    <Animated.View style={styles.container}>
      <Animated.Text style={styles.logo}>Logo</Animated.Text>
    </Animated.View>
  );
}
