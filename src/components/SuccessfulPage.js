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

const SuccessfulPage = () => {
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
        <View style={styles.modal}>
          <View>
            <Image source={require("../../assets/images/success.png")} />
          </View>
          <Text style={styles.modalText}>TRANSACTION SUCCESSFUL</Text>
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
  modal: {
    backgroundColor: "rgba(94, 255, 226, 0.19)",
    height: 370,
    width: 320,
    borderRadius: 10,
    marginTop: 153,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    lineHeight: 34,
  },
});
export default SuccessfulPage;
