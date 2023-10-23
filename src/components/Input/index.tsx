import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface InputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
}

const CustomInput: React.FC<InputProps> = ({ placeholder, secureTextEntry, onChangeText }) => {
  const [text, setText] = useState('');

  const handleChangeText = (newText: string) => {
    setText(newText);
    onChangeText(newText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={text}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    fontSize: 16,
    padding: 10,
  },
});

export default CustomInput;
