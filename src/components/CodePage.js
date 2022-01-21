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

const CodePage = ({ navigation }) => {
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
            navigation.navigate("NumberConfirmation");
          }}
        >
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignInPage");
            }}
          >
            <Text style={styles.btnText}>New code 1:24</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numberContainer}>
          <TouchableOpacity>
            <View style={styles.number}>
              <Text style={styles.bigText}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.number}>
              <Text style={styles.bigText}>2</Text>
              <Text style={styles.smallText}>ABC</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.number}>
              <Text style={styles.bigText}>3</Text>
              <Text style={styles.smallText}>DEF</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.numberContainer, styles.numberContainerTwo]}>
          <TouchableOpacity>
            <View style={styles.number}>
              <Text style={styles.bigText}>4</Text>
              <Text style={styles.smallText}>GHI</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.number}>
              <Text style={styles.bigText}>5</Text>
              <Text style={styles.smallText}>JKL</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.number}>
              <Text style={styles.bigText}>6</Text>
              <Text style={styles.smallText}>MNO</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.numberContainer, styles.numberContainerTwo]}>
          <TouchableOpacity>
            <View style={styles.number}>
              <Text style={styles.bigText}>7</Text>
              <Text style={styles.smallText}>PQRS</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.number}>
              <Text style={styles.bigText}>8</Text>
              <Text style={styles.smallText}>TUV</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.number}>
              <Text style={styles.bigText}>9</Text>
              <Text style={styles.smallText}>WXYZ</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.lastBtn}>
          <TouchableOpacity>
            <View style={styles.number}>
              <Text style={styles.bigText}>9</Text>
              <Text style={styles.smallText}>WXYZ</Text>
            </View>
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
  numberContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 42,
    justifyContent: "center",
    paddingLeft: 6,
  },
  numberContainerTwo: {
    marginTop: 3,
  },
  number: {
    height: 46,
    width: 114,
    marginRight: 4,
    backgroundColor: " rgba(255, 255, 255, 0.78)",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  bigText: {
    fontSize: 25,
  },
  smallText: {
    fontSize: 10,
    paddingBottom: 10,
  },
  lastBtn: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 3,
    marginLeft: 2,
  },
});
export default CodePage;
