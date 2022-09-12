import React, { FC, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Keyboard,
} from "react-native";
import Input from "../components/Input";
import AsyncStorage from "@react-native-async-storage/async-storage";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

interface LoginScreen {}

const LoginScreen: FC<LoginScreen> = (props) => {
  const [secureText, setSecureText] = useState(true);

  const [inputs, setInputs] = React.useState({ username: "", password: "" });
  const [errors, setErrors] = React.useState({});

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.username) {
      handleError("Please input username", "username");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    }
    if (isValid) {
      onLogin();
    }
  };

  const onLogin = async () => {
    if (inputs.username === "user" || inputs.password === "123") {
      AsyncStorage.setItem("userData", inputs.username);
      props.navigation.navigate("MainDrawerNavigation");
    } else {
      alert("user name and password not match");
    }
  };

  const showPassword = () => {
    if (secureText) {
      setSecureText(false);
    } else {
      setSecureText(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF" barStyle={"dark-content"} />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <Text style={{ fontSize: 30, textAlign: "center", marginBottom: 50 }}>
          LOGO
        </Text>
        <View
          style={{
            height: windowHeight / 1.5,
            backgroundColor: "#FFF",
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            padding: 20,
          }}
        >
          <Text style={{ color: "#002D53", fontSize: 20, fontWeight: "500" }}>
            Login
          </Text>
          <Input
            Width={windowWidth / 1.3}
            placeholder="username"
            onChangeText={(text) => handleOnchange(text, "username")}
            onFocus={() => handleError(null, "username")}
            error={errors.username}
          />
          <Input
            Width={windowWidth / 1.3}
            placeholder="password"
            secureTextEntry={secureText}
            showPassword={showPassword}
            password
            onChangeText={(text) => handleOnchange(text, "password")}
            onFocus={() => handleError(null, "password")}
            error={errors.password}
          />

          <TouchableOpacity onPress={validate} style={styles.button}>
            <Text style={styles.btn_text}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F0E3",
    justifyContent: "flex-end",
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: "bold",
  },
  button: {
    width: 170,
    height: 48,
    backgroundColor: "#002D53",
    borderRadius: 22.5,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: windowHeight / 16,
  },
  btn_text: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default LoginScreen;
