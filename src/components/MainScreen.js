import React from "react";
import {
  ImageBackground,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const MainScreen = ({ navigation }) => {
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
            navigation.navigate("SignInPage");
          }}
        >
          <Image
            style={styles.backArrow}
            source={require("../../assets/images/arrow-left.png")}
          />
        </TouchableOpacity>
        <View style={styles.vaultContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/open-vault.png")}
          />
          <Text style={styles.vaultText}>N15,000</Text>
        </View>
        <View style={styles.actionContainer}>
          <TouchableOpacity>
            <View style={styles.singleAction}>
              <View style={styles.actionIcon}>
                <Image source={require("../../assets/images/send-icon.png")} />
              </View>
              <Text>SEND</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("BankAccountPage");
            }}
          >
            <View style={styles.singleAction}>
              <View style={[styles.actionIcon, styles.actionIconTwo]}>
                <Image
                  source={require("../../assets/images/request-icon.png")}
                />
              </View>

              <Text>REQUEST</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("More");
            }}
          >
            <View style={styles.singleAction}>
              <View style={[styles.actionIcon, styles.actionIconThree]}>
                <Image source={require("../../assets/images/plus-icon.png")} />
              </View>
              <Text>FUND</Text>
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
  image: {
    width: 250,
    height: 250,
  },
  backArrow: {
    marginTop: 58,
    marginLeft: 30,
  },
  vaultContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  vaultText: {
    fontSize: 36,
    lineHeight: 42,
    marginTop: -40,
  },
  actionContainer: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-evenly",
  },
  singleAction: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    borderRadius: 10,
  },
  actionIcon: {
    backgroundColor: "#5EFFE2",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    paddingTop: 8,
  },
  actionIconThree: {
    backgroundColor: "#FFFF80",
  },
  actionIconTwo: {
    backgroundColor: "#8FC29D",
  },
});
export default MainScreen;
