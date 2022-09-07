import React from "react";
import { Paystack } from "react-native-paystack-webview";
import { View } from "react-native";

export default function Pay({ navigation, route }) {
	return (
		<View style={{ flex: 1 }}>
			<Paystack
				paystackKey="pk_test_f828309267cfae96d727995b9249cbbb147c13c6"
				amount={route.params.amount}
				billingEmail="paystackwebview@something.com"
				activityIndicatorColor="green"
				onCancel={(e) => {
					console.log(e);
					navigation.goBack();
				}}
				onSuccess={(res) => {
					console.log(res);
					navigation.navigate("MainScreen");
				}}
				autoStart={true}
			/>
		</View>
	);
}
