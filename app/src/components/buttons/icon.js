import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

// @ts-ignore
import IconAnt from "react-native-vector-icons/AntDesign";
// @ts-ignore
import Icon from 'react-native-vector-icons/Feather';

export default function ButtonIcon({ type, icon, size, color, onPress }) {
    if(!color) color = 'cornflowerblue';
    if(!size) size = 30;

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                {
                    type === 'ant' ?
                        <IconAnt name={icon} size={size} style={{color: color}}/>
                    :
                        <Icon name={icon} size={size} style={{color: color}}/>
                }
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})