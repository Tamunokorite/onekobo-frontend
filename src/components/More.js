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

const More = ({ navigation }) => {
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
        <View style={styles.sectionHeader}>
          <Image
            source={require("../../assets/images/arrow-left.png")}
            style={styles.backArrow}
          />
          <View>
            <Image
              source={require("../../assets/images/graph.png")}
              style={styles.graph}
            />
          </View>
        </View>
        <View style={styles.paymentInfo}>
          <Text style={styles.paymentText}>BALANCE:N15,500</Text>

          <Text style={styles.paymentText}>TRANSFER LIMIT:N5000</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("FundWallet");
          }}
        >
          <View style={styles.optionContainer}>
            <View
              style={[styles.optionImageContainer, styles.firstImageContainer]}
            >
              <Image
                source={require("../../assets/images/external_link.png")}
              />
            </View>
            <Text style={styles.paymentText}>To BANK</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.optionContainer}>
            <View
              style={[
                styles.optionImageContainer,
                styles.optionImageContainerTwo,
              ]}
            >
              <Image
                source={require("../../assets/images/external_link.png")}
              />
            </View>
            <Text style={styles.paymentText}>FUND WALLET</Text>
          </View>
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
    fontWeight: "bold",
  },
  icon: {
    marginLeft: 5,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  backArrow: {
    alignSelf: "flex-start",
    marginTop: 15,
  },
  paymentInfo: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 22,
  },
  paymentText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  optionContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: 300,
    height: 70,
    marginLeft: 30,
    backgroundColor: "rgba(255, 255, 255, 0.37)",
    marginTop: 50,
    borderRadius: 10,
  },
  optionImageContainer: {
    backgroundColor: "#FFFF80",
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  firstImageContainer: {
    marginLeft: -23,
  },
  graph: {
    width: 200,
    height: 200,
  },
  optionImageContainerTwo: {
    backgroundColor: "#5EFFE2",
    marginLeft: 30,
  },
});

export default More;
