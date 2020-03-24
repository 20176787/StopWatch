import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function RenderTitle() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                Stop Watch
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 0.5,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: '#F9F9F9',
    },
    title: {
        alignSelf: 'center',
        fontWeight: '600',
    },
});
