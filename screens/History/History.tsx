import { FlatList, Text, View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { ViewContainer } from '../../components/ViewContainer/ViewContainer';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { styles } from './History.styles';

interface IHistoryScreenProps {
  item: number;
  callHistory: number[];
}

const Item = ({ phone }: PropsWithChildren<{ phone: number }>) => (
  <View style={styles.item}>
    <Text>{phone}</Text>
  </View>
);

const History = (props: PropsWithChildren<IHistoryScreenProps>) => {
  const renderItem = (props: PropsWithChildren<{ item: number }>) => (
    <Item phone={props.item} />
  );

  return (
    <ViewContainer>
      <FlatList
        style={styles.list}
        data={props.callHistory}
        renderItem={renderItem}
        keyExtractor={(item) => `${item}`}
      />
    </ViewContainer>
  );
};

const mapStateToProps = (state: RootState) => {
  const { callHistory } = state;
  return { callHistory: callHistory.history };
};

export default connect(mapStateToProps)(History);
