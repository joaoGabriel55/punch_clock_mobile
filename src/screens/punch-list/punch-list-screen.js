import FloatingButton from "@components/floating-button/floating-button";
import NoContent from "@components/no-content/no-content";
import Template from "@components/template/template";
import theme from "@styles/theme";
import { showToast, TOAST_POSITION } from "@utils/toast";
import React from "react";
import { FlatList, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import PunchCard from "./compose/punch-card/punch-card";
import usePunches from "./hooks/use-punches";

const PunchListScreen = () => {
  const { punches, deletePunch, restorePunch } = usePunches();

  const noPunches = punches.length === 0;

  if (noPunches) return <NoContent message="Nada encontrado!" />;

  const handleDeletePunch = (index, punchRemoved) => {
    deletePunch(punchRemoved.id);

    showToast({
      text: "Punch removido. Clique aqui para reverter.",
      position: TOAST_POSITION.BOTTOM,
      onPressAndHide: () => {
        restorePunch({ index, punchRemoved });
      },
    });
  };

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
          renderItem={({ item, index }) => (
            <PunchCard
              item={item}
              deletePunch={(item) => {
                handleDeletePunch(index, item);
              }}
            />
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
