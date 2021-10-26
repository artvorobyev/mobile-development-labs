import React from 'react';
import { Text, View, TextInput, Button, Linking } from 'react-native';
import { ViewContainer } from '../../components/ViewContainer/ViewContainer';
import { RoutingProps } from '../../routing';
import { transformPhone } from './Home.helpers';
import { styles } from './Home.styles';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { pushCallAction } from '../../actions/CallHistoryAction';
import { AppDispatch } from '../../store';

const PhoneText = (props: { phone: number }) => {
  if (props.phone) {
    return <Text style={styles.phoneText}>{props.phone}</Text>;
  } else return null;
};

const Home = (props: RoutingProps & { pushCall: AppDispatch }) => {
  const [phoneNumber, onChangeNumber] = React.useState('1-855-XAMARIN');
  const [parsedPhone, translatePhone] = React.useState(0);
  return (
    <ViewContainer>
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
            props.pushCall(parsedPhone);
            Linking.openURL(`tel:${parsedPhone}`);
          }}
          title='Call'
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={() => {
            props.navigation.push('History');
          }}
          title='History'
        />
      </View>
    </ViewContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      pushCall: pushCallAction,
    },
    dispatch
  );

export default connect((state) => state, mapDispatchToProps)(Home);
