import { moderateScale, verticalScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.accent};
`;

export const CodeminerLogo = styled.Image`
  width: ${moderateScale(85)}px;
  height: ${moderateScale(75)}px;
  margin-top: ${verticalScale(35)}px;
`;

export const AppName = styled.Text`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: bold;
  font-size: ${moderateScale(32)}px;
  margin-top: ${verticalScale(15)}px;
`;

export const Header = styled.View`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${verticalScale(250)}px;
  width: 100%;
  border-bottom-right-radius: ${moderateScale(110)}px;
  border-bottom-left-radius: ${moderateScale(110)}px;
`;

export const AuthCard = styled.View`
  background-color: ${({ theme }) => theme.colors.accent};
  width: 75%;
  height: ${verticalScale(360)}px;
  border-radius: ${moderateScale(10)}px;
  elevation: 5;
  margin-top: ${verticalScale(20)}px;
  align-items: center;
  padding: ${moderateScale(20)}px ${moderateScale(18)}px;
`;

export const ScreenTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.heading}px;
  font-weight: bold;
  text-align: center;
`;

export const FormContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  margin-top: ${verticalScale(20)}px;
`;

export const InputWrapper = styled.View`
  margin-bottom: ${verticalScale(28)}px;
`;
