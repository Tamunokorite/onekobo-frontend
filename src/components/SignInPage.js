import React from "react";
import {
  ImageBackground,
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const SignInPage = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/form-bg.png")}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.formHeader}>
          <Text style={styles.time}>19:02</Text>
          <View style={styles.headerIcons}>
            <Image source={require("../../assets/images/reception.png")} />
            <Image
              source={require("../../assets/images/wifi.png")}
              style={styles.icon}
            />
            <Image
              source={require("../../assets/images/battery.png")}
              style={styles.icon}
            />
          </View>
        </View>

        <TouchableOpacity>
          <Image
            style={styles.backArrow}
            source={require("../../assets/images/arrow-left.png")}
          />
        </TouchableOpacity>
        <Text style={styles.inputHeader}>SIGN In</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputText}>
            <TextInput placeholder="Email" />
          </View>
        </View>
        <View style={styles.inputContainerTwo}>
          <View style={styles.inputTextTwo}>
            <TextInput placeholder="Password" />
            <TouchableOpacity style={styles.inputIcon}>
              <Image source={require("../../assets/images/eye.png")} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.lastText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitText}>
          <Text>Sign Up My Account</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signInText}>
            Don't have an account? -
            <Text style={styles.boldSignIn}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    flex: 1,
  },
  formHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerIcons: {
    marginTop: 10,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  time: {
    marginTop: 5,
    paddingLeft: 20,
  },
  icon: {
    marginLeft: 5,
  },
  backArrow: {
    marginTop: 58,
    marginLeft: 26,
  },
  inputHeader: {
    paddingLeft: 15,
    marginTop: 44,
    fontSize: 32,
    lineHeight: 48,
  },
  inputContainer: {
    flexDirection: "row",
    width: 300,
    marginLeft: 30,
    marginTop: 18,
    marginBottom: -15,
    height: 50,
    paddingLeft: 37,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.37)",
    alignItems: "center",
  },
  inputText: {
    marginLeft: -15,
  },
  inputContainerTwo: {
    width: 300,
    marginLeft: 30,
    backgroundColor: "rgba(255, 255, 255, 0.37)",
    height: 50,
    marginTop: 20,
    borderRadius: 10,
  },
  inputTextTwo: {
    flexDirection: "row",
    marginLeft: 20,
    paddingTop: 10,
  },
  inputIcon: {
    marginLeft: 170,
    marginTop: 10,
  },
  lastText: {
    paddingLeft: 220,
    marginTop: 25,
    fontSize: 12,
    lineHeight: 15,
    color: "#1C1939CC",
  },
  submitText: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#5EFFE2",
    width: 300,
    height: 60,
    borderRadius: 10,
    marginLeft: 30,
    fontSize: 17,
    lineHeight: 22,
    color: "#111010",
  },
  signInText: {
    marginTop: 9,
    fontSize: 12,
    lineHeight: 15,
    color: "#1C1939CC",
    justifyContent: "center",
    paddingLeft: 82,
  },
  boldSignIn: {
    fontWeight: "bold",
  },
});
export default SignInPage;
