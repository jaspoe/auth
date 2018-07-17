import React from 'react';
import { TextInput, View } from 'react-native';

const Input = ({ label, value, onChangeText, secureTextEntry }) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={label}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
      );
  };

  const styles = {
    inputStyle: {
      height: 50,
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 20,
      lineHeight: 25,
      flex: 1
    },

    containerStyle: {
      height: 40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    }
  };
export { Input };
