import { View, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import SignupForm from "../forms/SignupForm";

const RegisterScreen = (props) => {
  return (
    <ImageBackground
      source={{ uri: "https://e1.pxfuel.com/desktop-wallpaper/486/111/desktop-wallpaper-minimal-space-phone-in-2020-minimal-space-mobile-thumbnail.jpg" }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <SignupForm {...props} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or "stretch" for different cover modes
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
});

export default RegisterScreen;
