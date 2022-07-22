import { Text } from "react-native";
import React from "react";
import { View, ImageBackground } from "react-native";

const Splash = () => {
  return <View style={{
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
        <ImageBackground source="https://d3tklmlrp1a8c2.cloudfront.net/media/components/screens/react-native-splash.png" resizeMode="contain" style={{
      flex: 1,
      justifyContent: "center"
    }}>
        </ImageBackground>
      <View style={{
      left: 39,
      top: 243,
      position: "absolute",
      height: 45,
      width: 132,
      backgroundColor: "#181b3b",
      borderRadius: 13,
      color: "#777777",
      borderColor: "#ffffff",
      borderWidth: 1
    }}></View><Text style={{
      left: 86,
      top: 256,
      position: "absolute",
      width: 63,
      height: 22,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      color: "#ffffff"
    }}>Sign in</Text><View style={{
      left: 39,
      top: 292,
      position: "absolute",
      height: 45,
      width: 132,
      backgroundColor: "#181b3b",
      borderRadius: 13,
      color: "#777777",
      borderColor: "#ffffff",
      borderWidth: 1
    }}></View><Text style={{
      left: 79,
      top: 306,
      position: "absolute",
      width: 76,
      height: 32,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      color: "#ffffff"
    }}>Sign up</Text></View>;
};

export default Splash;