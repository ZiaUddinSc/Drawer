/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import React, { FC } from "react";
import EyeClose from "../icons/EyeClose";
import Eye from "../icons/Eye";
const width = Dimensions.get("window").width;

interface Input {
  placeholder: string;
  Width: any;
  onChangeText: () => void;
  value: string;
  keyboardType: any;
  secureTextEntry: boolean;
  InputIcon: any;
  showPassword: () => void;
  password: any;
  error: any;
  Picker_Button: () => void;
  onFocus: () => void;
}

const Input: FC<Input> = ({
  placeholder,
  Width,
  onChangeText,
  value,
  keyboardType,
  secureTextEntry,
  InputIcon,
  showPassword = () => {},
  password,
  error,
  Picker_Button = () => {},
  onFocus = () => {},
}) => {
  const { content, input, number_btn, text } = styles;
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <KeyboardAvoidingView behavior="position">
      <View
        style={[
          content,
          {
            borderBottomColor: error ? 1 : null,
            marginBottom: error ? 5 : 15,
            width: Width,
          },
        ]}
      >
        <TextInput
          placeholderTextColor={"black"}
          placeholder={placeholder}
          style={[
            input,
            {
              width: Width,
              borderBottomColor: error ? "red" : isFocused ? "gray" : "gray",
            },
          ]}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
        />
        {password ? (
          <>
            {secureTextEntry ? (
              <TouchableOpacity
                onPress={showPassword}
                style={{ position: "absolute", right: 10 }}
              >
                <Eye />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={showPassword}
                style={{ position: "absolute", right: 10 }}
              >
                <EyeClose />
              </TouchableOpacity>
            )}
          </>
        ) : null}
      </View>
      {error && (
        <Text style={{ marginBottom: 10, color: "red", fontSize: 12 }}>
          {error}
        </Text>
      )}
    </KeyboardAvoidingView>
  );
};

export default Input;

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    height: 51,
    fontSize: 20,
    fontWeight: "400",
    color: "black",
    borderBottomWidth: 1,
  },
  number_btn: {
    height: 51,
    width: 60,
    backgroundColor: "sky",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: "500",
  },
});
