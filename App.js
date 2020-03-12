import React from "react";
import {View,Text} from 'react-native'
import Stopwatch from './Components/Stopwatch';
import ListLap from './Components/ListLap';
export default function App() {
  return(
      <View>
          <Stopwatch/>
           <ListLap/>
      </View>
  );
}
