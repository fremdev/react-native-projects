import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 3,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
});
