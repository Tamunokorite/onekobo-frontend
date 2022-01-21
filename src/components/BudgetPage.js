import { Inter_400Regular } from "@expo-google-fonts/inter";
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

const BudgetPage = () => {
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
        <View style={styles.dateContainer}>
          <TouchableOpacity>
            <Image
              style={styles.backArrow}
              source={require("../../assets/images/arrow-left.png")}
            />
          </TouchableOpacity>
          <Text style={styles.dateText}>January,2022</Text>
        </View>
        <View style={styles.actionContainer}>
          <TouchableOpacity>
            <View style={styles.singleAction}>
              <View style={[styles.actionIcon, styles.deleteBtn]}>
                <Image
                  source={require("../../assets/images/delete-icon.png")}
                />
              </View>
              <Text>DELETE</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.singleAction}>
              <View style={[styles.actionIcon, styles.actionIconTwo]}>
                <Image source={require("../../assets/images/edit.png")} />
              </View>
              <Text>EDIT</Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.singleAction, styles.singleActionTwo]}>
            <View style={[styles.actionIcon, styles.actionIconThree]}>
              <Image source={require("../../assets/images/plus_square.png")} />
            </View>
            <Text>NEW</Text>
          </View>
        </View>
        <Text style={styles.vaultText}>N15,500</Text>
        <TouchableOpacity>
          <View style={styles.infoContainer}>
            <View>
              <Image source={require("../../assets/images/bus.png")} />
            </View>
            <View style={styles.mainInfoContainer}>
              <Text style={styles.mainInfoText}>PUBLIC TRANSPORT</Text>
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoText}>7000</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.infoContainer}>
            <View>
              <Image source={require("../../assets/images/dress.png")} />
            </View>
            <View style={styles.mainInfoContainer}>
              <Text style={styles.mainInfoText}>CLOTHING</Text>
            </View>
            <View
              style={[styles.infoTextContainer, styles.secondInfoTextContainer]}
            >
              <Text style={styles.infoText}>10,000</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.infoContainer}>
            <View>
              <Image source={require("../../assets/images/food.png")} />
            </View>
            <View style={styles.mainInfoContainer}>
              <Text style={styles.mainInfoText}>FOOD</Text>
            </View>
            <View
              style={[styles.infoTextContainer, styles.fourthInfoTextContainer]}
            >
              <Text style={styles.infoText}>10,000</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.infoContainer}>
            <View>
              <Image source={require("../../assets/images/pets.png")} />
            </View>
            <View style={styles.mainInfoContainer}>
              <Text style={styles.mainInfoText}>PETS</Text>
            </View>
            <View
              style={[
                styles.infoTextContainer,
                styles.fourthInfoTextContainer,
                styles.lastInfoText,
              ]}
            >
              <Text style={styles.infoText}>4000</Text>
            </View>
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
  dateContainer: {
    marginTop: 30,
    flexDirection: "row",
    marginLeft: 20,
    alignItems: "center",
  },
  dateText: {
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 71,
  },
  actionContainer: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingVertical: 7,
    width: 340,
    marginLeft: 12,
    borderRadius: 10,
  },
  singleAction: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    borderRadius: 10,
    marginLeft: 15,
  },
  singleActionTwo: {
    marginRight: 20,
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
  deleteBtn: {
    width: 40,
    height: 40,
  },
  actionIconTwo: {
    backgroundColor: "#8FC29D",
  },
  vaultText: {
    fontSize: 36,
    lineHeight: 42,
    marginTop: 30,
    textAlign: "center",
  },
  infoContainer: {
    marginTop: 10,
    flexDirection: "row",
    width: 340,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    marginLeft: 12,
    alignItems: "center",
    paddingLeft: 10,
  },

  infoTextContainer: {
    marginLeft: 20,
  },
  secondInfoTextContainer: {
    marginLeft: 90,
  },
  fourthInfoTextContainer: {
    marginLeft: 130,
  },
  lastInfoText: {
    marginLeft: 147,
  },
  infoText: {
    color: "#74BB48",
    fontSize: 18,
  },
  mainInfoContainer: {
    marginLeft: 5,
  },
  mainInfoText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footerContainer: {
    marginTop: 0,
  },
  icon: {
    paddingTop: 8,
  },
  footerIcons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#FFFFFF",
    width: 400,
    height: 97,
    alignItems: "center",
    marginLeft: -16,
    paddingTop: 34,
  },
  footerNav: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeBtn: {
    width: 72,
    height: 72,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5EFFE2",
    borderRadius: 50,
    marginLeft: 140,
  },
});
export default BudgetPage;
