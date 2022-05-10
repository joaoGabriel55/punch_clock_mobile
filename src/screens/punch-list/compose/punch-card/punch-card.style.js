import styled from "styled-components/native";
import { moderateScale } from "react-native-size-matters";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.greyCard};
  padding: ${({ theme }) => theme.spacing.m}px;
  margin-vertical: ${({ theme }) => theme.spacing.s}px;
  justify-content: space-between;
  flex-direction: row;
  border-radius: ${moderateScale(8)}px;
  border: ${({ theme }) => theme.colors.disabled};
  border-left-width: ${moderateScale(6)}px;
  border-left-color: ${({ theme }) => theme.colors.primary};
`;

export const Hours = styled.View`
  flex-direction: row;
`;

export const Icon = styled.View`
  margin-top: 2px;
  margin-right: ${({ theme }) => theme.spacing.s}px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.regular}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

export const Info = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.s}px;
`;

export const RemoveCard = styled.TouchableOpacity`
  flex: 1;
  max-width: 40%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-vertical: ${({ theme }) => theme.spacing.s}px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.m}px;
  border-top-left-radius: ${moderateScale(8)}px;
  border-bottom-left-radius: ${moderateScale(8)}px;
  border: ${({ theme }) => theme.colors.disabled};
`;

export const RemoveCardText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  font-weight: bold;
  margin-left: ${moderateScale(5)}px;
`;
