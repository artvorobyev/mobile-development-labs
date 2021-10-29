import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { ViewContainer } from '../../components/ViewContainer/ViewContainer';
import { styles } from './Calculator.styles';

export const Calculator = () => {
  const [number1, onChangeNumber1] = useState('');
  const [number2, onChangeNumber2] = useState('');
  const [result, setResult] = useState('');
  return (
    <ViewContainer>
      <View style={styles.view}>
        <View style={styles.top}>
          <View style={styles.row}>
            <View style={styles.label}>
              <Text>Number 1</Text>
            </View>
            <View style={styles.field}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber1}
                value={number1}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.label}>
              <Text>Number 2</Text>
            </View>
            <View style={styles.field}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber2}
                value={number2}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.label}>
              <Text style={styles.bold}>Result:</Text>
            </View>
            <View style={styles.field}>
              <Text>{result}</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              onPress={() => {
                setResult(`${parseInt(number1) + parseInt(number2)}`);
              }}
              title='Addition'
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => {
                setResult(`${parseInt(number1) - parseInt(number2)}`);
              }}
              title='Substraction'
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => {
                setResult(`${parseInt(number1) * parseInt(number2)}`);
              }}
              title='Multiplication'
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => {
                setResult(`${parseInt(number1) / parseInt(number2)}`);
              }}
              title='Division'
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => {
                setResult(`${parseInt(number1) % parseInt(number2)}`);
              }}
              title='Remainder'
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => {
                setResult('');
                onChangeNumber1('');
                onChangeNumber2('');
              }}
              title='Clear'
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => {
                setResult(`${parseInt(number1) * parseInt(number2)}`);
              }}
              title='Square'
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => {
                setResult(`${2 * (parseInt(number1) + parseInt(number2))}`);
              }}
              title='Perimeter'
            />
          </View>
        </View>
      </View>
    </ViewContainer>
  );
};
