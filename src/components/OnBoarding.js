import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnBoarding = () => {
  return (
    <View style={styles.container}>
      <Onboarding
        pages={[
          {
            backgroundColor: "#fff",
            image: <Image source={require("../../assets/images/bro.png")} />,
            title: "Ready to save??!",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
        containerStyles={{
          width: 300,
          height: 100,
        }}
        imageContainerStyles={{
          paddingBottom: 0,
          width: "100%",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
export default OnBoarding;
