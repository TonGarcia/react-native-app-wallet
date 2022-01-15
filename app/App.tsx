import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image} from 'react-native' ;
import { StyleSheet, Text, View } from 'react-native';
import TitleBar from "./src/components/title_bar";
import EtherBalance from "./src/components/ether_balance";

export default function App() {

    let state = {
        etherAmount: 0.0
    }

    return (
        <View style={styles.container}>
            <TitleBar/>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    style={{height: 150, width: 150}}
                    source={require('./assets/ethereum.png')} />
            </View>
            <EtherBalance amount={state.etherAmount} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});