import React from 'react'
import { View, Text } from 'react-native'
import ProfileComponent from '../shared/components/Profile'
import styled from 'styled-components'
import Icons from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icons name="angle-right" size={22} color={"#000"} />;

export default function index() {
    return (
        <Container>
            <Profile>
                <ProfileComponent />
            </Profile>
            <MainContainer>
                <MainTitle>How does it work?</MainTitle>
                <SubText>Once you've turned on two-step verification, logging into your account will require two steps. First, you'll log in with your email address and password like you do now. Then, you'll need to enter a unique 6-digit code generated by the authenticator app on your mobile device. <HighlightText>Learn More</HighlightText></SubText>
                <MainTitle>Choose a method</MainTitle>
                <SubText>You can set up two-step veirification with an authenticator app or via text message.</SubText>
            </MainContainer>
            <RenderContainer>
                <AuthContainer>
                    <LeftText>Authenticator App</LeftText>
                    <IconContainer>
                        {myIcon}
                    </IconContainer>
                </AuthContainer>
                <TextContainer>
                    <LeftText>Text message (SMS)</LeftText>
                    <IconContainer>
                        {myIcon}
                    </IconContainer>
                </TextContainer>
            </RenderContainer>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
`
const Profile = styled.View`
    border-bottom-width: 1px;
    border-color: #979797; 
`
const MainTitle = styled.Text`
    font-family: "Montserrat-Bold";
    margin: 15px 0px 10px;
    font-size: 16px;
`
const MainContainer = styled.View`
    padding: 0px 20px;
`
const SubText = styled.Text`
    font-family: "Montserrat";
    font-size: 14px;
    margin-bottom: 5px;
`
const HighlightText = styled(SubText)`
    text-decoration-line: underline;
    color: blue;
`
const AuthContainer = styled.TouchableOpacity`
    border-top-width: 1px;
    border-color: #979797;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    margin: 0px 10px;
`
const TextContainer = styled(AuthContainer)`
    border-top-width: 1px;
    border-bottom-width: 1px;
`
const LeftText = styled.Text`
  font-family: "Montserrat";
`
const RenderContainer = styled.View`
    margin-top: 20px;
`

const IconContainer = styled.View`
  margin-left: 7px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`