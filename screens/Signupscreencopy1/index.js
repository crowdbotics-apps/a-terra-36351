import { Pressable } from "react-native";
import React from "react";
import { Text, ScrollView, View, Image, StyleSheet, TextInput, TouchableHighlight, ImageBackground } from "react-native";

const pressed = ({
  navigation
}) => {
  console.log("pressed");
};

const Signup = ({
  navigation
}) => {
  return <ScrollView style={styles.container}>
      <View style={styles.heading}>
        <ImageBackground style={{
        width: 100,
        height: 100,
        left: 0,
        top: 0
      }} source={{
        uri: "data:image/png;base64,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"
      }} />
      </View>
      <View>
        <View style={styles.emailContainer}>
          
          <Input placeholder='Type your email' />
        </View>
        <View style={{
        marginBottom: 10
      }}>
          
          <Input placeholder='Type your password' />
        </View>
        <Pressable onPress={({
        navigation
      }) => navigation.navigate("Updatepasswordcopy1")}><Text style={{
          textAlign: "right",
          left: 0,
          top: 92,
          width: 169,
          height: 29
        }}>Forgot Password</Text></Pressable>
        <View style={styles.loginContainer}>
          <Button onPress={pressed}>Sign up</Button>
        </View>
        <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate("Signupscreen")}><Text style={{
            left: 132,
            top: 0,
            width: 37,
            height: 32
          }}>Sign up</Text></Pressable>
      </View>
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.iconContainer}>
            <Image source="" style={styles.icon} />
          </View>
          <View style={styles.iconContainer}>
            <Image source="" style={styles.icon} />
          </View>
          <View style={styles.iconContainer}>
            <Image source="" style={styles.icon} />
          </View>
        </View>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: "#fff"
  },
  heading: {
    alignSelf: "center"
  },
  headingText: {
    fontSize: 42,
    fontWeight: "500"
  },
  emailContainer: {
    marginBottom: 10
  },
  mr10: {
    marginRight: 10,
    marginBottom: 10
  },
  mb20: {
    marginBottom: 20
  },
  forgotPassword: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40
  },
  loginContainer: {
    width: "80%",
    alignSelf: "center"
  },
  orContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
    alignSelf: "center"
  },
  line: {
    height: 1,
    width: 100,
    backgroundColor: "rgba(0, 0, 0, 0.05)"
  },
  orText: {
    marginVertical: 40,
    alignSelf: "center",
    fontSize: 16,
    color: "#231F20",
    opacity: 0.5
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    alignSelf: "center",
    justifyContent: "space-between"
  },
  iconContainer: {
    height: 40,
    width: 40,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F7F7F7"
  },
  icon: {
    height: 18,
    width: 18
  },
  footerContainer: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "row"
  },
  footerText: {
    color: "#6B6B6B"
  }
});
export default Signup;

const Button = props => {
  return <TouchableHighlight onPress={props.onPress} underlayColor='#DDDDDD'>
      <View style={[btnStyles.button, {
      backgroundColor: props.backgroundColor ? props.backgroundColor : "#000000",
      height: props.height ? props.height : 20,
      borderWidth: props.borderWidth ? props.borderWidth : 0,
      borderColor: props.borderColor ? props.borderColor : "#000000"
    }]}>
        <Text style={[btnStyles.text, {
        color: props.color ? props.color : "#ffffff"
      }]}>{props.children}</Text>
      </View>
    </TouchableHighlight>;
};

const btnStyles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  text: {
    fontWeight: "bold",
    fontSize: 15
  }
});

const Input = props => {
  return <View>
      <TextInput style={textStyles.input} placeholder={props.placeholder} value={props.value} onChangeText={num => props.setValue(num)} placeholderTextColor='#ddd' editable={props.editable !== false} />
      {props.errorText ? <Text style={textStyles.error}>{props.errorText}</Text> : null}
    </View>;
};

const textStyles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    height: 36,
    borderColor: "#C4C4C4",
    color: "#000",
    borderRadius: 10,
    fontSize: 14,
    borderWidth: 1,
    paddingHorizontal: 10
  },
  error: {
    fontSize: 13,
    color: "#FA060D",
    paddingTop: 8
  }
});