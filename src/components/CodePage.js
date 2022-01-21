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

const CodePage = () => {
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
        <Text style={styles.inputHeader}>Enter Code</Text>
        <Text style={styles.lastText}>We sent it to +2349022946610</Text>
        <View style={styles.codeContainer}>
          <View style={styles.codeInput}>
            <TextInput />
          </View>
          <View style={styles.codeInput}>
            <TextInput />
          </View>
          <View style={styles.codeInput}>
            <TextInput />
          </View>
          <View style={styles.codeInput}>
            <TextInput />
          </View>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity>
            <Text style={styles.btnText}>New code 1:24</Text>
          </TouchableOpacity>
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
    marginLeft: 5,
  },
  backArrow: {
    marginTop: 58,
    marginLeft: 26,
  },

  inputHeader: {
    paddingLeft: 30,
    marginTop: 44,
    fontSize: 32,
    lineHeight: 40,
    color: "#212529",
  },
  lastText: {
    paddingLeft: 30,
    marginTop: 2,
    fontSize: 16,
    lineHeight: 24,
    color: "#ADB5BD",
  },
  codeInput: {
    width: 54,
    height: 56,
    marginLeft: -30,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(252, 239, 239, 0.12)",
    borderRadius: 8,
  },
  codeContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 30,
    marginTop: 60,
    justifyContent: "space-evenly",
  },
  btn: {
    marginTop: 120,
    width: 300,
    height: 56,
    marginLeft: 30,
    borderRadius: 16,
    backgroundColor: "#5EFFE2",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#161515",
  },
});
export default CodePage;
