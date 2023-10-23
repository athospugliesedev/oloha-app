import styled from 'styled-components/native';

interface ButtonTextProps {
  fontSize: string;
  textColor: string;
}

const ButtonText = styled.Text<ButtonTextProps>`
  font-size: ${(props: { fontSize: any; }) => props.fontSize};
  color: ${(props: { textColor: any; }) => props.textColor};
  font-weight: bold;
`;

export default ButtonText;
