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

const SignInPage = ({ navigation }) => {
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CodePage");
          }}
        >
          <Image
            style={styles.backArrow}
            source={require("../../assets/images/arrow-left.png")}
          />
        </TouchableOpacity>
        <Text style={styles.inputHeader}>SIGN In</Text>
        <View style={styles.emailContainer}>
          <TextInput placeholder="Email" />
        </View>
        <View style={[styles.emailContainer, styles.containerTwo]}>
          <TextInput placeholder="Password" />
          <Image
            style={styles.eyeImage}
            source={require("../../assets/images/eye.png")}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.lastText}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.btn}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MainScreen");
            }}
            style={styles.submitText}
          >
            <Text>Sign In My Account</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.signInText}>
              Already have an account? -
              <Text style={styles.boldSignIn}>Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.keycontainer}>
          <Text style={styles.key}>A</Text>
          <Text style={styles.key}>S</Text>
          <Text style={styles.key}>D</Text>
          <Text style={styles.key}>F</Text>
          <Text style={styles.key}>G</Text>
          <Text style={styles.key}>H</Text>
          <Text style={styles.key}>J</Text>
          <Text style={styles.key}>K</Text>
          <Text style={styles.key}>L</Text>
        </View>
        <View style={styles.keycontainer}>
          <Text style={styles.key}>Q</Text>
          <Text style={styles.key}>W</Text>
          <Text style={styles.key}>E</Text>
          <Text style={styles.key}>R</Text>
          <Text style={styles.key}>Y</Text>
          <Text style={styles.key}>T</Text>
          <Text style={styles.key}>U</Text>
          <Text style={styles.key}>I</Text>
          <Text style={styles.key}>O</Text>
          <Text style={styles.key}>P</Text>
        </View>
        <View style={styles.keycontainer}>
          <Text style={styles.key}>▲</Text>
          <Text style={styles.key}>Z</Text>
          <Text style={styles.key}>X</Text>
          <Text style={styles.key}>C</Text>
          <Text style={styles.key}>V</Text>
          <Text style={styles.key}>B</Text>
          <Text style={styles.key}>N </Text>
          <Text style={styles.key}>M</Text>
          <Text style={styles.key}>◄</Text>
        </View>
        <View style={styles.otherKeys}>
          <View style={styles.specialContainer}>
            <Text style={styles.specialKeys}>123</Text>
          </View>
          <View style={styles.spaceBar}>
            <Text style={styles.specialKeys}>Space</Text>
          </View>
          <View style={styles.specialContainer}>
            <Text style={styles.specialKeys}>Return</Text>
          </View>
        </View>
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
    marginLeft: 10,
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
  emailContainer: {
    flexDirection: "row",
    width: 300,
    marginLeft: 30,
    marginTop: 18,
    marginBottom: -15,
    height: 50,
    paddingLeft: 37,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.37)",
  },
  containerTwo: {
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
  },
  eyeImage: {
    marginRight: 15,
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
  btn: {
    marginTop: 70,
  },
  keycontainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  key: {
    width: 32,
    height: 42,
    fontSize: 20,
  },
  otherKeys: {
    flexDirection: "row",
    justifyContent: "center",
  },
  spaceBar: {
    width: 182,
    height: 42,
    backgroundColor: "#E9ECEF",
    borderRadius: 4.6,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
  },
  specialContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  specialKeys: {
    fontSize: 16,
  },
});

export default SignInPage;
