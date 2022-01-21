import React from "react";

import {
  View,
  ImageBackground,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
const FundWallet = ({ navigation }) => {
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
            navigation.navigate("More");
          }}
        >
          <Image
            style={styles.backArrow}
            source={require("../../assets/images/arrow-left.png")}
          />
        </TouchableOpacity>
        <Text style={styles.transferText}>FUND WALLET FROM BANK</Text>
        <View style={styles.sectionContainer}>
          <Text style={styles.amount}>AMOUNT</Text>
          <Text style={styles.figure}>N0.00</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SuccessfulPage");
              }}
            >
              <View style={styles.btn}>
                <Text>N100.00</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SuccessfulPage");
              }}
            >
              <View style={styles.btn}>
                <Text>N500.00</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SuccessfulPage");
              }}
            >
              <View style={styles.btn}>
                <Text>N1000.00</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.pinText}>PIN</Text>
          <View style={styles.codeContainer}>
            <TouchableOpacity>
              <View style={styles.pin}>
                <Text style={styles.star}>*</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.pin}>
                <Text style={styles.star}>*</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.pin}>
                <Text style={styles.star}>*</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.pin}>
                <Text style={styles.star}>*</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <View style={styles.number}>
              <Text style={styles.numberText}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.number}>
              <Text style={styles.numberText}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.number}>
              <Text style={(styles, styles.numberText)}>3 </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <View style={styles.number}>
              <Text style={styles.numberText}>4</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.number}>
              <Text style={styles.numberText}>5</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.number}>
              <Text style={(styles, styles.numberText)}>6 </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <View style={styles.number}>
              <Text style={styles.numberText}>7</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.number}>
              <Text style={styles.numberText}>8</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.number}>
              <Text style={(styles, styles.numberText)}>9</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity>
            <View style={styles.number}>
              <Image
                source={require("../../assets/images/clear.png")}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.number}>
              <Text style={styles.numberText}>0</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.number}>
              <Image
                source={require("../../assets/images/circle_check.png")}
                style={styles.icon}
              />
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
    marginTop: 20,
    marginLeft: 26,
  },
  transferText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 26,
  },
  sectionContainer: {
    width: 400,
    height: 207,
    backgroundColor: "rgba(94, 255, 226, 0.27)",
    marginTop: 12,
  },
  amount: {
    textAlign: "center",
    opacity: 0.7,
    fontSize: 20,
    paddingTop: 40,
    marginLeft: -60,
  },
  figure: {
    fontSize: 32,
    textAlign: "center",
    marginLeft: -50,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 40,
    marginTop: 35,
  },
  btn: {
    width: 86,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  bottomContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 17,
  },
  codeContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  pinText: {
    fontSize: 24,
  },
  pin: {
    width: 52,
    height: 52,
    backgroundColor: "rgba(255, 255, 255, 0.38)",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  star: {
    color: "#1A1A1A",
    fontSize: 40,
  },
  buttons: {
    flexDirection: "row",

    justifyContent: "center",
    marginTop: 4,
    borderRadius: 10,
  },
  number: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 0.41)",
    borderStyle: "solid",
    borderColor: "#96F8E0",
    borderWidth: 1,
    marginRight: 15,
  },
  numberText: {
    fontSize: 24,
  },
  buttonImage: {
    justifyContent: "center",
    alignItems: "center",
    width: 64,
    height: 64,
  },
});
export default FundWallet;
