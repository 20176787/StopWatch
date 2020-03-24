import React from "react";
import {View,Text} from 'react-native'
import Stopwatch from './src/page/Stopwatch';
import ListLap from './src/common/Element/ListLap';
export default function App() {
  return(
      <View>
          <Stopwatch/>
          <View style={{height: 500}}>
           <ListLap/>
          </View>
      </View>
  );
}
