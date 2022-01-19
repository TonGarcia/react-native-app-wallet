import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Image, KeyboardAvoidingView, Platform, ScrollView, TextInput} from 'react-native' ;
import { StyleSheet, Text, View } from 'react-native';
import TitleBar from "./src/components/title_bar";
import EtherBalance from "./src/components/ether_balance";
import ButtonIcon from "./src/components/buttons/icon";

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

    const [etherAmount, setEtherAmount] = useState(0.0000);
    const [seedPhrase, setSeedPhrase] = useState('no seed phrase');
    const [publicAddress, setPublicAddress] = useState('no public address');
    const [destinationAddress, setDestinationAddress] = useState('no destination address');
    const [destinationAmount, setDestinationAmount] = useState(0.0000);

    function updateBalance() {

    }

    function copySeedPhrase() {

    }

    function copyPublicAddress() {

    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={{height: '100%', padding: 0}}
            keyboardVerticalOffset={1}>

            <StatusBar style="auto" />
            <TitleBar/>

            <ScrollView style={{width: '100%', height: '100%', flexDirection:"column"}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        style={{height: 150, width: 150}}
                        source={require('./assets/ethereum.png')} />
                </View>

                <View style={styles.row}>
                    <EtherBalance amount={state.etherAmount} />
                    <ButtonIcon type='ant' icon='reload1' size={30} color='cornflowerblue' onPress={updateBalance} />
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 20}}> network: rinkeby </Text>
                </View>

                <View style={styles.row}>
                    <View style={{flex: 0.8, justifyContent: "center", alignItems: "center", padding: 10}}>
                        <Text style={{fontSize: 20}}> {state.seedPhrase} </Text>
                    </View>

                    <ButtonIcon type='icon' icon='copy' size={30} color='cornflowerblue' onPress={copySeedPhrase} />
                </View>

                <View style={styles.row}>
                    <View style={{flex: 0.8, justifyContent: "center", alignItems: "center", padding: 10}}>
                        <Text style={{fontSize: 20}}> {state.publicAddress} </Text>
                    </View>

                    <ButtonIcon type='icon' icon='copy' size={30} color='cornflowerblue' onPress={copyPublicAddress} />
                </View>

                <View style={styles.row}>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <TextInput
                            style={styles.input}
                            placeholder='Set public address to send funds'
                            onChangeText={(val) => setDestinationAddress(val)}
                        />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <TextInput
                            style={styles.input}
                            placeholder='Amount to be send'
                            onChangeText={(val) => setDestinationAddress(val)}
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
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
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: '100%',
        alignSelf: 'stretch'
    }
});