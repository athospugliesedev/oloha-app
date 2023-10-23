import React from 'react'
import { View, Text, Image } from 'react-native'
import { Content, Container, LogoStyle, Box, Title, Description, GoogleButton, SocialArea } from './styles'
import Logo from '../../assets/logo2.png'
import { AntDesign } from '@expo/vector-icons';
import Button from '@components/Button';
import theme from 'src/theme';
import { firebase } from '../../../config';
import { useNavigation } from '@react-navigation/native';



export function SignIn({navigation}: any) {

  const toRegister = () => {
    navigation.navigate('SignUp')
  }
  const toLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <Container>
      <LogoStyle source={Logo} />
      <Content>
        <Box>
          <Title>Bem vindo ao Oloha</Title>
          <Description>Viva a vida sem desculpas, viaje sem arrependimentos.</Description>
         
              <Button
                backgroundColor={theme.COLORS.BLACK}
                fontSize="16px"
                textColor={theme.COLORS.WHITE}
                onPress={toLogin}

                width="200px"
                height="50px"
                borderRadius={10}
                textPadding={10}
              >
                Entrar</Button>
              <Button
                backgroundColor={theme.COLORS.YELLOW}
                fontSize="16px"
                textColor={theme.COLORS.BLACK}
                onPress={toRegister}

                width="200px"
                height="50px"
                borderRadius={10}
                textPadding={10}
              >
                Cadastrar</Button>

        </Box>
      </Content>
    </Container>
  )
}