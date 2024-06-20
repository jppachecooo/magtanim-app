import React from 'react';
import { TextInput } from 'react-native';

type InputProps = {
  type: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
};

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <TextInput
      type={type}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      className="py-2 px-10 bg-secondary-default dark:bg-accent-default dark:placeholder-white rounded-full"
    />
  );
};

export default Input;
