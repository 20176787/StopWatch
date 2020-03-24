import React, {useState, useEffect} from 'react';
import {useGlobal} from 'reactn'
import {View, Text, TouchableOpacity, StyleSheet, FlatList, TouchableHighlight} from 'react-native';
export default function ListLap() {
    const [lap]=useGlobal('lap')
    return (
                <FlatList data={lap}
                          showsVerticalScrollIndicator={false}
                          keyExtractor={item => item.name}
                          renderItem={({item}) =>
                              <View style={styles.lapRow}>
                                  <Text style={styles.lapName}>{item.name}</Text>
                                  <Text style={styles.lapValue}>{item.value}</Text>
                              </View>}
                          style={styles.bottom}
                          renderScrollComponent={false}
                          onEndReachedThreshold={1}
                />
    );
}
const styles = StyleSheet.create({
    container:{

    },
    top: {
    },

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
    timeWrapperInner: {
        alignSelf: 'center',
    },
    timeWrapper: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        paddingTop: 30,
        paddingBottom: 30,

    },
    bottom: {
        backgroundColor: '#F0EFF5',
        paddingTop:20,
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
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 15,
        paddingBottom: 30,

    },
    button: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lapRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 40,
        paddingTop: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd',
    },
    lapName: {
        fontSize: 16,
        color: '#777',
    },
    lapValue: {
        color: '#000',
        fontSize: 20,
        fontWeight: '300',
    },
    start: {
        color: 'green',
    },
    stop: {
        color: 'red',
    },
});
