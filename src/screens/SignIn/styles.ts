import styled from "styled-components/native";
import theme from "src/theme";

export const Container = styled.View`
  background-color: ${theme.COLORS.YELLOW};
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const LogoStyle = styled.Image`
margin: 25%;
`

export const Content = styled.View`
    flex: 1;
`

export const Box = styled.View`
    background-color: ${theme.COLORS.WHITE};
    height: 60%;
    width: 330px;
    margin: 15px;
    padding: 15px;
    border-radius: 24px;
    gap: 2px;
`

export const Title = styled.Text`
    color: ${theme.COLORS.BLACK};
    font-size: 24px;
`

export const Description = styled.Text`
    color: ${theme.COLORS.GRAY};
    font-size: 14px;
    margin-bottom: 15px;
`

export const GoogleButton = styled.TouchableOpacity`
    flex-direction: row;
    background-color: #CF4232;
    border-radius: 16px;
    width: 100%;
    height: 52px;
    justify-content: space-around;
    align-items: center;
`

export const SocialArea = styled.View`
flex: 1;
align-items: center;
`