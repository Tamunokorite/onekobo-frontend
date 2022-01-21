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

const BankAccountPage = ({ navigation }) => {
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
          <Text style={styles.dateText}>MY CARDS</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.card}
            source={require("../../assets/images/card.png")}
          />
          <Image
            style={styles.dots}
            source={require("../../assets/images/dots.png")}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("BudgetPage");
          }}
        >
          <View style={styles.sectionContainer}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.firstIcon}
                source={require("../../assets/images/plus_square.png")}
              />
            </View>
            <Text style={styles.text}>ADD TO CARD</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.sectionContainer}>
          <View style={[styles.iconContainer, styles.secondIconContainer]}>
            <Image source={require("../../assets/images/clear-2.png")} />
          </View>
          <Text style={styles.text}>DELETE CARD</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.btnText}>SAVE </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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
  dateContainer: {
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 20,
    alignItems: "center",
  },
  dateText: {
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 71,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 37,
  },
  card: {
    width: 310,
    borderRadius: 16,
  },
  sectionContainer: {
    marginTop: 44,
    width: 300,
    height: 70,
    backgroundColor: "rgba(255, 255, 255, 0.51)",
    borderRadius: 10,
    marginLeft: 29,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: 37,
    height: 37,
    backgroundColor: "#8FC29D",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginRight: 30,
  },

  firstIcon: {
    marginTop: 3,
  },
  text: {
    fontSize: 18,
  },
  secondIconContainer: {
    backgroundColor: "#FFEA9E",
  },
  dots: {
    marginTop: 24,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    width: 360,
    height: 70,
    backgroundColor: "#5EFFE2",
    marginTop: 128,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
  },
  btnText: {
    fontSize: 30,
  },
});

export default BankAccountPage;
