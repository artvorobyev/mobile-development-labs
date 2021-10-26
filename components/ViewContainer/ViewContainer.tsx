import React, { ComponentProps, PropsWithChildren } from 'react';
import { View, SafeAreaView } from 'react-native';
import { styles } from './ViewContainer.styles';

export const ViewContainer = ({
  children,
}: PropsWithChildren<ComponentProps<any>>) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>{children}</View>
    </SafeAreaView>
  );
};
