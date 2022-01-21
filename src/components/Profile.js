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

const Profile = () => {
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
        <Text style={styles.profileText}>MY PROFILE</Text>

        <TouchableOpacity>
          <Image
            style={styles.backArrow}
            source={require("../../assets/images/arrow-left.png")}
          />
        </TouchableOpacity>
        <View style={styles.profileContainer}>
          <View>
            <Image
              style={styles.profileImage}
              source={require("../../assets/images/User_fill.png")}
            />
          </View>

          <View style={styles.details}>
            <Text style={styles.proText}>John</Text>
            <Text style={styles.proTextTwo}>john@gmail.com</Text>
          </View>
        </View>

        <View style={styles.numberDetails}>
          <Text style={styles.numberText}>Mobile Number</Text>
          <View>
            <TextInput style={styles.number} placeholder="+2349022946610" />
          </View>
        </View>
        <View style={styles.seperator}></View>
        <View style={[styles.numberDetails, styles.numberDetailsTwo]}>
          <Text style={styles.numberText}>Change Password</Text>
          <View>
            <TextInput style={styles.number} placeholder="***********" />
          </View>
        </View>
        <View style={styles.seperator}></View>

        <View style={[styles.numberDetails, styles.numberDetailsTwo]}>
          <Text style={styles.numberText}>My Cards</Text>
          <View>
            <TextInput style={styles.number} placeholder="(1)" />
          </View>
        </View>
        <View
          style={[styles.seperator, styles.numberDetailsThreeSeperator]}
        ></View>
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
    marginTop: -8,
    marginLeft: 26,
  },
  profileText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  profileContainer: {
    marginTop: 26,
    backgroundColor:
      "linear-gradient(180deg, rgba(94, 255, 226, 0.42) 0%, rgba(94, 255, 226, 0) 114.35%)",
    flexDirection: "row",
    height: 200,
    width: 400,
    alignItems: "center",
    borderTopRightRadius: 200,
    borderBottomRightRadius: 200,
  },
  proText: {
    fontSize: 50,
  },
  profileImage: {
    marginLeft: -10,
  },
  proTextTwo: {
    color: "#ADB5BD",
  },
  details: {
    marginRight: -40,
  },
  numberDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 49,
  },
  seperator: {
    height: 3,
    width: 320,
    backgroundColor: "rgba(0, 0, 0, 0.41)",
    marginTop: 13,
    marginLeft: 20,
  },
  numberText: {
    paddingLeft: 20,
  },
  number: {
    paddingRight: 20,
  },
  numberDetailsTwo: {
    marginTop: 113,
  },
  numberDetailsThreeSeperator: {
    marginBottom: 113,
  },
});
export default Profile;
