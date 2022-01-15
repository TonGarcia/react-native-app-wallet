import React from "react"
import {View, Text} from "react-native"

export default function TitleBar() {
    return (
      <View style={{backgroundColor: "darkgrey", height: "20%", width: "100%",
                    justifyContent: "center", alignItems: "center"}}>
          <Text style={{fontSize: 35, color: "white"}}>My Easy Wallet</Text>
      </View>
    );
}