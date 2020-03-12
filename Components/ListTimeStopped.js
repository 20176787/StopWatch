import React from "react";
import {View,Text,FlatList,StyleSheet} from "react-native";
export default function ListTimeStopped() {
    const lap = [
        {name:'lan 1:',value:'00:00:01'},
        {name:'lan 2:',value:'00:00:02'},
        {name:'lan 3:',value:'00:00:03'},
        {name:'lan 4:',value:'00:00:04'},
        {name:'lan 5:',value:'00:00:05'},
        {name:'lan 1:',value:'00:00:01'},
        {name:'lan 2:',value:'00:00:02'},
        {name:'lan 3:',value:'00:00:03'},
        {name:'lan 4:',value:'00:00:04'},
        {name:'lan 5:',value:'00:00:05'},
        {name:'lan 1:',value:'00:00:01'},
        {name:'lan 2:',value:'00:00:02'},
        {name:'lan 3:',value:'00:00:03'},
        {name:'lan 4:',value:'00:00:04'},
        {name:'lan 5:',value:'00:00:05'},
        {name:'lan 1:',value:'00:00:01'},
        {name:'lan 2:',value:'00:00:02'},
        {name:'lan 3:',value:'00:00:03'},
        {name:'lan 4:',value:'00:00:04'},
        {name:'lan 5:',value:'00:00:05'},
        {name:'lan 1:',value:'00:00:01'},
        {name:'lan 2:',value:'00:00:02'},
        {name:'lan 3:',value:'00:00:03'},
        {name:'lan 4:',value:'00:00:04'},
        {name:'lan 5:',value:'00:00:05'},
        {name:'lan 1:',value:'00:00:01'},
        {name:'lan 2:',value:'00:00:02'},
        {name:'lan 3:',value:'00:00:03'},
        {name:'lan 4:',value:'00:00:04'},
        {name:'lan 5:',value:'00:00:05'},
        {name:'lan 1:',value:'00:00:01'},
        {name:'lan 2:',value:'00:00:02'},
        {name:'lan 3:',value:'00:00:03'},
        {name:'lan 4:',value:'00:00:04'},
        {name:'lan 5:',value:'00:00:05'},
        {name:'lan 1:',value:'00:00:01'},
        {name:'lan 2:',value:'00:00:02'},
        {name:'lan 3:',value:'00:00:03'},
        {name:'lan 4:',value:'00:00:04'},
        {name:'lan 5:',value:'00:00:05'},
        {name:'lan 1:',value:'00:00:01'},
        {name:'lan 2:',value:'00:00:02'},
        {name:'lan 3:',value:'00:00:03'},
        {name:'lan 4:',value:'00:00:04'},
        {name:'lan 5:',value:'00:00:05'},
        {name:'lan 1:',value:'00:00:01'},
        {name:'lan 2:',value:'00:00:02'},
        {name:'lan 3:',value:'00:00:03'},
        {name:'lan 4:',value:'00:00:04'},
        {name:'lan 5:',value:'00:00:05'},
        {name:'lan 1:',value:'00:00:01'},
        {name:'lan 2:',value:'00:00:02'},
        {name:'lan 3:',value:'00:00:03'},
        {name:'lan 4:',value:'00:00:04'},
        {name:'lan 5:',value:'00:00:05'},
        {name:'lan 1:',value:'00:00:01'},
        {name:'lan 2:',value:'00:00:02'},
        {name:'lan 3:',value:'00:00:03'},
        {name:'lan 4:',value:'00:00:04'},
        {name:'lan 5:',value:'00:00:05'},
        {name:'lan 1:',value:'00:00:01'},
        {name:'lan 2:',value:'00:00:02'},
        {name:'lan 3:',value:'00:00:03'},
        {name:'lan 4:',value:'00:00:04'},
        {name:'lan 5:',value:'00:00:05'},
        {name:'lan 1:',value:'00:00:01'},
        {name:'lan 2:',value:'00:00:02'},
        {name:'lan 3:',value:'00:00:03'},
        {name:'lan 4:',value:'00:00:04'},
        {name:'lan 5:',value:'00:00:05'},
        {name:'lan 1:',value:'00:00:01'},
        {name:'lan 2:',value:'00:00:02'},
        {name:'lan 3:',value:'00:00:03'},
        {name:'lan 4:',value:'00:00:04'},
        {name:'lan 5:',value:'00:00:05'},

    ]
    return(
    <View>
        <View >
        <FlatList data={lap}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={item=>item.name}

                  renderItem={({item})=>
                      <View>
                          <Text>{item.name}{item.value}</Text>
                      </View>}
        />
        </View>
    </View>)

}
const styles=StyleSheet.create(
    {
        top: {
            flex: 1
        },
        bottom: {
            flex: 2,
            backgroundColor: '#f50003',
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
            borderWidth: 0.5,
            alignSelf: 'center',
        },
        timeWrapper: {
            backgroundColor: '#fff300',
            justifyContent:'center',

        },
        mainTime: {
            fontSize: 60,
            fontWeight: '100',
            borderWidth: 0.5,
            alignSelf: 'flex-end',
            backgroundColor: '#fff300',
        },
        lapTime: {
            fontSize: 18,
            borderWidth: 0.5,
            alignSelf: 'flex-end',
        },


    }
)
