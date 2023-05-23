import React from 'react';
//import { Text, View } from 'react-native';
 import {NativeBaseProvider, Text, Box} from 'native-base';

import Dummy from './Dummy';
const App = () => {
  return (
    // <View style={{flex: 1, }}>
    //   <Text>Hii</Text>
    // </View>

    <NativeBaseProvider>
     <Dummy/>
    </NativeBaseProvider>
  );
};
export default App;
