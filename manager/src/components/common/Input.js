import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

export const Input = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder}
        autoCorrect={false}
        style={styles.fieldStyle}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        underlineColorAndroid='transparent'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fieldStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    lineHeight: 23,
    paddingLeft: 20,
    paddingBottom: 5,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
