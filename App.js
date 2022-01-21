import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Form from "./src/components/Form";
import NumberConfirmation from "./src/components/NumberConfirmation";
import Profile from "./src/components/Profile";
import CodePage from "./src/components/CodePage";
import SignInPage from "./src/components/SignInPage";
import BudgetPage from "./src/components/BudgetPage";
import MainScreen from "./src/components/MainScreen";
import ConfirmPaymentPage from "./src/components/ConfirmPaymentPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import SuccessfulPage from "./src/components/SuccessfulPage";
import OnBoarding from "./src/components/OnBoarding";
import BankAccountPage from "./src/components/BankAccountPage";
import Summary from "./src/components/Summary";
import More from "./src/components/More";
import FundWallet from "./src/components/FundWallet";
const Tab = createBottomTabNavigator();
const CustomTab = () => {
  return <View></View>;
};
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            width: 400,
            height: 97,
            paddingRight: 55,
            paddingBottom: 10,
          },
        }}
      >
        <Tab.Screen
          name="BUDGET"
          component={BudgetPage}
          options={{
            title: "",
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIcon}>
                <Image
                  source={require("./assets/images/budget-icon.png")}
                  resizeMode="contain"
                  style={{
                    width: 29,
                    height: 29,
                    tintColor: focused ? "blue" : "#5C8977",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "blue" : "#000000",
                    fontSize: 15,
                  }}
                >
                  BUDGET
                </Text>
              </View>
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="PROFILE"
          options={{
            title: "",
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIcon}>
                <Image
                  source={require("./assets/images/profile-icon.png")}
                  resizeMode="contain"
                  style={{
                    width: 29,
                    height: 29,
                    tintColor: focused ? "blue" : "#5C8977",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "blue" : "#000000",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  PROFILE
                </Text>
              </View>
            ),
          }}
          component={Profile}
        ></Tab.Screen>
        <Tab.Screen
          name="SUMMARY"
          options={{
            title: "",
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIcon}>
                <Image
                  source={require("./assets/images/coolicon.png")}
                  resizeMode="contain"
                  style={{
                    width: 29,
                    height: 29,
                    tintColor: focused ? "blue" : "#5C8977",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "blue" : "#000000",
                    fontSize: 15,
                  }}
                >
                  SUMMARY
                </Text>
              </View>
            ),
          }}
          component={Summary}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabIcon: {
    top: 34,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
