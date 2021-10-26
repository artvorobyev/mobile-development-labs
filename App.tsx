import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  Button,
  Linking,
} from 'react-native';

const transformPhone = (phone: string): number => {
  const result = phone
    .split(/(.{1})/)
    .filter((i) => !!i)
    .map((c) => {
      if (/(\d)/.test(c)) {
        return c;
      } else if ('ABC'.includes(c)) {
        return 2;
      } else if ('DEF'.includes(c)) {
        return 3;
      } else if ('GHI'.includes(c)) {
        return 4;
      } else if ('JKL'.includes(c)) {
        return 5;
      } else if ('MNO'.includes(c)) {
        return 6;
      } else if ('PQRS'.includes(c)) {
        return 7;
      } else if ('TUV'.includes(c)) {
        return 8;
      } else if ('WXYZ'.includes(c)) {
        return 9;
      }
      return '';
    })
    .join('');
  return parseInt(result);
};

const PhoneText = (props: { phone: number }) => {
  if (props.phone) {
    return <Text style={styles.phoneText}>{props.phone}</Text>;
  } else return null;
};

export default function App() {
  const [phoneNumber, onChangeNumber] = React.useState('1-855-XAMARIN');
  const [parsedPhone, translatePhone] = React.useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text>Enter a Phoneword:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={phoneNumber}
        />
        <View style={styles.buttonView}>
          <Button
            onPress={() => {
              translatePhone(transformPhone(phoneNumber));
            }}
            title='Translate'
          />
        </View>
        <PhoneText phone={parsedPhone} />
        <View style={styles.buttonView}>
          <Button
            onPress={() => {
              Linking.openURL(`tel:${parsedPhone}`);
            }}
            title='Call'
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
  buttonView: {
    width: '100%',
    justifyContent: 'center',
  },
  phoneText: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 30,
  },
});
