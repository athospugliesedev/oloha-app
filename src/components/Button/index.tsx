import React from 'react';
import { TouchableOpacity } from 'react-native';
import ButtonText from './style';

interface ButtonProps {
  backgroundColor: string;
  fontSize: string;
  textColor: string;
  onPress: () => void;
  width: string;
  height: string;
  borderRadius: number;
  children: React.ReactNode;
  textPadding: any; // Nova propriedade para o padding do texto
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  fontSize,
  textColor,
  onPress,
  width,
  height,
  borderRadius,
  children,
  textPadding, // Adicione a propriedade textPadding
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor,
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius,
      }}
      onPress={onPress}
    >
      <ButtonText
        fontSize={fontSize}
        textColor={textColor}
        style={{ padding: textPadding }} // Adicione o padding para o ButtonText
      >
        {children}
      </ButtonText>
    </TouchableOpacity>
  );
};

export default Button;
