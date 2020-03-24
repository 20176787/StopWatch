import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
import TimeFormatter from 'minutes-seconds-milliseconds';
export default function RenderTime({LapTime,MainTime}) {
    return(
        <View style={styles.timeWrapper}>
            <View style={styles.timeWrapperInner}>
            <Text style={styles.lapTime}>{TimeFormatter(LapTime)}</Text>
            <Text style={styles.mainTime}>{TimeFormatter(MainTime)}</Text>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    timeWrapper: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        paddingTop: 30,
        paddingBottom: 30,

    },
    timeWrapperInner: {
        alignSelf: 'center',
    },
    mainTime: {
        fontSize: 60,
        fontWeight: '100',
        alignSelf: 'flex-end',
    },
    lapTime: {
        fontSize: 18,
        alignSelf: 'flex-end',
    },
})
