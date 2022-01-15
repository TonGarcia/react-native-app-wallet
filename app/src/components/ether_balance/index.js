import React from "react"
import {View, Text} from "react-native"

export default function EtherBalance(props) {
    return (
        <View style={{flex: 0.5, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 35}}> {props.amount} </Text>
        </View>
    );
}