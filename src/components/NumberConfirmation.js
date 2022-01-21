import React from "react";
import { globalStyles } from "../../styles/global";
import {
  View,
  TextInput,
  ScrollView,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const NumberConfirmation = ({ navigation }) => {
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
            navigation.navigate("Form");
          }}
        >
          <Image
            style={styles.backArrow}
            source={require("../../assets/images/arrow-left.png")}
          />
        </TouchableOpacity>
        <Text style={styles.inputHeader}>Enter your phone number</Text>
        <View style={styles.box}></View>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.flag}>
            <Image source={require("../../assets/images/nigeria.png")} />
          </TouchableOpacity>
          <TextInput placeholder="+2349022946610" style={styles.input} />
          <TouchableOpacity style={styles.clear}>
            <Image source={require("../../assets/images/clear.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CodePage");
            }}
          >
            <Text style={styles.btnText}>continue</Text>
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
    fontWeight: "bold",
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
    lineHeight: 40,
    color: "#212529",
  },
  box: {
    marginTop: 55,
    width: 25,
    height: 19,
    backgroundColor: "#FFFFFF",
    marginLeft: 50,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 7,
    marginLeft: 30,
    borderRadius: 16,
    backgroundColor: "#F8F9FA",
    width: 300,
    height: 56,
  },
  flag: {
    marginLeft: 16,
  },
  input: {
    marginLeft: -45,
    fontSize: 16,
    lineHeight: 24,
    color: "#212529",
  },
  clear: {
    marginRight: 15,
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

export default NumberConfirmation;
