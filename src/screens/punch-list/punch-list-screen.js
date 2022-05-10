import React from "react";
import { View, FlatList, Text } from "react-native";
import PunchCard from "./compose/punch-card/punch-card";
import Template from "../../components/template/template";
import FloatingButton from "../../components/floating-button/floating-button";
import theme from "../../styles/theme";
import { moderateScale } from "react-native-size-matters";
import usePunches from "./hooks/use-punches";
import NoContent from "../../components/no-content/no-content";

const PunchListScreen = () => {
  const { punches, deletePunch } = usePunches();

  const noPunches = punches.length === 0;

  if (noPunches) return <NoContent message="Nada encontrado!" />;

  return (
    <Template>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <FlatList
          data={punches}
          renderItem={({ item }) => (
            <PunchCard item={item} deletePunch={deletePunch} />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingBottom: moderateScale(70),
            paddingTop: theme.spacing.m,
            marginHorizontal: theme.spacing.m,
          }}
        />
      </View>
      <FloatingButton />
    </Template>
  );
};

export default PunchListScreen;
