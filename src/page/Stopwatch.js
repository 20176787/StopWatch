import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList, TouchableHighlight} from 'react-native';
import TimeFormatter from 'minutes-seconds-milliseconds';
import ListLap from '../common/Element/ListLap';
import {setGlobal} from 'reactn';
import RenderTitle from '../common/Component/RenderTitle';
import RenderTime from '../common/Component/RenderTime';
export default function Stopwatch() {
    const [running, setRunning] = useState(false);
    const [lapping, setLapping] = useState(false);
    const [laptime] = useState(null);
    const [maintime, setMaintime] = useState(null);
    const [lap, setLap] = useState([]);
    const [id, setId] = useState(0);
    const maintimeStart = Date.now();
    const [interval, setinterval] = useState(null);
    const handleStartStop = () => {
        if (running) {
            clearInterval(interval);
            setRunning(false);
            return;
        }
        setRunning(true);
        setinterval(setInterval(() => {
            setMaintime((Date.now()) - maintimeStart + maintime);
        }, 30));
    };
    const handleLapReset = () => {
        if (running) {
            lap.push({name: `lap ${id}`, value: `${TimeFormatter(maintime)}`});
            setGlobal({
                lap:lap
            })
            setId(id + 1);
            return;
        }
        if (!running) {
            setLap([]);
            setMaintime(0);
            setId(0);
            setGlobal({
                lap:[]
            })
        }
    };
    const renderButton = () => {
        return (
            <View style={styles.buttonWrapper}>
                <TouchableHighlight underlayColor={'#777'} style={styles.button}
                                    onPress={handleStartStop}>
                    <Text style={[styles.start, running && styles.stop]}>{!running ? 'Start' : 'Stop'}</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'#777'} style={styles.button} onPress={handleLapReset}>
                    <Text style={[styles.start, lapping && styles.stop]}>{running ? 'Lap' : 'Finish'}</Text>
                </TouchableHighlight>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <RenderTitle/>
                <RenderTime LapTime={laptime} MainTime={maintime}/>
            </View>
            <View style={styles.bottom}>
                {renderButton()}
            </View>
        </View>
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
