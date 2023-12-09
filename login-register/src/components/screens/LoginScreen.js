import { View, ImageBackground } from "react-native";
import React from "react";
import LoginForm from "../forms/LoginForm";

export default function LoginScreen(props) {
  return (
    <ImageBackground
      source={{ uri: "https://i.pinimg.com/1200x/e8/6a/c8/e86ac8ff57659f7d814b35470667ffdf.jpg" }}
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: Add a semi-transparent white background to make text readable
          padding: 20,
          borderRadius: 10, // Optional: Add border-radius for a rounded look
        }}
      >
        <LoginForm {...props} />
      </View>
    </ImageBackground>
  );
}
