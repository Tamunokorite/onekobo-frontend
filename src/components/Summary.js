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

const Summary = () => {
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
              style={styles.backArrow}
            />
            <Image source={require("../../assets/images/battery.png")} />
          </View>
        </View>
        <View style={styles.sectionHeader}>
          <Image
            source={require("../../assets/images/arrow-left.png")}
            style={styles.backArrow}
          />
          <View>
            <Image source={require("../../assets/images/graph.png")} />
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.bigHeader}> PUBLIC TRANSPORT</Text>
            <Text style={styles.infoText}> 1300/7000</Text>
          </View>
          <View style={styles.seperatorContainer}>
            <Image
              source={require("../../assets/images/bus.png")}
              style={styles.image}
            />
            <View style={styles.divider}>
              <View style={styles.smallDivider}></View>
            </View>
          </View>
        </View>
        <View style={[styles.infoContainer, styles.infoContainerTwo]}>
          <View style={styles.info}>
            <Text style={styles.bigHeader}> FOOD</Text>
            <Text style={styles.infoText}> 6000/10,000</Text>
          </View>
          <View style={styles.seperatorContainer}>
            <Image
              source={require("../../assets/images/food.png")}
              style={styles.image}
            />
            <View style={styles.divider}>
              <View style={[styles.smallDivider, { width: 270 }]}></View>
            </View>
          </View>
        </View>
        <View style={[styles.infoContainer, styles.infoContainerTwo]}>
          <View style={styles.info}>
            <Text style={styles.bigHeader}> CLOTHING</Text>
            <Text style={styles.infoText}> 5000/10,000</Text>
          </View>
          <View style={styles.seperatorContainer}>
            <Image
              source={require("../../assets/images/dress.png")}
              style={styles.image}
            />
            <View style={styles.divider}>
              <View style={[styles.smallDivider, { width: 150 }]}></View>
            </View>
          </View>
        </View>
        <View style={[styles.infoContainer, styles.infoContainerTwo]}>
          <View style={styles.info}>
            <Text style={styles.bigHeader}>DATING</Text>
            <Text style={styles.infoText}> 1000/3000</Text>
          </View>
          <View style={styles.seperatorContainer}>
            <Image
              source={require("../../assets/images/dating.png")}
              style={[styles.image, { width: 30, height: 30, marginRight: 10 }]}
            />
            <View style={styles.divider}>
              <View style={[styles.smallDivider, { width: 120 }]}></View>
            </View>
          </View>
        </View>
        <View style={[styles.infoContainer, styles.infoContainerTwo]}>
          <View style={styles.info}>
            <Text style={[styles.bigHeader, { paddingLeft: 5 }]}>PETS</Text>
            <Text style={styles.infoText}> 1000/3,000</Text>
          </View>
          <View style={styles.seperatorContainer}>
            <Image
              source={require("../../assets/images/pets.png")}
              style={styles.image}
            />
            <View style={styles.divider}>
              <View style={styles.smallDividerTwo}></View>
            </View>
          </View>
        </View>
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
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  backArrow: {
    alignSelf: "flex-start",
    marginTop: 15,
  },

  infoContainer: {
    width: 340,
    backgroundColor: "#FFFFFF",
    borderRadius: 3,
    marginLeft: 10,
    paddingTop: 10,
    marginTop: -2,
  },
  infoContainerTwo: {
    marginTop: 20,
  },
  infoContainerThree: {
    marginBottom: 20,
  },

  infoContainerFive: {
    marginTop: 20,
  },
  image: {
    width: 40,
    height: 40,
    marginTop: -15,
  },
  info: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  seperatorContainer: {
    flexDirection: "row",
    margin: 10,
  },
  infoText: {
    color: "#74BB48",
    paddingRight: 5,
  },
  bigHeader: {
    fontWeight: "bold",
  },
  divider: {
    height: 8,
    width: 285,
    backgroundColor: "#E7E7E7",
    borderRadius: 40,
  },
  smallDivider: {
    width: 76,
    height: 8,
    backgroundColor: "#5E9EFF",
  },
  smallDividerTwo: {
    backgroundColor: "#FF3C3C",
    height: 8,
    width: 285,
  },
});
export default Summary;
