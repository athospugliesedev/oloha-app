import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { Container, LogoStyle, Box, Title, Description, GoogleButton } from './styles';
import Logo from '../../assets/logo2.png';
import Button from '@components/Button';
import theme from 'src/theme';
import CustomInput from '@components/Input';
import { firebase } from '../../../config';

export function Login({ navigation }: any) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const authLogin = () => {
    navigation.navigate('Home');
  }

  const loginAcess = async (email: string, password: string) => {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      if (user) {
        console.log('Login bem-sucedido. Usuário:', user);
        authLogin();
      } else {
        console.log('Login bem-sucedido, mas o usuário é nulo.');
        Alert.alert('Login bem-sucedido, mas o usuário é nulo.');
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Container>
      <LogoStyle source={Logo} />
      <Box>
        <Title>Bem vindo de volta!</Title>
        <Description>Por favor, logue na sua conta</Description>

        <CustomInput
          placeholder="E-mail"
          onChangeText={text => setEmail(text)}
        />
        <CustomInput
          placeholder="Senha"
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
        <Button
          backgroundColor={theme.COLORS.YELLOW}
          fontSize="16px"
          textColor={theme.COLORS.BLACK}
          onPress={() => {
            loginAcess(email, password);
          }}
          width="350px"
          height="50px"
          borderRadius={10}
          textPadding={10}
        >
          Entrar
        </Button>
      </Box>
    </Container>
  )
}
