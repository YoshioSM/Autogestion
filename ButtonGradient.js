import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient() {
    return (
        <TouchableOpacity>
            <LinearGradient
                style={styles.button}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <Text style={styles.text}>Sign</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 10,
        width: '80%',
        height: 50,
        borderRadius: 30,
        backgroundColor: '#fff',
        marginTop: 20,
    },
    button: {

    },
});