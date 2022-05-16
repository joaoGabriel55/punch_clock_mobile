import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { moderateScale } from "react-native-size-matters";
import {
  Container,
  Hours,
  Icon,
  Info,
  Label,
  RemoveCard,
  RemoveCardText,
} from "./punch-card.style";

const PunchCard = ({ item, deletePunch }) => {
  const renderLeftActions = () => {
    return (
      <RemoveCard onPress={() => deletePunch(item)}>
        <FontAwesome5 name="trash" size={moderateScale(15)} color="white" />
        <RemoveCardText>Remover</RemoveCardText>
      </RemoveCard>
    );
  };

  return (
    <Swipeable renderLeftActions={renderLeftActions} overshootLeft={false}>
      <Container>
        <View>
          <Label>Projeto</Label>
          <Info>{item.projectName}</Info>

          <Label>Horários</Label>
          <Hours>
            <Icon>
              <FontAwesome5
                name="mug-hot"
                size={moderateScale(10)}
                color="black"
              />
            </Icon>
            <Info>
              {item.morningFrom} - {item.morningTo}
            </Info>
          </Hours>

          <Hours>
            <Icon>
              <MaterialCommunityIcons
                name="silverware-fork-knife"
                size={moderateScale(12)}
                color="black"
              />
            </Icon>
            <Info>
              {item.afternoonFrom} - {item.afternoonTo}
            </Info>
          </Hours>
        </View>

        <View>
          <Label>Quando</Label>
          <Info>{item.date}</Info>

          <Label>Total de horas</Label>
          <Info>{item.totalHours}</Info>
        </View>
      </Container>
    </Swipeable>
  );
};

export default PunchCard;
