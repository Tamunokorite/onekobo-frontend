import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Form from "./src/components/Form";
import NumberConfirmation from "./src/components/NumberConfirmation";
import Profile from "./src/components/Profile";
import MainScreen from "./src/components/MainScreen";
import SignInPage from "./src/components/SignInPage";
import CodePage from "./src/components/CodePage";
import BudgetPage from "./src/components/BudgetPage";
import ConfirmPaymentPage from "./src/components/ConfirmPaymentPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import More from "./src/components/More";
import { SafeAreaView } from "react-native-safe-area-context";
import SuccessfulPage from "./src/components/SuccessfulPage";
import OnBoarding from "./src/components/OnBoarding";
import BankAccountPage from "./src/components/BankAccountPage";
import Summary from "./src/components/Summary";
import FundWallet from "./src/components/FundWallet";
import Pay from "./src/components/Pay";

const Stack = createNativeStackNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Form">
				<Stack.Screen
					name="Form"
					options={{
						title: "",
						headerShown: false,
					}}
					component={Form}
				/>
				<Stack.Screen
					name="More"
					options={{
						title: "",
						headerShown: false,
					}}
					component={More}
				/>
				<Stack.Screen
					name="Details"
					options={{
						title: "",
						headerShown: false,
					}}
					component={ConfirmPaymentPage}
				/>
				<Stack.Screen
					name="CodePage"
					options={{
						title: "",
						headerShown: false,
					}}
					component={CodePage}
				/>
				<Stack.Screen
					name="NumberConfirmation"
					options={{
						title: "",
						headerShown: false,
					}}
					component={NumberConfirmation}
				/>
				<Stack.Screen
					name="SignInPage"
					options={{
						title: "",
						headerShown: false,
					}}
					component={SignInPage}
				/>
				<Stack.Screen
					name="FundWallet"
					options={{
						title: "",
						headerShown: false,
					}}
					component={FundWallet}
				/>
				<Stack.Screen
					name="SuccessfulPage"
					options={{
						title: "",
						headerShown: false,
					}}
					component={SuccessfulPage}
				/>

				<Stack.Screen
					name="MainScreen"
					options={{
						title: "",
						headerShown: false,
					}}
					component={MainScreen}
				/>
				<Stack.Screen
					name="BankAccountPage"
					options={{
						title: "",
						headerShown: false,
					}}
					component={BankAccountPage}
				/>
				<Stack.Screen
					name="BudgetPage"
					options={{
						title: "",
						headerShown: false,
					}}
					component={BudgetPage}
				/>
				<Stack.Screen
					name="Pay"
					options={{
						title: "",
						headerShown: false,
					}}
					component={Pay}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default App;
