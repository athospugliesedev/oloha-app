import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { Container, LogoStyle, Box, Title, Description, GoogleButton } from './styles';
import Logo from '../../assets/logo2.png';
import Button from '@components/Button';
import theme from 'src/theme';
import CustomInput from '@components/Input';
import { firebase } from '../../../config';

export function SignUp({ navigation }: any) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [emailSent, setEmailSent] = useState(false);

  const createUser = async (email: string, password: string, name: string) => {
    try {
      const auth = firebase.auth();
      await auth.createUserWithEmailAndPassword(email, password);
      const user = auth.currentUser;

      if (user) {
        try {
          await user.sendEmailVerification({
            handleCodeInApp: true,
            url: 'https://meuapp-d87fe.firebaseapp.com',
          });

          await firebase.firestore().collection("users")
            .doc(user.uid)
            .set({
              email,
              name
            });
          console.log("E-mail enviado!"); 
          setEmailSent(true);
          navigation.navigate('Home');
        } catch (error) {
          alert("Erro ao enviar o email de verificação: " + error);
        }
      } else {
        alert("Usuário nulo");
      }
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    if (emailSent) {
      Alert.alert("E-mail enviado!");
    }
  }, [emailSent]);

  return (
    <Container>
      <LogoStyle source={Logo} />
      <Box>
        <Title>Registra uma nova conta!</Title>
        <Description>Por favor, crie a sua conta</Description>
        <CustomInput
          placeholder="Seu nome"
          onChangeText={text => setName(text)}
        />
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
          onPress={() => { createUser(email, password, name); }}
          width="350px"
          height="50px"
          borderRadius={10}
          textPadding={10}
        >
          Entrar
        </Button>
      </Box>
    </Container>
  );
}
