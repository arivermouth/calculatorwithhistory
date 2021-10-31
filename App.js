import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';

export default function App() {
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
  const [number3, onChangeNumber3] = React.useState(null);
  
  const sum = () => {
    var n1 = parseInt(number1);
    var n2 = parseInt(number2);
    var s = n1+n2;
    onChangeNumber3(s)
  }
  const subtraction = () => {
    var n1 = parseInt(number1);
    var n2 = parseInt(number2);
    var s = n1-n2;
    onChangeNumber3(s)
  }

  return (
    <View style={styles.container}>
      <Text>
        Result: {number3}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={number1 => onChangeNumber1(number1)}
        value={number1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={number2 => onChangeNumber2(number2)}
        value={number2}
        keyboardType="numeric"
      />
      <View style={styles.button}>
        <Button 
          style={styles.button}
          onPress={sum} 
          title="+"
        />
        <Button 
          style={styles.button}
          onPress={subtraction} 
          title="-"
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: 200,
    borderWidth: 1,
    margin: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 30,
    width: 100,
  }
  
});

