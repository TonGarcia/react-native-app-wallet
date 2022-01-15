import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image} from 'react-native' ;
import { StyleSheet, Text, View } from 'react-native';
import TitleBar from "./src/components/title_bar";
import EtherBalance from "./src/components/ether_balance";
// @ts-ignore
import IconAnt from "react-native-vector-icons/AntDesign";
// @ts-ignore
import Icon from 'react-native-vector-icons/Feather';

export default function App() {

    let state = {
        etherAmount: 0.0000,
        seedPhrase: 'no seed phrase',
        publicAddress: 'no public address'
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <TitleBar/>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    style={{height: 150, width: 150}}
                    source={require('./assets/ethereum.png')} />
            </View>

            <View style={styles.row}>
                <EtherBalance amount={state.etherAmount} />
                <IconAnt name="reload1" size={30} style={{color: "cornflowerblue"}}/>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20}}> network: rinkeby </Text>
            </View>

            <View style={styles.row}>
                <View style={{flex: 0.8, justifyContent: "center", alignItems: "center", padding: 10}}>
                    <Text style={{fontSize: 20}}> {state.seedPhrase} </Text>
                </View>
                <Icon name="copy" size={30} style={{color: "cornflowerblue", padding: 10}}/>
            </View>

            <View style={styles.row}>
                <View style={{flex: 0.8, justifyContent: "center", alignItems: "center", padding: 10}}>
                    <Text style={{fontSize: 20}}> {state.publicAddress} </Text>
                </View>
                <Icon name="copy" size={30} style={{color: "cornflowerblue", padding: 10}}/>
            </View>
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
    row: {
        flexDirection: 'row'
    }
});