import React, { useState } from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


function App(): React.JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#333333')

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * hexRange.length)]
    }

    // check if the color was generated successfull
    if (color.length === 7) {
      setRandomBackground(color)
    }
  }

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <TouchableOpacity
          onPress={() => {
            generateColor()
          }}
        >
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
 },

 actionBtn: {
  borderRadius: 12,
  backgroundColor: '#6A1B4D',
  paddingHorizontal: 40,
  paddingVertical: 10,
  elevation: 2,
  shadowOffset: {
    height: 1,
    width: 1
  },
  shadowColor: '#ccc',
  shadowOpacity: 0.4,
  shadowRadius: 2
 },
 actionBtnTxt: {
  fontSize: 20,
  letterSpacing: 1.75,
  color: '#fff',
  textTransform: 'uppercase'
 }
});

export default App;
